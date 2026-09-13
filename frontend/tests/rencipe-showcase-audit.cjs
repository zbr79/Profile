const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseURL = process.env.RENCIPE_SHOWCASE_URL || 'http://127.0.0.1:8123/project/rencipe/';
const outputDirectory = path.resolve(__dirname, '../test-results/rencipe-showcase');

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'phone', width: 390, height: 844 },
];

const runCheck = (name, passed, details = '') => ({
  name,
  passed: Boolean(passed),
  details,
});

const scoreChecks = checks => {
  const passed = checks.filter(check => check.passed).length;
  return Math.round((passed / checks.length) * 100);
};

const inspectPage = async page => {
  await page.evaluate(() => document.fonts?.ready);

  return page.evaluate(() => {
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    };
    const sections = [...document.querySelectorAll('main > section')];
    const buildDetails = document.querySelector('.showcase-build-details');
    const technologyList = document.querySelector('.technology-list');
    const images = [...document.querySelectorAll('img')];
    const links = [...document.querySelectorAll('a')];
    const sectionWidths = sections.map(section => Math.round(section.getBoundingClientRect().width));
    const buildWidth = buildDetails?.getBoundingClientRect().width || 0;
    const technologyWidth = technologyList?.getBoundingClientRect().width || 0;

    return {
      viewport,
      sectionCount: sections.length,
      sectionWidths,
      buildWidth,
      technologyWidth,
      imageResults: images.map(image => ({
        alt: image.alt,
        loaded: image.complete && image.naturalWidth > 0,
      })),
      headingCount: document.querySelectorAll('h1').length,
      emptyAltImages: images.filter(image => !image.alt.trim()).length,
      unnamedLinks: links.filter(link => !link.textContent.trim() && !link.getAttribute('aria-label')).length,
      repeatedPortfolioChromeAbsent: !document.querySelector('header, footer, .showcase-nav'),
      buttonRects: [...document.querySelectorAll('.button-row a')].map(link => {
        const rect = link.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width };
      }),
    };
  });
};

const checksFor = (metrics, viewport) => {
  const checks = [
    runCheck(
      'No horizontal overflow',
      metrics.viewport.scrollWidth <= metrics.viewport.clientWidth,
      `${metrics.viewport.scrollWidth}px content / ${metrics.viewport.clientWidth}px viewport`,
    ),
    runCheck(
      'Four showcase sections present',
      metrics.sectionCount === 4,
      `${metrics.sectionCount} direct sections`,
    ),
    runCheck(
      'Every section fits the viewport',
      metrics.sectionWidths.every(width => width <= metrics.viewport.clientWidth),
      metrics.sectionWidths.join(', '),
    ),
    runCheck(
      'All showcase images loaded',
      metrics.imageResults.every(image => image.loaded),
      metrics.imageResults.map(image => `${image.loaded ? 'ok' : 'missing'}:${image.alt}`).join(' | '),
    ),
    runCheck('Exactly one page heading', metrics.headingCount === 1, `${metrics.headingCount} h1 elements`),
    runCheck('All images have alt text', metrics.emptyAltImages === 0, `${metrics.emptyAltImages} empty alt values`),
    runCheck('All links have accessible names', metrics.unnamedLinks === 0, `${metrics.unnamedLinks} unnamed links`),
    runCheck(
      'No repeated portfolio chrome',
      metrics.repeatedPortfolioChromeAbsent,
      metrics.repeatedPortfolioChromeAbsent ? 'dedicated project presentation' : 'portfolio nav or footer found',
    ),
    runCheck(
      'Technology grid fills its details column',
      metrics.technologyWidth >= metrics.buildWidth - 1,
      `${Math.round(metrics.technologyWidth)}px grid / ${Math.round(metrics.buildWidth)}px details`,
    ),
  ];

  if (viewport.name === 'phone') {
    checks.push(
      runCheck(
        'Phone page has no repeated navigation',
        metrics.repeatedPortfolioChromeAbsent,
        metrics.repeatedPortfolioChromeAbsent ? 'no archive/site navigation' : 'repeated navigation found',
      ),
      runCheck(
        'Phone hero actions fit',
        metrics.buttonRects.every(rect => rect.left >= -1 && rect.right <= metrics.viewport.clientWidth + 1),
        metrics.buttonRects.map(rect => `${Math.round(rect.left)}-${Math.round(rect.right)}`).join(', '),
      ),
    );
  }

  return checks;
};

const main = async () => {
  fs.mkdirSync(outputDirectory, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = {
    url: baseURL,
    generatedAt: new Date().toISOString(),
    viewports: [],
  };

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: viewport.name === 'phone' ? 2 : 1,
      });

      await page.goto(baseURL, { waitUntil: 'networkidle' });
      const metrics = await inspectPage(page);
      const checks = checksFor(metrics, viewport);
      const screenshotPath = path.join(outputDirectory, `${viewport.name}.png`);

      await page.screenshot({ path: screenshotPath, fullPage: true });
      report.viewports.push({
        ...viewport,
        score: scoreChecks(checks),
        checks,
        screenshot: screenshotPath,
      });

      await page.close();
    }
  } finally {
    await browser.close();
  }

  const accessibilityChecks = report.viewports[0].checks.filter(check =>
    ['Exactly one page heading', 'All images have alt text', 'All links have accessible names'].includes(
      check.name,
    ),
  );

  report.summary = {
    layoutScore: Math.round(
      report.viewports.reduce((total, viewport) => total + viewport.score, 0) / report.viewports.length,
    ),
    desktopScore: report.viewports.find(viewport => viewport.name === 'desktop').score,
    phoneScore: report.viewports.find(viewport => viewport.name === 'phone').score,
    accessibilityScore: scoreChecks(accessibilityChecks),
  };

  const reportPath = path.join(outputDirectory, 'report.json');
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report.summary, null, 2));
  console.log(`Report: ${reportPath}`);

  if (report.summary.layoutScore < 100 || report.summary.accessibilityScore < 100) {
    process.exitCode = 1;
  }
};

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
