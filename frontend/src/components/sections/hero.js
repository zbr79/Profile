import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const StyledHeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 60px;
  row-gap: 40px;
  align-items: center;
  min-height: 100vh;
  padding: calc(var(--nav-height) + 40px) 0 60px;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: calc(var(--nav-height) + 60px) 0 60px;
  }

  h1 {
    margin: 0 0 20px 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 16px;
    color: var(--text-muted);
    font-size: clamp(20px, 2.6vw, 30px);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.25;
    max-width: 440px;
  }

  .intro {
    p {
      margin: 0 0 28px;
      color: var(--text-secondary);
      max-width: 480px;
    }
  }

  .cta-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

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
  const identity = [
    <h1 key="overline">Software Engineer</h1>,
    <h2 key="name" className="big-heading">
      Andy Ren.
    </h2>,
    <h3 key="pitch">Full-stack developer focused on clean, useful products.</h3>,
  ];

  const intro = [
    <p key="bio">
      I build end-to-end web applications with Next.js, React, Node.js, and MongoDB — from a
      production recipe platform to real-time browser games. I'm currently looking for full-stack
      or frontend engineering roles.
    </p>,
    <div key="ctas" className="cta-row">
      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <a
        className="github-link"
        href="https://github.com/zbr79"
        target="_blank"
        rel="noreferrer">
        View GitHub
      </a>
    </div>,
  ];

  return (
    <StyledHeroSection>
      <div className="identity">
        {identity.map((item, i) => (
          <div key={i} className="anim-fadeup" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
            {item}
          </div>
        ))}
      </div>

      <div className="intro">
        {intro.map((item, i) => (
          <div key={i} className="anim-fadeup" style={{ animationDelay: `${(i + 4) * 100}ms` }}>
            {item}
          </div>
        ))}
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
