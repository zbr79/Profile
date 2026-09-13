import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import productScreenshot from '@images/rencipe-homepage-simplified.png';
import recipeDetailScreenshot from '@images/rencipe-recipe-detail-focused.png';
import { StyledRencipePage } from './rencipeShowcaseStyles';

const browseDesktopScreenshot = '/rencipe-browse-desktop-simplified.svg';
const browseMobileScreenshot = '/rencipe-browse-mobile-simplified.svg';

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
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Recipe discovery platform</span>
            <h1>
              Recipes for <em>real life.</em>
            </h1>
            <p>
              Rencipe brings discovery, browsing, and cooking into one simple path.
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
                <strong>Public routes</strong>
                built for discovery
              </div>
              <div>
                <strong>Open access</strong>
                browse and read recipes
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
                alt="Simplified Rencipe homepage with real recipe text and a focused kitchen converter"
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
              together so a reader can move from curiosity to action.
            </p>
            <a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">
              View the live recipe <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="responsive-preview">
        <div className="responsive-preview-inner">
          <Reveal className="responsive-preview-copy">
            <span className="section-kicker">03 / Browse discovery</span>
            <h2>Find the next thing to cook.</h2>
            <p>
              Public recipes stay easy to scan with category filters, popular sorting, and a
              focused card grid that works across desktop and mobile.
            </p>
            <div className="responsive-facts">
              <span>Public recipes / open browsing</span>
              <span>Categories / quick filtering</span>
            </div>
          </Reveal>

          <div className="responsive-devices">
            <div className="responsive-desktop">
              <div className="browser-frame">
                <div className="browser-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  className="browser-image"
                  src={browseDesktopScreenshot}
                  alt="Simplified Rencipe public Browse page desktop preview"
                />
              </div>
              <span className="responsive-label">Desktop</span>
            </div>

            <div className="responsive-mobile">
              <div className="phone-frame">
                <img
                  className="mobile-image"
                  src={browseMobileScreenshot}
                  alt="Simplified Rencipe public Browse page mobile preview"
                />
              </div>
              <span className="responsive-label">Mobile</span>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-build">
        <div className="showcase-build-inner">
          <Reveal className="showcase-build-heading">
            <span className="section-kicker">04 / Build notes</span>
            <h2>The stack behind Rencipe.</h2>
            <p>A full-stack recipe app built for public discovery.</p>
          </Reveal>

          <Reveal className="showcase-build-details" delay={140}>
            <div className="technology-list">
              <article>
                <span>Frontend</span>
                <strong>Next.js + React</strong>
              </article>
              <article>
                <span>Language</span>
                <strong>TypeScript</strong>
              </article>
              <article>
                <span>Backend</span>
                <strong>Express</strong>
              </article>
              <article>
                <span>Data</span>
                <strong>MongoDB</strong>
              </article>
              <article>
                <span>Media</span>
                <strong>Cloudinary</strong>
              </article>
              <article>
                <span>Testing</span>
                <strong>Playwright</strong>
              </article>
              <article>
                <span>Delivery</span>
                <strong>PM2 + CI</strong>
              </article>
            </div>
          </Reveal>
        </div>
      </section>
    </StyledRencipePage>
  );
};

RencipeShowcase.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string.isRequired,
};

export default RencipeShowcase;
