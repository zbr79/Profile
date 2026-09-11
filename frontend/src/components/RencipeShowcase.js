import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import productScreenshot from '@images/rencipe-homepage-simplified.png';
import { StyledRencipePage } from './rencipeShowcaseStyles';

const capabilities = [
  {
    index: '01 / DISCOVER',
    title: 'Find something worth cooking',
    body:
      'Browse recipes by category, search by dish, or use the featured carousel to find a next meal without starting from a blank page.',
  },
  {
    index: '02 / ORGANIZE',
    title: 'Turn recipes into a plan',
    body:
      'Save favorites, build meal plans, keep drafts, and move from inspiration to an organized kitchen workflow.',
  },
  {
    index: '03 / MAKE',
    title: 'Cook with better context',
    body:
      'Recipe details bring together ingredients, steps, ratings, comments, and practical unit conversion in one focused surface.',
  },
];

const proofPoints = [
  [
    'Bilingual discovery',
    'English and Chinese recipe content designed for a broader home-cooking audience.',
  ],
  [
    'Guest-friendly entry',
    'Visitors can browse the public experience before choosing to sign in or claim an account.',
  ],
  [
    'Image focus controls',
    'Admin tooling supports separate crops for cards, slideshow imagery, and detail pages.',
  ],
  [
    'Tested product surface',
    'Responsive browser coverage includes search, recipes, meals, auth, accessibility, and visual regression.',
  ],
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
          <span>Rencipe / 01</span>
        </div>

        <div className="hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Full-stack recipe platform</span>
            <h1>
              Recipes for <em>real life.</em>
            </h1>
            <p>
              Rencipe turns the messy path from “what should I cook?” to a workable meal into a
              calm, bilingual product experience.
            </p>

            <div className="button-row">
              <a className="primary" href={liveUrl} target="_blank" rel="noreferrer">
                Open live demo <span aria-hidden="true">↗</span>
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-facts">
              <div>
                <strong>EN · 中文</strong>
                bilingual by design
              </div>
              <div>
                <strong>Next.js + Express</strong>
                end-to-end product
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
                alt="Simplified Rencipe homepage with its real navigation, recipe text, and kitchen converter"
              />
            </div>
            <div className="floating-note">browse · save · cook</div>
          </Reveal>
        </div>
      </section>

      <div className="signal-row" aria-label="Rencipe technology highlights">
        <div>
          <strong>Next.js 16</strong>
          <span>frontend</span>
        </div>
        <div>
          <strong>Express 5</strong>
          <span>API layer</span>
        </div>
        <div>
          <strong>MongoDB</strong>
          <span>data model</span>
        </div>
        <div>
          <strong>Cloudinary</strong>
          <span>media pipeline</span>
        </div>
      </div>

      <section className="showcase-section">
        <Reveal className="section-intro">
          <div>
            <span className="section-kicker">The product</span>
            <h2>More than a recipe list.</h2>
          </div>
          <p>
            Rencipe is shaped like a real product: it has public discovery, personal organization,
            authenticated workflows, and the small tools that make cooking easier once the recipe is
            open.
          </p>
        </Reveal>

        <div className="capabilities-grid">
          {capabilities.map(({ index, title, body }, indexPosition) => (
            <Reveal key={index} delay={indexPosition * 100}>
              <article className="capability-card">
                <span className="card-index">{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="workflow-band">
        <Reveal>
          <span className="section-kicker">The core loop</span>
          <h2>From craving to plan, without losing the thread.</h2>
        </Reveal>

        <div className="workflow">
          <Reveal className="workflow-step" delay={100}>
            <span className="step-number">01</span>
            <h3>Explore</h3>
            <p>Search, browse categories, and use the featured surface to find the right idea.</p>
          </Reveal>
          <Reveal className="workflow-step" delay={200}>
            <span className="step-number">02</span>
            <h3>Save</h3>
            <p>
              Keep favorites, comments, ratings, and drafts close to the account that owns them.
            </p>
          </Reveal>
          <Reveal className="workflow-step" delay={300}>
            <span className="step-number">03</span>
            <h3>Plan</h3>
            <p>Combine recipes into meal plans and use the kitchen tools while you cook.</p>
          </Reveal>
        </div>
      </section>

      <section className="architecture-section">
        <Reveal className="architecture-copy">
          <span className="section-kicker">Under the surface</span>
          <h2>A product stack built for iteration.</h2>
          <p>
            The interface is only one layer. Rencipe connects a Next.js experience to an Express
            API, MongoDB persistence, and Cloudinary media handling so the product can grow beyond
            static recipe cards.
          </p>
        </Reveal>

        <Reveal className="architecture-diagram" delay={160}>
          <div className="architecture-node">
            <strong>Browser</strong>
            <span>responsive UI</span>
          </div>
          <div className="architecture-node">
            <strong>Next.js</strong>
            <span>app routes + UI</span>
          </div>
          <div className="architecture-node">
            <strong>Express</strong>
            <span>API + auth</span>
          </div>
          <div className="architecture-node">
            <strong>Data + media</strong>
            <span>MongoDB + Cloudinary</span>
          </div>
        </Reveal>
      </section>

      <section className="proof-section">
        <Reveal className="proof-copy">
          <span className="section-kicker">What I built</span>
          <h2>Small details make the demo credible.</h2>
          <p>
            The project is designed to show product thinking as well as implementation range:
            responsive behavior, real user states, practical admin tooling, and a path from guest
            browsing to personal cooking workflows.
          </p>
        </Reveal>

        <div className="proof-list">
          {proofPoints.map(([title, body], index) => (
            <Reveal key={title} delay={index * 80}>
              <div>
                <strong>{title}</strong>
                {body}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="showcase-cta">
        <Reveal>
          <h2>See it in motion.</h2>
          <p>
            Open the deployed app to browse the public experience and follow the product surface
            yourself.
          </p>
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
