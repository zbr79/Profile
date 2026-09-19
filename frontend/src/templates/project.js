import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import ProviderUsageShowcase from '@components/ProviderUsageShowcase';
import RencipeShowcase from '@components/RencipeShowcase';

const StyledProjectContainer = styled.main`
  max-width: 900px;
`;

const StyledProjectHeader = styled.header`
  margin-bottom: 56px;

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .project-links {
    display: flex;
    gap: 12px;
    margin-top: 28px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:hover {
        color: var(--text-primary);
      }
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyledProjectContent = styled.article`
  max-width: 720px;
  margin-bottom: 100px;

  h2,
  h3,
  h4 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    padding: 0.2em 0.4em;
    border-radius: var(--border-radius);
    background-color: var(--border);
    color: var(--text-primary);
    font-size: var(--fz-sm);
  }

  pre code {
    padding: 0;
    background-color: transparent;
  }
`;

const ProjectTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tech, github, external } = frontmatter;
  const isRencipe = title === 'Rencipe';
  const isProviderUsageMonitor = title === 'Provider Usage Monitor';

  return (
    <Layout location={location} showPortfolioChrome={!isRencipe && !isProviderUsageMonitor}>
      <Helmet title={title} />

      {isRencipe ? (
        <RencipeShowcase external={external} github={github} />
      ) : isProviderUsageMonitor ? (
        <ProviderUsageShowcase github={github} />
      ) : (
        <StyledProjectContainer>
          <Link className="breadcrumb" to="/archive">
            <span className="arrow">&larr;</span>
            All projects
          </Link>

          <StyledProjectHeader>
            <span className="overline">Project</span>
            <h1 className="big-heading">{title}</h1>

            <div className="project-meta">
              {date && <time>{new Date(date).getFullYear()}</time>}
              {tech && tech.length > 0 && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <span>{tech.join(' · ')}</span>
                </>
              )}
            </div>

            {(github || external) && (
              <div className="project-links">
                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <Icon name="GitHub" />
                    GitHub
                  </a>
                )}
                {external && (
                  <a href={external} target="_blank" rel="noreferrer">
                    <Icon name="External" />
                    Live site
                  </a>
                )}
              </div>
            )}
          </StyledProjectHeader>

          <StyledProjectContent dangerouslySetInnerHTML={{ __html: html }} />
        </StyledProjectContainer>
      )}
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string),
        github: PropTypes.string,
        external: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        tech
        github
        external
      }
    }
  }
`;
