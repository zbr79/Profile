import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import widgetCompactScreenshot from '@images/provider-usage-widget-light-real.jpg';
import settingsAccountScreenshot from '@images/provider-usage-settings-account-real.jpg';
import ProjectShowcaseNav from '@components/ProjectShowcaseNav';
import { StyledUsagePage } from './providerUsageShowcaseStyles';

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`usage-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--usage-reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

const ProviderUsageShowcase = ({ github }) => {
  return (
    <StyledUsagePage>
      <ProjectShowcaseNav
        prefix="usage-nav"
        menuId="usage-project-menu"
        menuLabel="Provider Usage Monitor project menu"
        brand="Usage"
        sectionLinks={[
          { id: 'overview', label: 'Main view' },
          { id: 'settings', label: 'Settings' },
          { id: 'build', label: 'Stack' },
        ]}
        github={github}
        githubLabel="Source on GitHub"
        githubClassName="usage-github-link"
        iconClassName="usage-menu-icon"
      />

      <section className="usage-hero" id="overview">
        <div className="usage-hero-grid">
          <Reveal className="usage-hero-copy">
            <span className="usage-eyebrow">Desktop utility / local-first</span>
            <h1>Every AI limit. In view.</h1>
            <p>
              Provider Usage Monitor turns scattered subscription limits into one compact,
              always-on-top desktop surface.
            </p>
            <div className="usage-hero-facts">
              <span>5 providers</span>
              <span>127.0.0.1 by default</span>
              <span>Electron + Next.js</span>
            </div>
            <div className="usage-hero-highlights">
              <article>
                <strong>One surface</strong>
                <span>OpenCode, Cursor, Grok Bot, Codex, and Claude stay visible together.</span>
              </article>
              <article>
                <strong>Smart ranking</strong>
                <span>Available accounts rise up while exhausted windows move out of the way.</span>
              </article>
            </div>
          </Reveal>
          <Reveal className="usage-hero-visual" delay={160}>
            <figure className="usage-presentation usage-widget-presentation">
              <div className="usage-presentation-header">
                <span>Live provider view</span>
                <span>01 / Main view</span>
              </div>
              <div className="usage-presentation-stage">
                <div className="usage-real-screenshot usage-widget-capture">
                  <img
                    src={widgetCompactScreenshot}
                    alt="Actual light-theme Provider Usage Monitor widget"
                  />
                </div>
              </div>
              <figcaption>
                <strong>Five providers. One glance.</strong>
                <span>Usage, plans, and reset windows stay visible before the next prompt.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="usage-section usage-settings-section" id="settings">
        <div className="usage-section-inner">
          <Reveal className="usage-section-visual">
            <figure className="usage-presentation usage-settings-presentation">
              <div className="usage-presentation-header">
                <span>Account control</span>
                <span>02 / Settings</span>
              </div>
              <div className="usage-presentation-stage">
                <div className="usage-real-screenshot usage-settings-capture">
                  <img
                    src={settingsAccountScreenshot}
                    alt="Actual Provider Usage Monitor account settings"
                  />
                </div>
              </div>
              <figcaption>
                <strong>Control the surface without touching config files.</strong>
                <span>Accounts, providers, and display preferences stay in one place.</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="usage-section-copy" delay={140}>
            <span className="usage-kicker">02 / Settings</span>
            <h2>Control every provider locally.</h2>
            <p>
              Account management, provider toggles, display names, and widget preferences stay
              inside the desktop app.
            </p>
            <div className="usage-feature-list">
              <article>
                <strong>Manage accounts</strong>
                <span>Add, rename, inspect, or remove OpenCode accounts without editing files.</span>
              </article>
              <article>
                <strong>Choose what stays visible</strong>
                <span>Disable providers or accounts without losing their place in the widget.</span>
              </article>
              <article>
                <strong>Make it yours</strong>
                <span>Use provider names, nicknames, and light, dark, or automatic themes.</span>
              </article>
            </div>
            <div className="usage-security-callout">
              <strong>Local by design</strong>
              <span>Credentials are read from local app stores and never sent to a portfolio server.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="usage-section usage-build-section" id="build">
        <div className="usage-section-inner usage-build-inner">
          <Reveal className="usage-section-copy">
            <span className="usage-kicker">03 / Conclusion</span>
            <h2>A focused utility with serious boundaries.</h2>
            <p>
              The stack keeps the interface small, the provider adapters replaceable, and the
              usage data behind a local desktop boundary.
            </p>
            <div className="usage-build-points">
              <span>Loopback service at 127.0.0.1</span>
              <span>Protected account and key writes</span>
              <span>Quiet empty states when a provider is unavailable</span>
            </div>
          </Reveal>
          <Reveal className="usage-stack-panel" delay={140}>
            <div className="usage-stack-grid">
              {[
                ['Interface', 'Next.js + React'],
                ['Desktop shell', 'Electron'],
                ['Language', 'TypeScript'],
                ['Styling', 'Tailwind CSS'],
                ['Providers', '5 adapters'],
                ['Security', 'Local API secret'],
              ].map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="usage-release-note">
              <span>Latest hardening</span>
              <p>Safer writes, reliable empty states, normalized billing dates, and duplicate-server protection.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </StyledUsagePage>
  );
};

ProviderUsageShowcase.propTypes = {
  github: PropTypes.string,
};

export default ProviderUsageShowcase;
