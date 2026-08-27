import { css } from 'styled-components';

const variables = css`
  :root {
    --bg: #ffffff;
    --bg-alt: #f5f5f7;
    --bg-bright: #ffffff;
    --bg-invert: #1d1d1f;
    --surface: #f5f5f7;
    --border: #d2d2d7;
    --shadow: rgba(0, 0, 0, 0.08);
    --text-primary: #1d1d1f;
    --text-secondary: #424245;
    --text-muted: #86868b;
    --text-faint: #aeaeb2;
    --accent: #1d1d1f;
    --accent-tint: rgba(0, 0, 0, 0.05);

    --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    --font-mono: ui-monospace, 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 10px;
    --nav-height: 60px;
    --nav-scroll-height: 48px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
