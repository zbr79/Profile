import styled from 'styled-components';

export const StyledAgentPage = styled.main`
  --agent-ink: #27242d;
  --agent-muted: #706b78;
  --agent-paper: #fffefe;
  --agent-soft: #f5f2fa;
  --agent-line: #dfd9e8;
  --agent-orange: #f36d32;
  --agent-deep-orange: #d85621;
  --agent-purple: #7656c9;

  width: 100vw;
  max-width: none;
  margin-left: calc(50% - 50vw);
  padding: 0;
  overflow: hidden;
  background: var(--agent-paper);
  color: var(--agent-ink);

  .agent-nav-toggle {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 18;
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    padding: 0;
    border: 1px solid var(--agent-line);
    border-radius: 50%;
    background: rgba(255, 254, 254, 0.96);
    color: var(--agent-ink);
    box-shadow: 0 12px 30px rgba(39, 36, 45, 0.14);
    cursor: pointer;

    &:hover,
    &:focus-visible {
      border-color: var(--agent-orange);
      color: var(--agent-deep-orange);
    }
  }

  .agent-menu-icon {
    display: grid;
    gap: 4px;
    width: 18px;

    span {
      display: block;
      width: 18px;
      height: 1px;
      background: currentColor;
    }
  }

  .agent-nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 19;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(39, 36, 45, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: opacity 220ms ease;

    &.is-open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .agent-nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    width: min(340px, 88vw);
    height: 100dvh;
    padding: 28px;
    border-left: 1px solid var(--agent-line);
    border-radius: 24px 0 0 24px;
    background: var(--agent-paper);
    box-shadow: -20px 0 50px rgba(39, 36, 45, 0.14);
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: transform 220ms ease, opacity 220ms ease, visibility 220ms ease;

    &.is-open {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }

  .agent-nav-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    color: var(--agent-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    .agent-nav-panel-brand {
      color: var(--agent-ink);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.05em;

      &:hover,
      &:focus-visible {
        color: var(--agent-deep-orange);
      }
    }

    button {
      padding: 0 0 0 14px;
      border: 0;
      background: transparent;
      color: var(--agent-ink);
      font-size: 26px;
      line-height: 1;
      cursor: pointer;
    }
  }

  .agent-nav-links {
    display: grid;
    gap: 0;
    padding: 12px 0 4px;

    a {
      display: flex;
      align-items: center;
      padding: 13px 0;
      border-bottom: 1px solid var(--agent-line);
      color: var(--agent-ink);
      font-size: 17px;

      &:hover,
      &:focus-visible {
        color: var(--agent-deep-orange);
      }
    }
  }

  .agent-nav-external {
    display: contents;
  }

  .agent-github-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    color: var(--agent-ink);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .agent-hero,
  .agent-section {
    width: 100%;
    max-width: none;
    margin: 0;
    scroll-margin-top: 32px;
  }

  .agent-hero {
    padding: 56px clamp(25px, 8vw, 150px) 110px;
    background: linear-gradient(135deg, #fffefe 0%, #f7f0ff 58%, #fff5ed 100%);
  }

  .agent-hero-grid,
  .agent-section-inner,
  .agent-responsive-inner,
  .agent-build-inner {
    display: grid;
    max-width: 1240px;
    margin: 0 auto;
  }

  .agent-hero-grid {
    grid-template-columns: minmax(360px, 0.9fr) minmax(420px, 1.1fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .agent-hero-copy {
    max-width: 600px;
  }

  .agent-eyebrow,
  .agent-kicker,
  .agent-hero-facts,
  .agent-release-note > span {
    color: var(--agent-deep-orange);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .agent-eyebrow,
  .agent-kicker {
    display: block;
    margin-bottom: 20px;
  }

  h1,
  h2 {
    margin: 0;
    color: var(--agent-ink);
    font-weight: 600;
    letter-spacing: -0.065em;
    line-height: 0.98;
  }

  h1 {
    max-width: 680px;
    font-size: clamp(46px, 6vw, 84px);
    line-height: 1.04;
  }

  h2 {
    max-width: 540px;
    font-size: clamp(32px, 4vw, 54px);
  }

  .agent-hero-copy > p,
  .agent-section-copy > p,
  .agent-responsive-copy > p,
  .agent-build-copy > p {
    max-width: 540px;
    margin: 30px 0 0;
    color: var(--agent-muted);
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .agent-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;

    a {
      display: inline-flex;
      align-items: center;
      min-height: 46px;
      padding: 0 19px;
      border: 1px solid var(--agent-ink);
      border-radius: 999px;
      color: var(--agent-ink);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:hover,
      &:focus-visible {
        background: var(--agent-ink);
        color: var(--agent-paper);
        transform: translateY(-2px);
      }
    }

    .primary {
      border-color: var(--agent-deep-orange);
      background: var(--agent-deep-orange);
      color: #ffffff;

      &:hover,
      &:focus-visible {
        border-color: var(--agent-ink);
        background: var(--agent-ink);
      }
    }
  }

  .agent-hero-facts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 54px;

    div {
      padding-top: 14px;
      border-top: 1px solid var(--agent-line);
      line-height: 1.5;
    }

    strong {
      display: block;
      margin-bottom: 6px;
      color: var(--agent-ink);
      font-family: var(--font-sans);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: none;
    }
  }

  .agent-hero-visual,
  .agent-section-visual {
    position: relative;
  }

  .agent-presentation {
    width: 100%;
    margin: 0;
  }

  .agent-presentation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    color: var(--agent-deep-orange);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .agent-presentation-stage {
    display: grid;
    place-items: center;
    padding: 22px 18px 20px;
    border: 1px solid rgba(39, 36, 45, 0.1);
    background: #f1eafd;
  }

  .agent-real-screenshot {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(39, 36, 45, 0.18);
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 18px 35px rgba(39, 36, 45, 0.17);

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .agent-home-presentation,
  .agent-builder-presentation {
    width: min(100%, 760px);
    margin-left: auto;
  }

  .agent-presentation figcaption,
  .agent-phone-presentation figcaption {
    display: grid;
    gap: 6px;
    margin-top: 18px;
  }

  .agent-presentation figcaption strong {
    color: var(--agent-ink);
    font-size: 16px;
    font-weight: 600;
  }

  .agent-presentation figcaption span {
    max-width: 500px;
    color: var(--agent-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .agent-section {
    padding: 110px clamp(25px, 8vw, 150px);
  }

  .agent-build-loop-section {
    background: var(--agent-soft);
  }

  .agent-section-inner {
    grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .agent-section-copy {
    max-width: 540px;
  }

  .agent-feature-list {
    display: grid;
    gap: 14px;
    max-width: 540px;
    margin-top: 34px;

    article {
      display: grid;
      gap: 5px;
      padding-top: 14px;
      border-top: 1px solid var(--agent-line);
    }

    strong {
      font-size: 15px;
      font-weight: 600;
    }

    span {
      color: var(--agent-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  .agent-responsive-section {
    background: var(--agent-paper);
  }

  .agent-responsive-inner {
    grid-template-columns: minmax(300px, 0.9fr) minmax(300px, 1.1fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .agent-responsive-copy {
    max-width: 520px;
  }

  .agent-responsive-facts {
    display: grid;
    gap: 10px;
    max-width: 470px;
    margin-top: 30px;
    color: var(--agent-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.04em;
    text-transform: uppercase;

    span {
      padding-top: 10px;
      border-top: 1px solid var(--agent-line);
    }
  }

  .agent-mobile-visual {
    justify-self: center;
  }

  .agent-phone-presentation {
    width: min(100%, 320px);
    margin: 0 auto;
  }

  .agent-phone-frame {
    padding: 10px;
    border: 1px solid rgba(39, 36, 45, 0.16);
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0 26px 60px rgba(39, 36, 45, 0.16);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 22px;
    }
  }

  .agent-phone-presentation figcaption {
    color: var(--agent-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }

  .agent-build-section {
    background: var(--agent-soft);
  }

  .agent-build-inner {
    grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: start;
  }

  .agent-build-copy {
    max-width: 540px;
  }

  .agent-stack-panel {
    width: 100%;
  }

  .agent-stack-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--agent-line);
    border-left: 1px solid var(--agent-line);

    article {
      min-height: 100px;
      padding: 18px 20px;
      border-right: 1px solid var(--agent-line);
      border-bottom: 1px solid var(--agent-line);
    }

    article:last-child {
      grid-column: span 2;
    }

    span {
      display: block;
      margin-bottom: 12px;
      color: var(--agent-deep-orange);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      display: block;
      color: var(--agent-ink);
      font-size: 17px;
      font-weight: 600;
      line-height: 1.15;
    }
  }

  .agent-release-note {
    display: grid;
    gap: 10px;
    margin-top: 24px;
    padding: 18px 20px;
    border: 1px solid var(--agent-line);
    background: var(--agent-paper);

    p {
      margin: 0;
      color: var(--agent-muted);
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .agent-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 700ms var(--easing), transform 700ms var(--easing);
    transition-delay: var(--agent-reveal-delay, 0ms);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .agent-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  @media (max-width: 1100px) {
    .agent-hero-grid {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .agent-hero-copy,
    .agent-section-copy,
    .agent-responsive-copy {
      max-width: 680px;
    }

    .agent-home-presentation,
    .agent-builder-presentation {
      margin-left: 0;
    }
  }

  @media (max-width: 900px) {
    .agent-section-inner,
    .agent-responsive-inner,
    .agent-build-inner {
      grid-template-columns: 1fr;
      gap: 64px;
    }

    .agent-section-visual,
    .agent-mobile-visual,
    .agent-stack-panel {
      width: min(100%, 760px);
    }

    .agent-mobile-visual {
      justify-self: start;
    }
  }

  @media (max-width: 560px) {
    .agent-nav-toggle {
      right: 16px;
      bottom: 16px;
    }

    .agent-nav-panel {
      width: min(320px, 88vw);
      padding: 20px;
    }

    .agent-hero,
    .agent-section {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    h1 {
      font-size: clamp(46px, 14vw, 70px);
    }

    h2 {
      font-size: clamp(34px, 10vw, 48px);
    }

    .agent-hero-facts {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .agent-presentation-header {
      font-size: 10px;
    }

    .agent-presentation-stage {
      padding: 12px 10px;
    }

    .agent-stack-grid {
      article {
        min-height: 88px;
        padding: 14px;
      }

      strong {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 420px) {
    .agent-button-row {
      flex-direction: column;
      align-items: stretch;

      a {
        justify-content: center;
      }
    }
  }
`;
