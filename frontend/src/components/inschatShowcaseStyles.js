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

  .inschat-hero {
    padding: clamp(90px, 11vw, 150px) clamp(25px, 8vw, 150px) 120px;
    background:
      radial-gradient(circle at 50% 8%, rgba(79, 141, 247, 0.18), transparent 34%),
      #111318;
    color: #f6f7f9;
  }

  .inschat-hero-grid {
    grid-template-columns: 1fr;
    gap: clamp(48px, 7vw, 84px);
    max-width: 1080px;
    text-align: center;
  }

  .inschat-hero-copy {
    max-width: 820px;
    margin: 0 auto;
  }

  .inschat-hero .inschat-eyebrow {
    color: #86aefc;
  }

  .inschat-hero h1 {
    max-width: 820px;
    color: #f6f7f9;
  }

  .inschat-hero .inschat-hero-copy > p {
    max-width: 620px;
    margin-right: auto;
    margin-left: auto;
    color: #b8c0cd;
  }

  .inschat-hero .inschat-button-row {
    justify-content: center;
  }

  .inschat-hero .inschat-button-row a {
    border-color: rgba(246, 247, 249, 0.5);
    color: #f6f7f9;
  }

  .inschat-hero .inschat-button-row a:hover,
  .inschat-hero .inschat-button-row a:focus-visible {
    border-color: #f6f7f9;
    background: #f6f7f9;
    color: #111318;
  }

  .inschat-hero .inschat-button-row .primary {
    border-color: var(--inschat-blue);
    background: var(--inschat-blue);
    color: #ffffff;
  }

  .inschat-hero .inschat-button-row .primary:hover,
  .inschat-hero .inschat-button-row .primary:focus-visible {
    border-color: #75a4ff;
    background: #75a4ff;
    color: #111318;
  }

  .inschat-hero .inschat-hero-facts {
    max-width: 820px;
    margin-right: auto;
    margin-left: auto;
    color: #9fa8b7;
    text-align: left;
  }

  .inschat-hero .inschat-hero-facts div {
    border-color: rgba(246, 247, 249, 0.2);
  }

  .inschat-hero .inschat-hero-facts strong {
    color: #f6f7f9;
  }

  .inschat-hero-grid {
    grid-template-columns: minmax(300px, 0.75fr) minmax(520px, 1.25fr);
    gap: clamp(56px, 8vw, 120px);
    max-width: 1280px;
    text-align: left;
  }

  .inschat-hero-copy {
    max-width: 560px;
    margin: 0;
  }

  .inschat-hero h1 {
    max-width: 600px;
  }

  .inschat-hero .inschat-hero-copy > p {
    max-width: 480px;
    margin-right: 0;
    margin-left: 0;
  }

  .inschat-hero .inschat-button-row {
    justify-content: flex-start;
  }

  .inschat-hero-visual {
    min-width: 0;
  }

  .inschat-hero .inschat-home-presentation {
    width: 100%;
    margin-left: 0;
  }

  .inschat-hero .inschat-presentation-header {
    color: #86aefc;
    text-align: left;
  }

  .inschat-hero .inschat-presentation-stage {
    border-color: rgba(246, 247, 249, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }

  .inschat-hero .inschat-real-screenshot {
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
  }

  .inschat-hero .inschat-presentation figcaption {
    text-align: left;
  }

  .inschat-hero .inschat-presentation figcaption strong {
    color: #f6f7f9;
  }

  .inschat-hero .inschat-presentation figcaption span {
    color: #9fa8b7;
  }

  @media (max-width: 1100px) {
    .inschat-hero-grid {
      grid-template-columns: 1fr;
      max-width: 820px;
      text-align: center;
    }

    .inschat-hero-copy {
      max-width: 820px;
      margin: 0 auto;
    }

    .inschat-hero .inschat-hero-copy > p {
      margin-right: auto;
      margin-left: auto;
    }

    .inschat-hero .inschat-button-row {
      justify-content: center;
    }

    .inschat-hero-visual {
      width: min(100%, 820px);
      margin: 0 auto;
    }
  }

  .inschat-cta-section {
    width: 100vw;
    max-width: 100vw;
    margin: 0 0 0 calc(50% - 50vw);
    padding: clamp(96px, 12vw, 160px) clamp(25px, 8vw, 150px);
    background:
      radial-gradient(circle at 50% 0%, rgba(79, 141, 247, 0.2), transparent 34%),
      #111318;
    color: #f6f7f9;
    scroll-margin-top: 32px;
  }

  .inschat-cta-content {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }

  .inschat-cta-content .inschat-kicker {
    color: #86aefc;
  }

  .inschat-cta-content h2 {
    max-width: 720px;
    color: #f6f7f9;
  }

  .inschat-cta-content p {
    max-width: 560px;
    margin: 28px auto 0;
    color: #b8c0cd;
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .inschat-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 48px;
    margin-top: 34px;
    padding: 0 22px;
    border: 1px solid var(--inschat-blue);
    border-radius: 999px;
    background: var(--inschat-blue);
    color: #ffffff;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .inschat-cta-button:hover,
  .inschat-cta-button:focus-visible {
    border-color: #75a4ff;
    background: #75a4ff;
    color: #111318;
  }

  @media (max-width: 560px) {
    .inschat-hero .inschat-hero-facts {
      text-align: left;
    }

    .inschat-cta-section {
      padding-top: 90px;
      padding-bottom: 90px;
    }
  }

  .inschat-workflow-section,
  .inschat-build-section {
    background:
      radial-gradient(circle at 100% 0%, rgba(79, 141, 247, 0.12), transparent 30%),
      #171a21;
    color: #f6f7f9;
  }

  .inschat-workflow-section h2,
  .inschat-build-section h2 {
    color: #f6f7f9;
  }

  .inschat-workflow-section .inschat-section-copy > p,
  .inschat-build-section .inschat-build-copy > p {
    color: #b8c0cd;
  }

  .inschat-workflow-section .inschat-kicker,
  .inschat-build-section .inschat-kicker {
    color: #86aefc;
  }

  .inschat-workflow-section .inschat-presentation-header {
    color: #86aefc;
  }

  .inschat-workflow-section .inschat-presentation-stage {
    border-color: rgba(246, 247, 249, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }

  .inschat-workflow-section .inschat-real-screenshot {
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
  }

  .inschat-workflow-section .inschat-presentation figcaption strong {
    color: #f6f7f9;
  }

  .inschat-workflow-section .inschat-presentation figcaption span,
  .inschat-workflow-section .inschat-feature-list span {
    color: #9fa8b7;
  }

  .inschat-workflow-section .inschat-feature-list article {
    border-color: rgba(246, 247, 249, 0.16);
  }

  .inschat-workflow-section .inschat-feature-list strong {
    color: #f6f7f9;
  }

  .inschat-responsive-section {
    background:
      radial-gradient(circle at 0% 50%, rgba(79, 141, 247, 0.14), transparent 32%),
      #f1f5fb;
  }

  .inschat-responsive-inner {
    max-width: 1320px;
  }

  .inschat-responsive-copy {
    max-width: 580px;
  }

  .inschat-mobile-visual {
    display: grid;
    min-height: 520px;
    padding: 32px;
    place-items: center;
    border: 1px solid rgba(40, 119, 245, 0.16);
    border-radius: 34px;
    background:
      radial-gradient(circle at 50% 42%, rgba(79, 141, 247, 0.26), transparent 42%),
      rgba(255, 255, 255, 0.56);
    box-shadow: 0 28px 70px rgba(40, 66, 105, 0.1);
  }

  .inschat-phone-presentation {
    width: min(100%, 340px);
  }

  .inschat-phone-frame {
    box-shadow: 0 28px 70px rgba(29, 45, 73, 0.24);
  }

  .inschat-build-section .inschat-stack-grid {
    border-color: rgba(246, 247, 249, 0.16);
  }

  .inschat-build-section .inschat-stack-grid article {
    border-color: rgba(246, 247, 249, 0.16);
    background: rgba(255, 255, 255, 0.035);
  }

  .inschat-build-section .inschat-stack-grid span,
  .inschat-build-section .inschat-release-note > span {
    color: #86aefc;
  }

  .inschat-build-section .inschat-stack-grid strong {
    color: #f6f7f9;
  }

  .inschat-build-section .inschat-release-note {
    border-color: rgba(246, 247, 249, 0.16);
    background: rgba(255, 255, 255, 0.06);
  }

  .inschat-build-section .inschat-release-note p {
    color: #b8c0cd;
  }

  @media (max-width: 900px) {
    .inschat-mobile-visual {
      width: min(100%, 620px);
      justify-self: center;
    }
  }

  @media (max-width: 560px) {
    .inschat-mobile-visual {
      min-height: 430px;
      padding: 20px;
      border-radius: 26px;
    }
  }

  .inschat-hero {
    display: grid;
    min-height: min(760px, 82vh);
    padding: clamp(120px, 15vw, 220px) clamp(25px, 8vw, 150px);
    place-items: center;
    text-align: center;
  }

  .inschat-hero-copy {
    max-width: 860px;
    margin: 0 auto;
  }

  .inschat-hero h1 {
    max-width: 860px;
    margin-right: auto;
    margin-left: auto;
    font-size: clamp(54px, 7vw, 104px);
    line-height: 0.98;
  }

  .inschat-hero .inschat-hero-copy > p {
    max-width: 520px;
    margin: 30px auto 0;
  }

  .inschat-hero .inschat-button-row {
    justify-content: center;
  }

  .inschat-intro-section {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: clamp(100px, 12vw, 170px) clamp(25px, 8vw, 150px);
    background:
      radial-gradient(circle at 50% 0%, rgba(79, 141, 247, 0.14), transparent 34%),
      #171a21;
    color: #f6f7f9;
    scroll-margin-top: 32px;
  }

  .inschat-intro-inner {
    display: grid;
    gap: clamp(50px, 7vw, 90px);
    max-width: 1320px;
    margin: 0 auto;
  }

  .inschat-intro-copy {
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
  }

  .inschat-intro-copy .inschat-kicker {
    color: #86aefc;
  }

  .inschat-intro-copy h2 {
    max-width: 780px;
    color: #f6f7f9;
  }

  .inschat-intro-copy p {
    max-width: 620px;
    margin: 28px auto 0;
    color: #b8c0cd;
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .inschat-intro-visual {
    min-width: 0;
  }

  .inschat-intro-visual .inschat-home-presentation {
    width: 100%;
    margin: 0;
  }

  .inschat-intro-visual .inschat-presentation-header {
    color: #86aefc;
  }

  .inschat-intro-visual .inschat-presentation-stage {
    border-color: rgba(246, 247, 249, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }

  .inschat-intro-visual .inschat-real-screenshot {
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
  }

  .inschat-intro-visual .inschat-presentation figcaption strong {
    color: #f6f7f9;
  }

  .inschat-intro-visual .inschat-presentation figcaption span {
    color: #9fa8b7;
  }

  @media (max-width: 560px) {
    .inschat-hero {
      min-height: 620px;
      padding-top: 120px;
      padding-bottom: 100px;
    }

    .inschat-hero h1 {
      font-size: clamp(50px, 14vw, 70px);
    }
  }

  .inschat-hero {
    background:
      radial-gradient(circle at 50% 0%, rgba(79, 141, 247, 0.13), transparent 34%),
      #fcfbf8;
    color: var(--inschat-ink);
  }

  .inschat-hero .inschat-eyebrow,
  .inschat-intro-copy .inschat-kicker,
  .inschat-workflow-section .inschat-kicker,
  .inschat-build-section .inschat-kicker,
  .inschat-cta-content .inschat-kicker {
    color: var(--inschat-deep-blue);
  }

  .inschat-hero h1,
  .inschat-intro-copy h2,
  .inschat-workflow-section h2,
  .inschat-build-section h2,
  .inschat-cta-content h2 {
    color: var(--inschat-ink);
  }

  .inschat-hero .inschat-hero-copy > p,
  .inschat-intro-copy p,
  .inschat-workflow-section .inschat-section-copy > p,
  .inschat-build-section .inschat-build-copy > p,
  .inschat-cta-content p {
    color: var(--inschat-muted);
  }

  .inschat-hero .inschat-button-row .primary,
  .inschat-cta-button {
    border-color: var(--inschat-deep-blue);
    background: var(--inschat-deep-blue);
    color: #ffffff;
  }

  .inschat-hero .inschat-button-row .primary:hover,
  .inschat-hero .inschat-button-row .primary:focus-visible,
  .inschat-cta-button:hover,
  .inschat-cta-button:focus-visible {
    border-color: var(--inschat-ink);
    background: var(--inschat-ink);
    color: #ffffff;
  }

  .inschat-intro-section {
    background:
      radial-gradient(circle at 50% 0%, rgba(79, 141, 247, 0.13), transparent 34%),
      #f1f5fb;
    color: var(--inschat-ink);
  }

  .inschat-intro-copy h2 {
    color: var(--inschat-ink);
  }

  .inschat-intro-copy p {
    color: var(--inschat-muted);
  }

  .inschat-intro-visual .inschat-home-presentation {
    width: min(100%, 960px);
    margin: 0 auto;
  }

  .inschat-intro-visual .inschat-presentation-header,
  .inschat-workflow-section .inschat-presentation-header {
    color: var(--inschat-deep-blue);
  }

  .inschat-intro-visual .inschat-presentation-stage,
  .inschat-workflow-section .inschat-presentation-stage {
    border-color: rgba(40, 119, 245, 0.14);
    background: #e4edf9;
  }

  .inschat-intro-visual .inschat-real-screenshot,
  .inschat-workflow-section .inschat-real-screenshot {
    border-color: rgba(29, 29, 31, 0.14);
    box-shadow: 0 24px 55px rgba(40, 66, 105, 0.16);
  }

  .inschat-intro-visual .inschat-presentation figcaption strong,
  .inschat-workflow-section .inschat-presentation figcaption strong,
  .inschat-workflow-section .inschat-feature-list strong {
    color: var(--inschat-ink);
  }

  .inschat-intro-visual .inschat-presentation figcaption span,
  .inschat-workflow-section .inschat-presentation figcaption span,
  .inschat-workflow-section .inschat-feature-list span {
    color: var(--inschat-muted);
  }

  .inschat-workflow-section {
    background: #fffdf9;
    color: var(--inschat-ink);
  }

  .inschat-workflow-section .inschat-feature-list article {
    border-color: var(--inschat-line);
  }

  .inschat-build-section {
    background: #f3f5f7;
    color: var(--inschat-ink);
  }

  .inschat-build-section .inschat-stack-grid {
    border-color: var(--inschat-line);
  }

  .inschat-build-section .inschat-stack-grid article {
    border-color: var(--inschat-line);
    background: #ffffff;
  }

  .inschat-build-section .inschat-stack-grid span,
  .inschat-build-section .inschat-release-note > span {
    color: var(--inschat-deep-blue);
  }

  .inschat-build-section .inschat-stack-grid strong {
    color: var(--inschat-ink);
  }

  .inschat-build-section .inschat-release-note {
    border-color: var(--inschat-line);
    background: #ffffff;
  }

  .inschat-build-section .inschat-release-note p {
    color: var(--inschat-muted);
  }

  .inschat-cta-section {
    background:
      radial-gradient(circle at 50% 0%, rgba(79, 141, 247, 0.18), transparent 34%),
      #eaf2ff;
    color: var(--inschat-ink);
  }

  .inschat-cta-content h2 {
    color: var(--inschat-ink);
  }

  .inschat-cta-content p {
    color: var(--inschat-muted);
  }

  @media (max-width: 560px) {
    .inschat-intro-visual .inschat-presentation-stage,
    .inschat-workflow-section .inschat-presentation-stage {
      padding: 12px 10px;
    }
  }

  .inschat-hero h1 {
    max-width: 760px;
    font-size: clamp(42px, 4.2vw, 64px);
    line-height: 1.1;
    letter-spacing: -0.055em;
  }

  .inschat-hero .inschat-hero-copy > p {
    margin-top: 24px;
  }

  .inschat-intro-copy h2,
  .inschat-workflow-section h2,
  .inschat-responsive-section h2,
  .inschat-build-section h2,
  .inschat-cta-content h2 {
    font-size: clamp(30px, 3vw, 40px);
    line-height: 1.15;
    letter-spacing: -0.05em;
  }

  @media (max-width: 560px) {
    .inschat-hero h1 {
      font-size: clamp(40px, 11vw, 54px);
    }

    .inschat-intro-copy h2,
    .inschat-workflow-section h2,
    .inschat-responsive-section h2,
    .inschat-build-section h2,
    .inschat-cta-content h2 {
      font-size: clamp(30px, 9vw, 38px);
    }
  }

  .inschat-topbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px clamp(20px, 4vw, 64px);
    background: transparent;
    color: var(--inschat-ink);
    transition:
      background 220ms ease,
      -webkit-backdrop-filter 220ms ease,
      backdrop-filter 220ms ease;
  }

  .inschat-topbar.is-scrolled {
    background: rgba(252, 251, 248, 0.9);
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
  }

  .inschat-topbar-brand {
    color: var(--inschat-ink);
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.05em;
  }

  .inschat-topbar-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 34px;
    padding: 0 14px;
    border: 0;
    border-radius: 999px;
    background: rgba(29, 29, 31, 0.07);
    color: var(--inschat-ink);
    font-family: var(--font-mono);
    font-size: 11px;
  }

  .inschat-topbar-action:hover,
  .inschat-topbar-action:focus-visible {
    background: rgba(29, 29, 31, 0.12);
    color: var(--inschat-ink);
  }

  .inschat-hero-icon {
    display: block;
    width: 56px;
    height: 56px;
    margin: 0 auto 24px;
    border-radius: 14px;
    box-shadow: 0 12px 24px rgba(40, 66, 105, 0.14);
  }

  @media (max-width: 560px) {
    .inschat-topbar {
      padding: 14px 16px;
    }

    .inschat-topbar-action {
      min-height: 32px;
      padding: 0 11px;
      font-size: 10px;
    }

    .inschat-hero-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
      border-radius: 11px;
    }
  }

  .inschat-responsive-visual {
    display: grid;
    width: 100%;
    min-height: 520px;
    place-items: center;
    background:
      radial-gradient(circle at 50% 48%, rgba(79, 141, 247, 0.18), transparent 48%),
      transparent;
  }

  .inschat-device-composition {
    position: relative;
    width: min(100%, 780px);
    min-height: 500px;
  }

  .inschat-desktop-presentation {
    position: absolute;
    top: 28px;
    left: 0;
    width: min(100%, 680px);
    margin: 0;
  }

  .inschat-desktop-frame {
    overflow: hidden;
    padding: 10px;
    border: 1px solid rgba(29, 29, 31, 0.14);
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 24px 55px rgba(40, 66, 105, 0.16);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 11px;
    }
  }

  .inschat-desktop-presentation figcaption,
  .inschat-phone-presentation figcaption {
    margin-top: 10px;
    color: var(--inschat-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .inschat-phone-presentation {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: min(100%, 250px);
    margin: 0;
  }

  .inschat-phone-frame {
    box-shadow: 0 28px 70px rgba(29, 45, 73, 0.24);
  }

  .inschat-phone-presentation figcaption {
    text-align: center;
  }

  @media (max-width: 900px) {
    .inschat-responsive-visual {
      min-height: 490px;
    }

    .inschat-device-composition {
      min-height: 470px;
    }

    .inschat-desktop-presentation {
      width: 94%;
    }
  }

  @media (max-width: 560px) {
    .inschat-responsive-visual {
      min-height: 390px;
    }

    .inschat-device-composition {
      min-height: 370px;
    }

    .inschat-desktop-presentation {
      top: 20px;
      width: 94%;
    }

    .inschat-phone-presentation {
      width: 180px;
    }
  }

  .inschat-general-section {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: clamp(100px, 12vw, 170px) clamp(25px, 8vw, 150px);
    background:
      radial-gradient(circle at 75% 45%, rgba(79, 141, 247, 0.12), transparent 36%),
      #fcfbf8;
    color: var(--inschat-ink);
  }

  .inschat-general-inner {
    display: grid;
    grid-template-columns: minmax(280px, 0.8fr) minmax(420px, 1.2fr);
    gap: clamp(50px, 8vw, 120px);
    max-width: 1240px;
    margin: 0 auto;
    align-items: center;
  }

  .inschat-general-copy {
    max-width: 520px;
  }

  .inschat-general-copy .inschat-kicker {
    color: var(--inschat-deep-blue);
  }

  .inschat-general-copy h2 {
    max-width: 520px;
    font-size: clamp(30px, 3vw, 40px);
    line-height: 1.15;
    color: var(--inschat-ink);
  }

  .inschat-general-copy > p {
    max-width: 500px;
    margin: 28px 0 0;
    color: var(--inschat-muted);
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .inschat-general-facts {
    display: grid;
    gap: 10px;
    max-width: 500px;
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

  .inschat-general-visual {
    min-width: 0;
  }

  .inschat-general-presentation {
    width: 100%;
    margin: 0;
  }

  .inschat-general-presentation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    color: var(--inschat-deep-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .inschat-general-screenshot {
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba(29, 29, 31, 0.18);
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 24px 55px rgba(40, 66, 105, 0.16);

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .inschat-general-presentation figcaption {
    display: grid;
    gap: 6px;
    margin-top: 16px;

    strong {
      color: var(--inschat-ink);
      font-size: 16px;
      font-weight: 600;
    }

    span {
      color: var(--inschat-muted);
      font-size: 13px;
      line-height: 1.5;
    }
  }

  @media (max-width: 900px) {
    .inschat-general-inner {
      grid-template-columns: 1fr;
    }

    .inschat-general-copy {
      max-width: 680px;
    }
  }

  @media (max-width: 560px) {
    .inschat-general-section {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    .inschat-general-presentation-header {
      font-size: 10px;
    }

    .inschat-general-screenshot {
      border-radius: 14px;
    }
  }
`;
