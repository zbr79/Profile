import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  padding: 120px 0;
  background-color: var(--bg-alt);
  box-shadow: 0 0 0 100vmax var(--bg-alt);
  clip-path: inset(0 -100vmax);

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--bg-bright);
    border: 1px solid var(--border);
    overflow: hidden;

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-4px);
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: none;
      transition: var(--transition);
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Three.js', 'Python'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Andy, a software engineer who enjoys building complete web applications —
              from database and API design to the pixels on screen. My sweet spot is full-stack
              JavaScript/TypeScript development with React and Node.js, where I get to care about
              both engineering quality and user experience.
            </p>

            <p>
              My journey started at Cal State Fullerton, where I earned a B.S. in Computer Science
              in 2023. Since then I've built and shipped real products: a bilingual recipe platform
              (Next.js, Express, MongoDB, Cloudinary) and real-time multiplayer browser games with
              Three.js and WebSockets — plus production deployment work involving nginx, TLS, and
              process management.
            </p>

            <p>
              I earned my M.S. in Software Engineering from Cal State Fullerton in 2026 and am now
              focused on sharpening my frontend design craft. I'm looking for a full-stack or
              frontend engineering role where I can build products people use every day.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
