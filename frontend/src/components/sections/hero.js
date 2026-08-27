import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 24px 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 12px;
    color: var(--text-muted);
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  p {
    margin: 24px 0 0;
    max-width: 640px;
    color: var(--text-secondary);
  }

  .cta-row {
    display: flex;
    gap: 16px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: center;

    .email-link {
      ${({ theme }) => theme.mixins.bigButton};
    }

    .github-link {
      ${({ theme }) => theme.mixins.bigButton};
      color: var(--text-primary);
      background-color: transparent;
      border-color: var(--border);

      &:hover,
      &:focus-visible {
        background-color: var(--bg-alt);
        border-color: var(--text-faint);
      }
    }
  }
`;

const Hero = () => {
  const items = [
    <h1 key="one">Software Engineer</h1>,
    <h2 key="two" className="big-heading">
      Andy Ren.
    </h2>,
    <h3 key="three" className="medium-heading">
      Full-stack developer focused on clean, useful products.
    </h3>,
    <p key="four">
      I'm a software engineer based in Fullerton, CA, with an M.S. in Software Engineering (2026)
      and a B.S. in Computer Science (2023) from Cal State Fullerton. I build end-to-end web
      applications with Next.js, React, Node.js, and MongoDB — from a production recipe platform
      to real-time browser games. I'm currently looking for full-stack or frontend engineering
      roles.
    </p>,
    <div key="five" className="cta-row">
      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <a
        className="github-link"
        href="https://github.com/853493541"
        target="_blank"
        rel="noreferrer">
        View GitHub
      </a>
    </div>,
  ];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i} className="anim-fadeup" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
          {item}
        </div>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
