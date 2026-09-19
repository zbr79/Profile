import styled from 'styled-components';

export const SplitSection = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  column-gap: 60px;
  row-gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SplitHeading = styled.header`
  position: sticky;
  top: calc(var(--nav-height) + 48px);
  align-self: start;

  @media (max-width: 768px) {
    position: static;
  }

  .overline {
    display: block;
    margin-bottom: 12px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 16px;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: var(--text-primary);
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
