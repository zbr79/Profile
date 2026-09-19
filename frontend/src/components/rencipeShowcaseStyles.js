import styled from 'styled-components';

export const StyledRencipePage = styled.main`
  --rencipe-cream: #f7f1e7;
  --rencipe-paper: #fffdf9;
  --rencipe-ink: #2f2923;
  --rencipe-muted: #766d64;
  --rencipe-line: #ded4c7;
  --rencipe-orange: #b85d32;
  --rencipe-yellow: #f0c76b;

  max-width: none;
  padding: 0;
  overflow: hidden;
  background: var(--rencipe-cream);
  color: var(--rencipe-ink);

  .floating-nav-toggle {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 18;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    padding: 0;
    border: 1px solid var(--rencipe-line);
    border-radius: 50%;
    background: rgba(255, 253, 249, 0.9);
    box-shadow: 0 10px 26px rgba(82, 59, 39, 0.12);
    color: var(--rencipe-ink);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    &:hover,
    &:focus-visible {
      border-color: var(--rencipe-orange);
      color: var(--rencipe-orange);
    }
  }

  .menu-icon {
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

  .floating-nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 19;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(47, 41, 35, 0.22);
    opacity: 0;
    pointer-events: none;
    transition: opacity 220ms ease;

    &.is-open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .floating-nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    width: min(340px, 88vw);
    height: 100dvh;
    padding: 28px;
    border: 1px solid var(--rencipe-line);
    border-width: 0 0 0 1px;
    border-radius: 24px 0 0 24px;
    background: var(--rencipe-paper);
    box-shadow: 0 22px 60px rgba(82, 59, 39, 0.2);
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

  .floating-nav-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    color: var(--rencipe-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    .floating-nav-panel-brand {
      color: var(--rencipe-ink);
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 22px;
      font-style: italic;
      letter-spacing: -0.04em;

      &:hover,
      &:focus-visible {
        color: var(--rencipe-orange);
      }
    }

    button {
      padding: 0 0 0 14px;
      border: 0;
      background: transparent;
      color: var(--rencipe-ink);
      font-size: 26px;
      line-height: 1;
      cursor: pointer;
    }
  }

  .floating-nav-links {
    display: grid;
    gap: 0;
    padding: 12px 0 4px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(222, 212, 199, 0.7);
      color: var(--rencipe-ink);
      font-size: 17px;

      &:hover,
      &:focus-visible {
        color: var(--rencipe-orange);
      }

    }
  }

  .floating-nav-external {
    display: flex;
    gap: 16px;
    padding-top: 12px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;

      &:hover,
      &:focus-visible {
        opacity: 0.62;
        transform: translateY(-2px);
      }

      svg {
        display: block;
        width: 30px;
        height: 30px;
      }
    }
  }

  .showcase-hero,
  .detail-preview,
  .responsive-preview,
  .showcase-build {
    scroll-margin-top: 32px;
  }

  .showcase-hero {
    width: 100%;
    max-width: none;
    margin: 0;
  }

  .showcase-hero {
    padding-right: clamp(25px, 8vw, 150px);
    padding-left: clamp(25px, 8vw, 150px);
  }

  .showcase-hero {
    padding-top: 56px;
    padding-bottom: 110px;
    background:
      radial-gradient(circle at 78% 8%, rgba(240, 199, 107, 0.24), transparent 28%),
      var(--rencipe-cream);
  }

  .section-title {
    margin: 0 0 22px;
    color: var(--rencipe-ink);
    font-size: clamp(32px, 4vw, 54px);
    letter-spacing: -0.06em;
    line-height: 0.98;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(480px, 1.18fr);
    align-items: center;
    gap: clamp(50px, 8vw, 130px);
    max-width: 1240px;
    margin: 0 auto;
  }

  .hero-copy {
    max-width: 540px;
  }

  .eyebrow,
  .section-kicker {
    display: block;
    margin-bottom: 20px;
    color: var(--rencipe-orange);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    color: var(--rencipe-ink);
    font-size: clamp(46px, 6vw, 84px);
    font-weight: 600;
    letter-spacing: -0.075em;
    line-height: 1.04;
  }

  .hero-copy > p {
    max-width: 490px;
    margin: 32px 0 0;
    color: var(--rencipe-muted);
    font-size: clamp(18px, 2vw, 23px);
    line-height: 1.55;
  }

  .button-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;
    margin-top: 36px;

    a {
      display: inline-flex;
      align-items: center;
      min-height: 46px;
      padding: 0 19px;
      border: 1px solid var(--rencipe-ink);
      border-radius: 999px;
      color: var(--rencipe-ink);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.02em;

      &:hover {
        background: var(--rencipe-ink);
        color: var(--rencipe-paper);
        transform: translateY(-2px);
      }
    }

    .primary {
      border-color: var(--rencipe-orange);
      background: var(--rencipe-orange);
      color: #fffaf2;

      &:hover {
        border-color: var(--rencipe-ink);
        background: var(--rencipe-ink);
      }
    }
  }

  .hero-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 58px;
    color: var(--rencipe-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    strong {
      display: block;
      margin-bottom: 6px;
      color: var(--rencipe-ink);
      font-family: var(--font-sans);
      font-size: var(--fz-lg);
      font-weight: 600;
    }
  }

  .hero-visual {
    position: relative;
  }

  .browser-frame {
    position: relative;
    padding: 12px 12px 0;
    border: 1px solid rgba(47, 41, 35, 0.16);
    border-radius: 18px;
    background: rgba(255, 253, 249, 0.72);
    box-shadow: 0 28px 70px rgba(82, 59, 39, 0.16);
    transform: rotate(1.5deg);
    animation: showcase-float 7s ease-in-out infinite;
  }

  .browser-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 27px;
    padding: 0 5px;

    span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--rencipe-line);
    }
  }

  .browser-image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: contain;
    border-radius: 10px 10px 0 0;
    background: #fffdf7;
  }

  .floating-note {
    position: absolute;
    right: -26px;
    bottom: 8%;
    padding: 14px 18px;
    border: 1px solid var(--rencipe-line);
    border-radius: 12px;
    background: var(--rencipe-paper);
    box-shadow: 0 15px 35px rgba(82, 59, 39, 0.12);
    color: var(--rencipe-orange);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.06em;
  }

  .detail-preview {
    display: block;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 110px clamp(25px, 8vw, 150px);
    background: var(--rencipe-paper);
  }

  .detail-preview-inner {
    display: grid;
    grid-template-columns: minmax(240px, 400px) minmax(0, 1fr);
    grid-template-areas: 'visual copy';
    gap: clamp(40px, 6vw, 96px);
    align-items: center;
    max-width: 1240px;
    margin: 0 auto;
  }

  .detail-preview-copy {
    grid-area: copy;
    justify-self: end;
    width: min(100%, 540px);

    h2 {
      max-width: 490px;
    }

    p {
      max-width: 490px;
      margin: 0;
      color: var(--rencipe-muted);
      font-size: var(--fz-lg);
      line-height: 1.6;
    }

  }

  .detail-preview-visual {
    grid-area: visual;
    width: min(100%, 400px);
    min-width: 0;
    justify-self: start;

    .browser-frame {
      padding: 0;
      animation: none;
      transform: rotate(-1deg);
    }

    .browser-image {
      aspect-ratio: auto;
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 18px;
      background: transparent;
    }
  }

  .responsive-preview {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 125px clamp(25px, 8vw, 150px);
    background: var(--rencipe-cream);
  }

  .responsive-preview-inner {
    display: grid;
    grid-template-columns: minmax(260px, 0.55fr) minmax(0, 1.45fr);
    gap: clamp(50px, 6vw, 90px);
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
  }

  .responsive-preview-copy {
    max-width: 520px;
    margin-bottom: 0;
    position: relative;
    left: clamp(0px, 8vw, 140px);
    justify-self: end;

    h2 {
      max-width: 400px;
    }

    p {
      max-width: 390px;
      margin: 0;
      color: var(--rencipe-muted);
      font-size: var(--fz-md);
      line-height: 1.6;
    }
  }

  .responsive-facts {
    display: grid;
    gap: 10px;
    margin-top: 30px;
    color: var(--rencipe-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.04em;
    text-transform: uppercase;

    span {
      padding-top: 10px;
      border-top: 1px solid var(--rencipe-line);
    }
  }

  .responsive-devices {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: flex-end;
    width: min(88%, 980px);
    justify-self: end;
    min-width: 0;
  }

  .responsive-desktop {
    grid-column: 1;
    grid-row: 1;
    display: block;
    width: 100%;
    min-width: 0;
    visibility: visible;
    opacity: 1;

    .browser-frame {
      animation: none;
      transform: rotate(1deg);
    }
  }

  .responsive-mobile {
    grid-column: 1;
    grid-row: 1;
    display: block;
    width: clamp(176px, 27%, 240px);
    margin-left: auto;
    min-width: 0;
    visibility: visible;
    opacity: 1;
    position: relative;
    align-self: end;
    z-index: 2;
  }

  .phone-frame {
    padding: 8px;
    border: 1px solid rgba(47, 41, 35, 0.16);
    border-radius: 28px;
    background: var(--rencipe-paper);
    box-shadow: 0 28px 70px rgba(82, 59, 39, 0.16);
    transform: rotate(2deg) translateY(10px);
  }

  .mobile-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  .responsive-label {
    display: block;
    margin-top: 16px;
    color: var(--rencipe-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }

  .showcase-build {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 125px clamp(25px, 8vw, 150px);
    background: var(--rencipe-paper);
  }

  .showcase-build-inner {
    display: grid;
    grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(28px, 4vw, 60px);
    align-items: start;
    max-width: 1240px;
    margin: 0 auto;
  }

  .showcase-build-heading {
    h2 {
      max-width: 540px;
    }

    > p {
      max-width: 520px;
      margin: 30px 0 0;
      color: var(--rencipe-muted);
      font-size: var(--fz-lg);
      line-height: 1.6;
    }
  }

  .showcase-build-details {
    width: 100%;
    max-width: 620px;
    justify-self: start;
  }

  .technology-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--rencipe-line);
    border-left: 1px solid var(--rencipe-line);

    article {
      min-height: 112px;
      padding: 18px 20px;
      border-right: 1px solid var(--rencipe-line);
      border-bottom: 1px solid var(--rencipe-line);
    }

    article:last-child {
      grid-column: span 2;
    }

    span {
      display: block;
      margin-bottom: 12px;
      color: var(--rencipe-orange);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      display: block;
      color: var(--rencipe-ink);
      font-size: 18px;
      line-height: 1.15;
      letter-spacing: -0.03em;
    }
  }

  .reveal {
    opacity: 0;
    transform: translateY(26px);
    transition: opacity 700ms var(--easing), transform 700ms var(--easing);
    transition-delay: var(--reveal-delay, 0ms);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes showcase-float {
    0%,
    100% {
      transform: rotate(1.5deg) translateY(0);
    }
    50% {
      transform: rotate(1.5deg) translateY(-10px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }

    .browser-frame {
      animation: none;
    }
  }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .hero-copy {
      max-width: 680px;
    }

    .detail-preview-inner {
      grid-template-columns: 1fr;
      grid-template-areas:
        'copy'
        'visual';
      gap: 70px;
    }

    .detail-preview-copy {
      justify-self: start;
      width: 100%;
    }

    .detail-preview-visual {
      width: min(100%, 400px);
    }

    .responsive-preview-inner {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .responsive-preview-copy {
      max-width: 680px;
      left: 0;
      justify-self: start;
    }

    .responsive-devices {
      grid-template-columns: 1fr;
      width: 100%;
    }

    .responsive-mobile {
      grid-column: 1;
      grid-row: 1;
      width: min(184px, 32%);
      margin-left: auto;
    }

    .browser-frame,
    .detail-preview-visual .browser-frame,
    .responsive-desktop .browser-frame,
    .phone-frame {
      transform: none;
      animation: none;
    }

    .showcase-build-inner {
      grid-template-columns: 1fr;
      gap: 52px;
    }

    .showcase-build-details {
      justify-self: start;
    }
  }

  @media (max-width: 680px) {
    .floating-nav-toggle {
      right: 16px;
      bottom: 16px;
      width: 46px;
      height: 46px;
    }

    .floating-nav-panel {
      width: min(320px, 88vw);
      padding: 20px;
    }

    .showcase-hero {
      padding-top: 48px;
      padding-bottom: 80px;
    }

    .hero-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: 56px;
    }

    .hero-copy > p {
      font-size: var(--fz-lg);
    }

    .button-row {
      margin-top: 28px;

      a {
        min-height: 44px;
        padding: 0 16px;
      }
    }

    .hero-facts {
      margin-top: 42px;
    }

    .floating-note {
      right: 0;
      bottom: 5%;
      padding: 11px 14px;
    }

    .detail-preview {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    .detail-preview-inner {
      gap: 58px;
    }

    .section-title {
      font-size: clamp(34px, 10vw, 48px);
    }

    .responsive-preview {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    .responsive-devices {
      grid-template-columns: 1fr;
      align-items: flex-end;
      width: 100%;
      justify-self: center;
      gap: 0;
    }

    .responsive-desktop {
      grid-column: 1;
      grid-row: 1;
      width: 100%;
    }

    .responsive-mobile {
      grid-column: 1;
      grid-row: 1;
      width: min(184px, 72%);
      justify-self: end;
      margin-left: 0;
      transform: none;
    }

    .showcase-build {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    .technology-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      article {
        min-height: 88px;
        padding: 14px;
      }

      article:last-child {
        grid-column: span 2;
      }

      span {
        margin-bottom: 8px;
      }

      strong {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 420px) {
    .button-row {
      flex-direction: column;
      align-items: stretch;

      a {
        justify-content: center;
      }
    }

    .hero-facts {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
  }
`;
