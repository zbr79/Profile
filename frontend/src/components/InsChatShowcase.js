import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import homeScreenshot from '@images/inschat-home-real.png';
import recordsScreenshot from '@images/inschat-records-real.png';
import mobileScreenshot from '@images/inschat-mobile-real.png';
import ProjectShowcaseNav from '@components/ProjectShowcaseNav';
import { StyledInsChatPage } from './inschatShowcaseStyles';

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`inschat-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--inschat-reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

const InsChatShowcase = ({ external, github }) => {
  const liveUrl = external || 'https://inschat.rwkit.com/';

  return (
    <StyledInsChatPage>
      <ProjectShowcaseNav
        prefix="inschat-nav"
        menuId="inschat-project-menu"
        menuLabel="InsChat project menu"
        brand="InsChat"
        brandHref="/"
        sectionLinks={[
          { id: 'overview', label: 'Overview' },
          { id: 'workflow', label: 'Health workflow' },
          { id: 'responsive', label: 'Responsive' },
          { id: 'stack', label: 'Stack' },
        ]}
        external={liveUrl}
        github={github}
        githubLabel="Source on GitHub"
        githubClassName="inschat-github-link"
        iconClassName="inschat-menu-icon"
      />

      <section className="inschat-hero" id="overview">
        <div className="inschat-hero-grid">
          <Reveal className="inschat-hero-copy">
            <span className="inschat-eyebrow">AI chat / health workspace</span>
            <h1>Keep the useful parts of a conversation.</h1>
            <p>
              InsChat streams focused AI replies, accepts images and documents, and turns health
              conversations into records you can revisit.
            </p>

            <div className="inschat-button-row">
              <a className="primary" href={liveUrl} target="_blank" rel="noreferrer">
                Open live demo <span aria-hidden="true">↗</span>
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="inschat-hero-facts">
              <div>
                <strong>Streaming chat</strong>
                replies arrive as they are generated
              </div>
              <div>
                <strong>Multimodal input</strong>
                images, documents, and voice
              </div>
              <div>
                <strong>Guest-first</strong>
                try the core flow without an account
              </div>
            </div>
          </Reveal>

          <Reveal className="inschat-hero-visual" delay={160}>
            <figure className="inschat-presentation inschat-home-presentation">
              <div className="inschat-presentation-header">
                <span>Focused chat surface</span>
                <span>01 / Overview</span>
              </div>
              <div className="inschat-presentation-stage">
                <div className="inschat-real-screenshot inschat-home-capture">
                  <img
                    src={homeScreenshot}
                    alt="Authentic InsChat Health mode landing screen with sidebar and multimodal composer"
                  />
                </div>
              </div>
              <figcaption>
                <strong>One calm place to start.</strong>
                <span>Health mode is visible without making the chat feel like a dashboard.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="inschat-section inschat-workflow-section" id="workflow">
        <div className="inschat-section-inner">
          <Reveal className="inschat-section-visual">
            <figure className="inschat-presentation inschat-records-presentation">
              <div className="inschat-presentation-header">
                <span>Structured health view</span>
                <span>02 / Workflow</span>
              </div>
              <div className="inschat-presentation-stage">
                <div className="inschat-real-screenshot inschat-records-capture">
                  <img
                    src={recordsScreenshot}
                    alt="Authentic InsChat Records page with glucose insights, trend chart, and health timeline"
                  />
                </div>
              </div>
              <figcaption>
                <strong>Conversation becomes a record.</strong>
                <span>Structured readings and meals stay editable after the chat is over.</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="inschat-section-copy" delay={140}>
            <span className="inschat-kicker">02 / Health workflow</span>
            <h2>From freeform chat to a usable record.</h2>
            <p>
              Health mode keeps the conversation natural, then extracts glucose, insulin, meals,
              and other readings into a structured timeline.
            </p>
            <div className="inschat-feature-list">
              <article>
                <strong>Conclude in one pass</strong>
                <span>Turn a completed health exchange into a structured summary without retyping it.</span>
              </article>
              <article>
                <strong>See the trend</strong>
                <span>Records combine insights, glucose charts, meal context, and day-by-day history.</span>
              </article>
              <article>
                <strong>Keep control</strong>
                <span>Guest data stays local; signed-in records are scoped to the account.</span>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="inschat-section inschat-responsive-section" id="responsive">
        <div className="inschat-responsive-inner">
          <Reveal className="inschat-responsive-copy">
            <span className="inschat-kicker">03 / Responsive</span>
            <h2>A focused surface on desktop and mobile.</h2>
            <p>
              The same chat flow adapts from a persistent desktop sidebar to a compact mobile
              drawer, while the composer keeps attachment, voice, and send actions within reach.
            </p>
            <div className="inschat-responsive-facts">
              <span>Desktop / persistent session navigation</span>
              <span>Mobile / bottom composer and drawer</span>
              <span>Accessible / keyboard and reduced-motion paths</span>
            </div>
          </Reveal>

          <Reveal className="inschat-mobile-visual" delay={140}>
            <figure className="inschat-phone-presentation">
              <div className="inschat-phone-frame">
                <img
                  src={mobileScreenshot}
                  alt="Authentic InsChat mobile Health mode screen with compact navigation and composer"
                />
              </div>
              <figcaption>Health mode / mobile</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="inschat-section inschat-build-section" id="stack">
        <div className="inschat-build-inner">
          <Reveal className="inschat-build-copy">
            <span className="inschat-kicker">04 / Build notes</span>
            <h2>Small interface, deliberate boundaries.</h2>
            <p>
              InsChat keeps the interaction surface simple while separating chat streaming,
              structured health extraction, account data, and model routing behind the app.
            </p>
          </Reveal>

          <Reveal className="inschat-stack-panel" delay={140}>
            <div className="inschat-stack-grid">
              {[
                ['Interface', 'Next.js + React'],
                ['Engine', 'OpenCode Go API'],
                ['Data', 'MongoDB + localStorage'],
                ['Input', 'Images, documents + voice'],
                ['Routing', 'Text / vision model paths'],
                ['Quality', 'Playwright'],
                ['Delivery', 'PM2 + nginx'],
              ].map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="inschat-release-note">
              <span>Latest branch</span>
              <p>
                The current build includes mode-aware chats, persisted sessions, account settings,
                document support, voice dictation, and responsive empty states.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </StyledInsChatPage>
  );
};

InsChatShowcase.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string.isRequired,
};

export default InsChatShowcase;
