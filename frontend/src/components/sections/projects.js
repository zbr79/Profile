import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { SplitSection, SplitHeading } from '@components/split';

const StyledProjectsSection = styled.section`
  max-width: 900px;
  padding: 120px 0;
  background-color: var(--bg-alt);
  box-shadow: 0 0 0 100vmax var(--bg-alt);
  clip-path: inset(0 -100vmax);

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-top: 1px solid var(--border);
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 36px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  border-bottom: 1px solid var(--border);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateX(8px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 20px;
    position: relative;
    padding: 26px 0;
    transition: var(--transition);
  }

  .project-index {
    padding-top: 5px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
  }

  .project-main {
    min-width: 0;
  }

  .project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 10px;

    .project-kind {
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .project-links {
      display: flex;
      align-items: center;
      color: var(--text-muted);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 4px 0 4px 12px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: clamp(26px, 3vw, 42px);
    font-weight: 600;
    letter-spacing: -0.04em;

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    max-width: 650px;
    color: var(--text-muted);
    font-size: var(--fz-md);
    line-height: 1.55;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    gap: 0 16px;
    flex-wrap: wrap;
    padding: 0;
    margin: 18px 0 0;
    list-style: none;

    li {
      color: var(--text-primary);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
    }
  }

  @media (max-width: 768px) {
    .project-inner {
      grid-template-columns: 30px minmax(0, 1fr);
      gap: 14px;
      padding: 22px 0;
    }

    .project-title {
      font-size: clamp(25px, 8vw, 34px);
    }

    .project-description {
      font-size: var(--fz-sm);
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = (node, index) => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;
    let projectPath = `/projects/${kebabCase(title)}/`;
    if (title === 'Rencipe') {
      projectPath = '/project/rencipe/';
    } else if (title === 'Provider Usage Monitor') {
      projectPath = '/project/provider-usage-monitor';
    } else if (title === 'InsChat') {
      projectPath = '/project/inschat';
    } else if (title === 'Agent') {
      projectPath = '/project/agent/';
    }

    return (
      <div className="project-inner">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-main">
          <header>
            <div className="project-top">
              <span className="project-kind">Selected project</span>
              <div className="project-links">
                {github && (
                  <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                    <Icon name="GitHub" />
                  </a>
                )}
                {external && (
                  <a
                    href={external}
                    aria-label="External Link"
                    className="external"
                    target="_blank"
                    rel="noreferrer">
                    <Icon name="External" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">
              <Link to={projectPath}>{title}</Link>
            </h3>

            <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
          </header>

          <footer>
            {tech && (
              <ul className="project-tech-list">
                {tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            )}
          </footer>
        </div>
      </div>
    );
  };

  return (
    <StyledProjectsSection>
      <SplitSection>
        <SplitHeading>
          <span className="overline">What I've Built</span>
          <h2 ref={revealTitle}>Selected Projects</h2>
          <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
            view the archive
          </Link>
        </SplitHeading>

        <div>
          <ul className="projects-grid">
            {prefersReducedMotion ? (
              <>
                {projectsToShow &&
                  projectsToShow.map(({ node }, i) => (
                    <StyledProject key={i}>{projectInner(node, i)}</StyledProject>
                  ))}
              </>
            ) : (
              <TransitionGroup component={null}>
                {projectsToShow &&
                  projectsToShow.map(({ node }, i) => (
                    <CSSTransition
                      key={i}
                      classNames="fadeup"
                      timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                      exit={false}>
                      <StyledProject
                        key={i}
                        ref={el => (revealProjects.current[i] = el)}
                        style={{
                          transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                        }}>
                        {projectInner(node, i)}
                      </StyledProject>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            )}
          </ul>

          {projects.length > GRID_LIMIT && (
            <button className="more-button" onClick={() => setShowMore(!showMore)}>
              Show {showMore ? 'Less' : 'More'}
            </button>
          )}
        </div>
      </SplitSection>
    </StyledProjectsSection>
  );
};

export default Projects;
