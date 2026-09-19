import styled from 'styled-components';

export const StyledUsagePage = styled.main`
  --usage-ink: #20252b;
  --usage-muted: #69727c;
  --usage-paper: #f7f8fa;
  --usage-panel: #ffffff;
  --usage-line: #dce1e6;
  --usage-blue: #4b78c2;
  --usage-green: #38a979;
  --usage-amber: #d49a3a;
  --usage-red: #c96666;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  max-width: none;
  min-width: 0;
  padding: 0;
  overflow: hidden;
  background: var(--usage-paper);
  color: var(--usage-ink);

  .usage-nav-toggle {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 18;
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    padding: 0;
    border: 1px solid var(--usage-line);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.94);
    color: var(--usage-ink);
    box-shadow: 0 12px 30px rgba(32, 37, 43, 0.14);
    cursor: pointer;
  }

  .usage-menu-icon {
    display: grid;
    gap: 4px;
    width: 18px;

    span {
      display: block;
      height: 1px;
      background: currentColor;
    }
  }

  .usage-nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 16;
    border: 0;
    background: rgba(32, 37, 43, 0.22);
    opacity: 0;
    pointer-events: none;
    transition: opacity 220ms ease;

    &.is-open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .usage-nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 17;
    display: flex;
    flex-direction: column;
    width: min(330px, 88vw);
    height: 100vh;
    padding: 28px;
    background: var(--usage-panel);
    box-shadow: -20px 0 50px rgba(32, 37, 43, 0.15);
    transform: translateX(100%);
    transition: transform 260ms ease;

    &.is-open {
      transform: translateX(0);
    }

    nav {
      display: grid;
      margin-top: 48px;

      a {
        padding: 16px 0;
        border-bottom: 1px solid var(--usage-line);
        color: var(--usage-muted);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        text-transform: uppercase;

        &:hover {
          color: var(--usage-blue);
        }
      }
    }
  }

  .usage-nav-panel-header,
  .settings-preview-header,
  .usage-provider-heading,
  .usage-progress-meta,
  .usage-widget-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .usage-nav-panel-header {
    color: var(--usage-ink);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    button {
      border: 0;
      background: transparent;
      color: var(--usage-muted);
      font-size: 28px;
      line-height: 1;
      cursor: pointer;
    }
  }

  .usage-github-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    color: var(--usage-ink);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .usage-nav-external {
    display: contents;
  }

  .usage-hero,
  .usage-section {
    width: 100%;
    max-width: none;
    margin: 0;
    scroll-margin-top: 32px;
  }

  .usage-hero {
    padding: 56px clamp(25px, 8vw, 150px) 110px;
    background: linear-gradient(135deg, #f7f8fa 0%, #e9eef3 100%);
  }

  .usage-hero-grid,
  .usage-section-inner {
    display: grid;
    max-width: 1240px;
    margin: 0 auto;
  }

  .usage-hero-grid {
    grid-template-columns: minmax(360px, 0.9fr) minmax(420px, 1.1fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .usage-eyebrow,
  .usage-kicker,
  .usage-fact-list,
  .usage-hero-facts,
  .usage-release-note > span {
    color: var(--usage-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .usage-eyebrow,
  .usage-kicker {
    display: block;
    margin-bottom: 20px;
  }

  h1,
  h2 {
    margin: 0;
    color: var(--usage-ink);
    font-weight: 600;
    letter-spacing: -0.06em;
    line-height: 0.98;
  }

  h1 {
    max-width: 600px;
    font-size: clamp(46px, 6vw, 84px);
    line-height: 1.04;
  }

  h2 {
    max-width: 520px;
    font-size: clamp(32px, 4vw, 54px);
  }

  .usage-hero-copy > p,
  .usage-section-copy > p {
    max-width: 500px;
    margin: 30px 0 0;
    color: var(--usage-muted);
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .usage-hero-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 24px;
    margin-top: 44px;
  }

  .usage-hero-highlights {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    max-width: 600px;
    margin-top: 38px;

    article {
      padding-top: 16px;
      border-top: 1px solid var(--usage-line);
    }

    strong,
    span {
      display: block;
    }

    strong {
      font-size: 15px;
      font-weight: 600;
    }

    span {
      margin-top: 8px;
      color: var(--usage-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  .usage-hero-visual {
    position: relative;
  }

  .usage-presentation {
    width: 100%;
    margin: 0;
  }

  .usage-widget-presentation {
    width: min(100%, 420px);
    margin-left: auto;
  }

  .usage-settings-presentation {
    width: min(100%, 680px);
    margin-left: auto;
  }

  .usage-presentation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    color: var(--usage-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .usage-presentation-stage {
    display: grid;
    place-items: center;
    padding: 22px 18px 20px;
    border: 1px solid rgba(32, 37, 43, 0.1);
    background: #eef2f4;
  }

  .usage-settings-presentation .usage-presentation-stage {
    padding: 20px 18px;
    background: #e8edef;
  }

  .usage-presentation .usage-real-screenshot {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 14px;
    border: 1px solid rgba(32, 37, 43, 0.22);
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 18px 35px rgba(32, 37, 43, 0.2);
  }

  .usage-presentation figcaption {
    display: grid;
    gap: 6px;
    margin-top: 18px;
  }

  .usage-presentation figcaption strong {
    color: var(--usage-ink);
    font-size: 16px;
    font-weight: 600;
  }

  .usage-presentation figcaption span {
    max-width: 480px;
    color: var(--usage-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .usage-real-screenshot {
    overflow: visible;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .usage-widget-capture {
    width: min(100%, 360px);
    margin-left: auto;
  }

  .usage-settings-capture {
    width: min(100%, 576px);
    margin-left: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .usage-widget-preview,
  .usage-settings-preview {
    border: 1px solid rgba(32, 37, 43, 0.13);
    border-radius: 18px;
    background: var(--usage-panel);
    box-shadow: 0 28px 70px rgba(32, 37, 43, 0.14);
  }

  .usage-widget-preview {
    width: min(100%, 560px);
    padding: 10px;
    margin-left: auto;
  }

  .usage-window-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 6px 12px;
    color: var(--usage-muted);
    font-family: var(--font-mono);
    font-size: 10px;
  }

  .usage-window-dots {
    display: flex;
    gap: 4px;
    margin-right: auto;

    i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--usage-line);
    }
  }

  .usage-window-action {
    color: var(--usage-blue);
  }

  .usage-widget-body {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .usage-widget-preview.is-expanded .usage-widget-body {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .usage-provider-card {
    min-width: 0;
    padding: 11px;
    border: 1px solid var(--usage-line);
    border-radius: 10px;
    background: #fafbfc;

    &.is-disabled {
      opacity: 0.52;
    }
  }

  .usage-provider-heading {
    justify-content: flex-start;
    gap: 7px;
    min-width: 0;
  }

  .provider-mark {
    display: grid;
    width: 20px;
    height: 20px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 5px;
    color: white;
    font-size: 10px;
    font-weight: 700;

    &.green { background: var(--usage-green); }
    &.blue { background: var(--usage-blue); }
    &.amber { background: var(--usage-amber); }
    &.muted { background: #8d98a2; }
  }

  .usage-provider-heading strong {
    overflow: hidden;
    color: var(--usage-ink);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .provider-badge {
    margin-left: auto;
    padding: 3px 5px;
    border: 1px solid var(--usage-line);
    border-radius: 999px;
    color: var(--usage-muted);
    font-family: var(--font-mono);
    font-size: 9px;
  }

  .usage-progress {
    margin-top: 14px;
  }

  .usage-progress-meta,
  .usage-progress small,
  .provider-status {
    color: var(--usage-muted);
    font-family: var(--font-mono);
    font-size: 9px;
  }

  .usage-progress-track {
    height: 5px;
    margin: 6px 0;
    overflow: hidden;
    border-radius: 999px;
    background: var(--usage-line);
  }

  .usage-progress-value {
    display: block;
    height: 100%;
    border-radius: inherit;
    &.green { background: var(--usage-green); }
    &.blue { background: var(--usage-blue); }
    &.amber { background: var(--usage-amber); }
  }

  .usage-widget-footer {
    padding: 12px 4px 2px;
    color: var(--usage-muted);
    font-family: var(--font-mono);
    font-size: 9px;
  }

  .usage-section {
    padding: 110px clamp(25px, 8vw, 150px);
  }

  .usage-settings-section {
    background: #eef2f6;
  }

  .usage-build-section {
    background: var(--usage-panel);
  }

  .usage-section-inner {
    grid-template-columns: minmax(240px, 0.55fr) minmax(0, 1.45fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .usage-settings-section .usage-section-inner {
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
    grid-template-areas: 'copy visual';
  }

  .usage-section-copy {
    position: relative;
    z-index: 1;
  }

  .usage-settings-section .usage-section-copy {
    grid-area: copy;
  }

  .usage-fact-list {
    display: grid;
    gap: 10px;
    max-width: 450px;
    margin-top: 30px;

    span {
      padding-top: 10px;
      border-top: 1px solid var(--usage-line);
    }
  }

  .usage-feature-list {
    display: grid;
    gap: 14px;
    max-width: 520px;
    margin-top: 34px;

    article {
      display: grid;
      gap: 5px;
      padding-top: 14px;
      border-top: 1px solid var(--usage-line);
    }

    strong {
      font-size: 15px;
      font-weight: 600;
    }

    span {
      color: var(--usage-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  .usage-section-visual {
    grid-area: visual;
    min-width: 0;
  }

  .usage-widget-preview.is-expanded {
    width: 100%;
  }

  .usage-settings-preview {
    width: min(100%, 570px);
    padding: 20px;
  }

  .settings-preview-header {
    color: var(--usage-ink);
    font-size: 18px;
    font-weight: 600;
  }

  .settings-close {
    color: var(--usage-muted);
    font-size: 22px;
    font-weight: 400;
  }

  .settings-main-tabs,
  .settings-provider-tabs {
    display: flex;
    gap: 18px;
    overflow: auto;
    margin-top: 24px;
    color: var(--usage-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
  }

  .settings-main-tabs .active,
  .settings-provider-tabs .active {
    color: var(--usage-blue);
  }

  .settings-provider-tabs {
    gap: 0;
    padding: 14px 0;
    border-bottom: 1px solid var(--usage-line);

    span {
      padding: 0 12px;
      border-right: 1px solid var(--usage-line);
    }

    span:first-child { padding-left: 0; }
  }

  .settings-account {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 0;
    border-bottom: 1px solid var(--usage-line);

    &.dimmed { opacity: 0.48; }

    strong,
    small {
      display: block;
    }

    strong {
      font-size: 14px;
    }

    small {
      margin-top: 5px;
      color: var(--usage-muted);
      font-family: var(--font-mono);
      font-size: 10px;
    }
  }

  .settings-state {
    color: var(--usage-green);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
  }

  .settings-options {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 14px;
    align-items: center;
    padding-top: 20px;
    color: var(--usage-muted);
    font-size: 12px;

    strong {
      color: var(--usage-ink);
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 400;
    }
  }

  .toggle {
    display: block;
    width: 28px;
    height: 16px;
    padding: 2px;
    border-radius: 999px;
    background: var(--usage-line);

    &::after {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--usage-panel);
      content: '';
    }

    &.on {
      background: var(--usage-blue);
      &::after { margin-left: 12px; }
    }
  }

  .usage-security-callout {
    display: grid;
    gap: 8px;
    max-width: 500px;
    margin-top: 32px;
    padding: 18px 20px;
    border-left: 3px solid var(--usage-green);
    background: rgba(255, 255, 255, 0.56);

    strong {
      font-size: 14px;
    }

    span {
      color: var(--usage-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  .usage-build-inner {
    grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
  }

  .usage-build-points {
    display: grid;
    gap: 10px;
    max-width: 440px;
    margin-top: 32px;

    span {
      padding-left: 18px;
      color: var(--usage-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      line-height: 1.5;
      position: relative;

      &::before {
        position: absolute;
        left: 0;
        color: var(--usage-green);
        content: '→';
      }
    }
  }

  .usage-stack-panel {
    width: 100%;
  }

  .usage-stack-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--usage-line);
    border-left: 1px solid var(--usage-line);

    article {
      min-height: 100px;
      padding: 18px 20px;
      border-right: 1px solid var(--usage-line);
      border-bottom: 1px solid var(--usage-line);
    }

    span {
      display: block;
      margin-bottom: 12px;
      color: var(--usage-blue);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      text-transform: uppercase;
    }

    strong {
      font-size: 17px;
      font-weight: 600;
    }
  }

  .usage-release-note {
    display: grid;
    gap: 10px;
    margin-top: 24px;
    padding: 18px 20px;
    border: 1px solid var(--usage-line);
    background: #fafbfc;

    p {
      margin: 0;
      color: var(--usage-muted);
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .usage-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 700ms ease, transform 700ms ease;
    transition-delay: var(--usage-reveal-delay, 0ms);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .usage-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  @media (max-width: 1100px) {
    .usage-hero-grid {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .usage-hero-copy {
      max-width: 680px;
    }
  }

  @media (max-width: 900px) {
    .usage-hero-grid,
    .usage-section-inner,
    .usage-settings-section .usage-section-inner,
    .usage-build-inner {
      grid-template-columns: 1fr;
      grid-template-areas: none;
      gap: 64px;
    }

    .usage-settings-section .usage-section-copy,
    .usage-section-visual {
      grid-area: auto;
    }

    .usage-hero-copy,
    .usage-section-copy {
      max-width: 680px;
    }

    .usage-section-visual,
    .usage-stack-panel {
      width: min(100%, 680px);
    }
  }

  @media (max-width: 560px) {
    .usage-nav-toggle {
      right: 16px;
      bottom: 16px;
    }

    .usage-hero,
    .usage-section {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    h1 {
      font-size: clamp(48px, 14vw, 70px);
    }

    h2 {
      font-size: clamp(34px, 10vw, 48px);
    }

    .usage-hero-facts {
      display: grid;
      gap: 10px;
    }

    .usage-hero-highlights {
      grid-template-columns: 1fr;
    }

    .usage-presentation-header {
      font-size: 10px;
    }

    .usage-widget-presentation,
    .usage-settings-presentation {
      width: 100%;
    }

    .usage-presentation-stage {
      padding: 12px 10px;
    }

    .usage-settings-presentation .usage-presentation-stage {
      padding: 10px 8px;
    }

    .usage-presentation .usage-real-screenshot {
      padding: 10px;
    }

    .usage-presentation figcaption strong {
      font-size: 15px;
    }

    .usage-stack-grid {
      article {
        min-height: 88px;
        padding: 14px;
      }

      strong {
        font-size: 15px;
      }
    }
  }
`;
