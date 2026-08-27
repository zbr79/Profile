import { css } from 'styled-components';

const button = css`
  color: #ffffff;
  background-color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 980px;
  font-size: var(--fz-sm);
  font-family: var(--font-sans);
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  padding: 1rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: #3a3a3c;
    border-color: #3a3a3c;
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--accent);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--accent) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--accent);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: #ffffff;
    background-color: var(--accent);
    border: 1px solid var(--accent);
    border-radius: 980px;
    padding: 0.65rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      background-color: #3a3a3c;
      border-color: #3a3a3c;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: #ffffff;
    background-color: var(--accent);
    border: 1px solid var(--accent);
    border-radius: 980px;
    padding: 1rem 1.75rem;
    font-size: var(--fz-md);
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      background-color: #3a3a3c;
      border-color: #3a3a3c;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
