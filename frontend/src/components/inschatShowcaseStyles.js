import styled from 'styled-components';

export const StyledInsChatPage = styled.main`
  --inschat-ink: #1d1d1f;
  --inschat-muted: #6e6e73;
  --inschat-paper: #ffffff;
  --inschat-soft: #f5f5f7;
  --inschat-line: #dfe3e8;
  --inschat-blue: #4f8df7;
  --inschat-deep-blue: #2877f5;

  width: 100vw;
  max-width: none;
  margin-left: calc(50% - 50vw);
  padding: 0;
  overflow: hidden;
  background: var(--inschat-paper);
  color: var(--inschat-ink);

  .inschat-nav-toggle {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 18;
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    padding: 0;
    border: 1px solid var(--inschat-line);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.96);
    color: var(--inschat-ink);
    box-shadow: 0 12px 30px rgba(29, 29, 31, 0.14);
    cursor: pointer;

    &:hover,
    &:focus-visible {
      border-color: var(--inschat-blue);
      color: var(--inschat-deep-blue);
    }
  }

  .inschat-menu-icon {
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

  .inschat-nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 19;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(29, 29, 31, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: opacity 220ms ease;

    &.is-open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .inschat-nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    width: min(340px, 88vw);
    height: 100dvh;
    padding: 28px;
    border-left: 1px solid var(--inschat-line);
    border-radius: 24px 0 0 24px;
    background: var(--inschat-paper);
    box-shadow: -20px 0 50px rgba(29, 29, 31, 0.14);
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition:
      transform 220ms ease,
      opacity 220ms ease,
      visibility 220ms ease;

    &.is-open {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }

  .inschat-nav-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    color: var(--inschat-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    .inschat-nav-panel-brand {
      color: var(--inschat-ink);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.05em;

      &:hover,
      &:focus-visible {
        color: var(--inschat-deep-blue);
      }
    }

    button {
      padding: 0 0 0 14px;
      border: 0;
      background: transparent;
      color: var(--inschat-ink);
      font-size: 26px;
      line-height: 1;
      cursor: pointer;
    }
  }

  .inschat-nav-links {
    display: grid;
    gap: 0;
    padding: 12px 0 4px;

    a {
      display: flex;
      align-items: center;
      padding: 13px 0;
      border-bottom: 1px solid var(--inschat-line);
      color: var(--inschat-ink);
      font-size: 17px;

      &:hover,
      &:focus-visible {
        color: var(--inschat-deep-blue);
      }
    }
  }

  .inschat-nav-external {
    display: contents;
  }

  .inschat-github-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    color: var(--inschat-ink);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .inschat-hero,
  .inschat-section {
    width: 100%;
    max-width: none;
    margin: 0;
    scroll-margin-top: 32px;
  }

  .inschat-hero {
    padding: 56px clamp(25px, 8vw, 150px) 110px;
    background: linear-gradient(135deg, #ffffff 0%, #f4f8ff 100%);
  }

  .inschat-hero-grid,
  .inschat-section-inner,
  .inschat-responsive-inner,
  .inschat-build-inner {
    display: grid;
    max-width: 1240px;
    margin: 0 auto;
  }

  .inschat-hero-grid {
    grid-template-columns: minmax(360px, 0.9fr) minmax(420px, 1.1fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .inschat-hero-copy {
    max-width: 600px;
  }

  .inschat-eyebrow,
  .inschat-kicker,
  .inschat-hero-facts,
  .inschat-release-note > span {
    color: var(--inschat-deep-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .inschat-eyebrow,
  .inschat-kicker {
    display: block;
    margin-bottom: 20px;
  }

  h1,
  h2 {
    margin: 0;
    color: var(--inschat-ink);
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

  .inschat-hero-copy > p,
  .inschat-section-copy > p,
  .inschat-responsive-copy > p,
  .inschat-build-copy > p {
    max-width: 540px;
    margin: 30px 0 0;
    color: var(--inschat-muted);
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .inschat-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;

    a {
      display: inline-flex;
      align-items: center;
      min-height: 46px;
      padding: 0 19px;
      border: 1px solid var(--inschat-ink);
      border-radius: 999px;
      color: var(--inschat-ink);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:hover,
      &:focus-visible {
        background: var(--inschat-ink);
        color: var(--inschat-paper);
        transform: translateY(-2px);
      }
    }

    .primary {
      border-color: var(--inschat-deep-blue);
      background: var(--inschat-deep-blue);
      color: #ffffff;

      &:hover,
      &:focus-visible {
        border-color: var(--inschat-ink);
        background: var(--inschat-ink);
      }
    }
  }

  .inschat-hero-facts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 54px;

    div {
      padding-top: 14px;
      border-top: 1px solid var(--inschat-line);
      line-height: 1.5;
    }

    strong {
      display: block;
      margin-bottom: 6px;
      color: var(--inschat-ink);
      font-family: var(--font-sans);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: none;
    }
  }

  .inschat-hero-visual {
    position: relative;
  }

  .inschat-presentation {
    width: 100%;
    margin: 0;
  }

  .inschat-presentation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    color: var(--inschat-deep-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .inschat-presentation-stage {
    display: grid;
    place-items: center;
    padding: 22px 18px 20px;
    border: 1px solid rgba(29, 29, 31, 0.1);
    background: #eef4ff;
  }

  .inschat-real-screenshot {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(29, 29, 31, 0.18);
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 18px 35px rgba(29, 29, 31, 0.17);

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .inschat-home-presentation {
    width: min(100%, 720px);
    margin-left: auto;
  }

  .inschat-home-capture {
    width: 100%;
  }

  .inschat-records-presentation {
    width: min(100%, 760px);
  }

  .inschat-records-capture {
    width: 100%;
  }

  .inschat-presentation figcaption,
  .inschat-phone-presentation figcaption {
    display: grid;
    gap: 6px;
    margin-top: 18px;
  }

  .inschat-presentation figcaption strong {
    color: var(--inschat-ink);
    font-size: 16px;
    font-weight: 600;
  }

  .inschat-presentation figcaption span {
    max-width: 500px;
    color: var(--inschat-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .inschat-section {
    padding: 110px clamp(25px, 8vw, 150px);
  }

  .inschat-workflow-section {
    background: var(--inschat-soft);
  }

  .inschat-section-inner {
    grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .inschat-section-visual {
    min-width: 0;
  }

  .inschat-section-copy {
    max-width: 540px;
  }

  .inschat-feature-list {
    display: grid;
    gap: 14px;
    max-width: 540px;
    margin-top: 34px;

    article {
      display: grid;
      gap: 5px;
      padding-top: 14px;
      border-top: 1px solid var(--inschat-line);
    }

    strong {
      font-size: 15px;
      font-weight: 600;
    }

    span {
      color: var(--inschat-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  .inschat-responsive-section {
    background: var(--inschat-paper);
  }

  .inschat-responsive-inner {
    grid-template-columns: minmax(300px, 0.9fr) minmax(300px, 1.1fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: center;
  }

  .inschat-responsive-copy {
    max-width: 520px;
  }

  .inschat-responsive-facts {
    display: grid;
    gap: 10px;
    max-width: 470px;
    margin-top: 30px;
    color: var(--inschat-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.04em;
    text-transform: uppercase;

    span {
      padding-top: 10px;
      border-top: 1px solid var(--inschat-line);
    }
  }

  .inschat-mobile-visual {
    justify-self: center;
  }

  .inschat-phone-presentation {
    width: min(100%, 320px);
    margin: 0 auto;
  }

  .inschat-phone-frame {
    padding: 10px;
    border: 1px solid rgba(29, 29, 31, 0.16);
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0 26px 60px rgba(29, 29, 31, 0.16);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 22px;
    }
  }

  .inschat-phone-presentation figcaption {
    color: var(--inschat-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }

  .inschat-build-section {
    background: var(--inschat-soft);
  }

  .inschat-build-inner {
    grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
    gap: clamp(50px, 8vw, 120px);
    align-items: start;
  }

  .inschat-build-copy {
    max-width: 540px;
  }

  .inschat-stack-panel {
    width: 100%;
  }

  .inschat-stack-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--inschat-line);
    border-left: 1px solid var(--inschat-line);

    article {
      min-height: 100px;
      padding: 18px 20px;
      border-right: 1px solid var(--inschat-line);
      border-bottom: 1px solid var(--inschat-line);
    }

    article:last-child {
      grid-column: span 2;
    }

    span {
      display: block;
      margin-bottom: 12px;
      color: var(--inschat-deep-blue);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      display: block;
      color: var(--inschat-ink);
      font-size: 17px;
      font-weight: 600;
      line-height: 1.15;
    }
  }

  .inschat-release-note {
    display: grid;
    gap: 10px;
    margin-top: 24px;
    padding: 18px 20px;
    border: 1px solid var(--inschat-line);
    background: var(--inschat-paper);

    p {
      margin: 0;
      color: var(--inschat-muted);
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .inschat-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 700ms var(--easing), transform 700ms var(--easing);
    transition-delay: var(--inschat-reveal-delay, 0ms);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .inschat-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  @media (max-width: 1100px) {
    .inschat-hero-grid {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .inschat-hero-copy,
    .inschat-section-copy,
    .inschat-responsive-copy {
      max-width: 680px;
    }

    .inschat-home-presentation {
      margin-left: 0;
    }
  }

  @media (max-width: 900px) {
    .inschat-section-inner,
    .inschat-responsive-inner,
    .inschat-build-inner {
      grid-template-columns: 1fr;
      gap: 64px;
    }

    .inschat-section-visual,
    .inschat-mobile-visual,
    .inschat-stack-panel {
      width: min(100%, 760px);
    }

    .inschat-mobile-visual {
      justify-self: start;
    }
  }

  @media (max-width: 560px) {
    .inschat-nav-toggle {
      right: 16px;
      bottom: 16px;
    }

    .inschat-nav-panel {
      width: min(320px, 88vw);
      padding: 20px;
    }

    .inschat-hero,
    .inschat-section {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    h1 {
      font-size: clamp(46px, 14vw, 70px);
    }

    h2 {
      font-size: clamp(34px, 10vw, 48px);
    }

    .inschat-hero-facts {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .inschat-presentation-header {
      font-size: 10px;
    }

    .inschat-presentation-stage {
      padding: 12px 10px;
    }

    .inschat-stack-grid {
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
    .inschat-button-row {
      flex-direction: column;
      align-items: stretch;

      a {
        justify-content: center;
      }
    }
  }
`;
