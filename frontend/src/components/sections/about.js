import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { SplitSection, SplitHeading } from '@components/split';

const StyledAboutSection = styled.section`
  max-width: 1000px;
  padding: 120px 0;
  background-color: var(--bg-alt);
  box-shadow: 0 0 0 100vmax var(--bg-alt);
  clip-path: inset(0 -100vmax);

  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  .skills-label {
    margin: 28px 0 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  ul.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 12px 0 0 0;
    list-style: none;

    li {
      background-color: var(--bg-bright);
      border: 1px solid var(--border);
      border-radius: 980px;
      padding: 5px 14px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--text-secondary);
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;

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
      <SplitSection>
        <SplitHeading>
          <span className="overline">Who I Am</span>
          <h2>About Me</h2>
        </SplitHeading>

        <div className="inner">
        <StyledText>
          <p>
            I'm Andy, a software engineer based in Fullerton, CA. I build complete web
            applications — from database and API design to the pixels on screen.
          </p>

          <p>
            I've shipped a bilingual recipe platform and real-time browser games with Next.js,
            React, Express, and MongoDB. I finished my M.S. in Software Engineering at Cal State
            Fullerton in 2026 and I'm now looking for a full-stack or frontend role.
          </p>

          <h4 className="skills-label">Technologies I work with</h4>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={600}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
        </div>
      </SplitSection>
    </StyledAboutSection>
  );
};

export default About;
