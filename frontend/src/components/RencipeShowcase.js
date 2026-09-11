import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import productScreenshot from '@images/rencipe-homepage-simplified.png';
import recipeDetailScreenshot from '@images/rencipe-recipe-detail-focused.png';
import { StyledRencipePage } from './rencipeShowcaseStyles';

const guestSurfaces = [
  {
    index: '01 / HOME',
    route: '/',
    title: 'Start with something worth cooking',
    body:
      'Featured recipes, public tabs, and a focused kitchen converter give guests a clear first step.',
  },
  {
    index: '02 / BROWSE',
    route: '/browse',
    title: 'Find a public recipe',
    body:
      'Guests can browse public recipes, filter by category, and switch between popular and recent results.',
  },
  {
    index: '03 / RECIPE DETAIL',
    route: '/recipes/:id',
    title: 'Open the recipe and cook',
    body:
      'A public recipe page puts the ingredients, steps, tips, and useful cooking context in one place.',
  },
  {
    index: '04 / PUBLIC INFO',
    route: '/about · /legal · /contact',
    title: 'Get the public context',
    body:
      'About, Legal, and Contact pages complete the guest-facing product surface around the recipe experience.',
  },
];

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${className} ${isVisible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

const RencipeShowcase = ({ external, github }) => {
  const liveUrl = external || 'https://rencipe.renstoolbox.com/';

  return (
    <StyledRencipePage>
      <section className="showcase-hero">
        <div className="showcase-nav">
          <Link to="/archive">← Project archive</Link>
          <span>Rencipe / guest view</span>
        </div>

        <div className="hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Guest-facing recipe platform</span>
            <h1>
              Recipes for <em>real life.</em>
            </h1>
            <p>
              Rencipe gives visitors a simple path from public discovery to a recipe they can read
              and cook.
            </p>

            <div className="button-row">
              <a className="primary" href={liveUrl} target="_blank" rel="noreferrer">
                Open guest demo <span aria-hidden="true">↗</span>
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-facts">
              <div>
                <strong>Public routes</strong>
                built for first-time visitors
              </div>
              <div>
                <strong>No account required</strong>
                discover and read recipes
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={180}>
            <div className="browser-frame">
              <div className="browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <img
                className="browser-image"
                src={productScreenshot}
                alt="Simplified Rencipe guest homepage with real recipe text and a focused kitchen converter"
              />
            </div>
            <div className="floating-note">discover · browse · cook</div>
          </Reveal>
        </div>
      </section>

      <section className="detail-preview">
        <div className="detail-preview-inner">
          <Reveal className="detail-preview-visual">
            <div className="browser-frame">
              <img
                className="browser-image"
                src={recipeDetailScreenshot}
                alt="Focused Rencipe Char Siu recipe detail preview with real ingredients, steps, and recipe metadata"
              />
            </div>
          </Reveal>

          <Reveal className="detail-preview-copy" delay={160}>
            <span className="section-kicker">02 / Recipe detail</span>
            <h2>Open the recipe and cook.</h2>
            <p>
              The detail surface keeps the title, ingredients, steps, metadata, and cooking context
              together so a guest can move from curiosity to action.
            </p>
            <a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">
              View the live recipe <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="guest-surfaces">
        <Reveal className="section-intro">
          <div>
            <span className="section-kicker">The guest view</span>
            <h2>Four public surfaces are enough.</h2>
          </div>
          <p>
            The presentation follows the routes an interviewer can open without an account, from
            discovery through a recipe and the public information pages.
          </p>
        </Reveal>

        <div className="guest-grid">
          {guestSurfaces.map(({ index, route, title, body }, indexPosition) => (
            <Reveal key={index} delay={indexPosition * 90}>
              <article className="guest-card">
                <span className="card-index">{index}</span>
                <span className="card-route">{route}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="showcase-cta">
        <Reveal>
          <span className="section-kicker">Guest-first demo</span>
          <h2>See the public experience.</h2>
          <p>Open Rencipe as an interviewer would: start at discovery, then follow a recipe.</p>
          <div className="button-row">
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Launch Rencipe <span aria-hidden="true">↗</span>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>
    </StyledRencipePage>
  );
};

RencipeShowcase.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string.isRequired,
};

export default RencipeShowcase;
