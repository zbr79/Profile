import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import homeScreenshot from '@images/inschat-home-real.png';
import healthChatScreenshot from '@images/inschat-health-chat-real.png';
import recordsScreenshot from '@images/inschat-records-real.png';
import mobileScreenshot from '@images/inschat-mobile-real.png';
import appIcon from '@images/inschat-app-icon.svg';
import ProjectShowcaseNav from '@components/ProjectShowcaseNav';
import InsChatHeader from '@components/InsChatHeader';
import InsChatGeneralChatVisual from '@components/InsChatGeneralChatVisual';
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
      <InsChatHeader external={liveUrl} />
      <ProjectShowcaseNav
        prefix="inschat-nav"
        menuId="inschat-project-menu"
        menuLabel="InsChat project menu"
        brand="InsChat"
        brandHref="/"
        sectionLinks={[
          { id: 'overview', label: 'Intro' },
          { id: 'intro', label: 'Product' },
          { id: 'workflow', label: 'Health records' },
          { id: 'general', label: 'General chat' },
          { id: 'responsive', label: 'Anywhere' },
          { id: 'stack', label: 'Boundaries' },
          { id: 'try', label: 'Try InsChat' },
        ]}
        external={liveUrl}
        github={github}
        githubLabel="Source on GitHub"
        githubClassName="inschat-github-link"
        iconClassName="inschat-menu-icon"
      />

      <section className="inschat-hero" id="overview">
        <Reveal className="inschat-hero-copy">
          <img className="inschat-hero-icon" src={appIcon} alt="InsChat app icon" />
          <span className="inschat-eyebrow">AI chat / health workspace</span>
          <h1>Health conversations, kept useful.</h1>
          <p>InsChat turns focused AI chat into a health record you can revisit.</p>

          <div className="inschat-button-row">
            <a className="primary" href={liveUrl} target="_blank" rel="noreferrer">
              Try InsChat
            </a>
          </div>
        </Reveal>
      </section>

      <section className="inschat-intro-section" id="intro">
        <div className="inschat-intro-inner">
          <Reveal className="inschat-intro-copy">
            <span className="inschat-kicker">02 / Built around your whole health context</span>
            <h2>A simple conversation, with somewhere useful to go.</h2>
            <p>
              Start with a natural exchange. InsChat keeps the reply focused, accepts the context
              you already have, and gives important health details a place you can revisit.
            </p>
          </Reveal>

          <Reveal className="inschat-intro-visual" delay={160}>
            <figure className="inschat-presentation inschat-home-presentation">
              <div className="inschat-presentation-header">
                <span>Latest health chat</span>
                <span>02 / Product</span>
              </div>
              <div className="inschat-presentation-stage">
                <div className="inschat-real-screenshot inschat-home-capture">
                  <img
                    src={healthChatScreenshot}
                    alt="Authentic InsChat Health mode conversation showing the latest dinner chat and glucose reading"
                  />
                </div>
              </div>
              <figcaption>
                <strong>Conversation keeps the context.</strong>
                <span>Health mode turns a natural exchange into something you can revisit.</span>
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
                <span>03 / Health records</span>
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
            <span className="inschat-kicker">03 / Health records</span>
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

      <section className="inschat-general-section" id="general">
        <div className="inschat-general-inner">
          <Reveal className="inschat-general-copy">
            <span className="inschat-kicker">04 / General chat</span>
            <h2>When you need an assistant, not a health record.</h2>
            <p>
              Health mode is focused by design. Switch to General when the conversation is
              everyday, open-ended, or simply unrelated to your health.
            </p>
            <div className="inschat-general-facts">
              <span>Open-ended questions / no health context required</span>
              <span>Dark workspace / comfortable for longer sessions</span>
              <span>Same composer / attachments, voice, and send</span>
            </div>
          </Reveal>

          <Reveal className="inschat-general-visual" delay={140}>
            <InsChatGeneralChatVisual />
          </Reveal>
        </div>
      </section>

      <section className="inschat-section inschat-responsive-section" id="responsive">
        <div className="inschat-responsive-inner">
          <Reveal className="inschat-responsive-copy">
            <span className="inschat-kicker">05 / Anywhere</span>
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

          <Reveal className="inschat-responsive-visual" delay={140}>
            <div className="inschat-device-composition">
              <figure className="inschat-desktop-presentation">
                <div className="inschat-desktop-frame">
                  <img
                    src={homeScreenshot}
                    alt="Authentic InsChat desktop Health mode screen with sidebar and composer"
                  />
                </div>
                <figcaption>Health mode / desktop</figcaption>
              </figure>

              <figure className="inschat-phone-presentation">
                <div className="inschat-phone-frame">
                  <img
                    src={mobileScreenshot}
                    alt="Authentic InsChat mobile Health mode screen with compact navigation and composer"
                  />
                </div>
                <figcaption>Health mode / mobile</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="inschat-section inschat-build-section" id="stack">
        <div className="inschat-build-inner">
          <Reveal className="inschat-build-copy">
            <span className="inschat-kicker">06 / Built with boundaries</span>
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

      <section className="inschat-cta-section" id="try">
        <Reveal className="inschat-cta-content">
          <span className="inschat-kicker">07 / Try InsChat</span>
          <h2>Keep the conversation. Keep the context.</h2>
          <p>
            Explore the live experience and see how a focused chat can become a health workspace
            without losing the simplicity of a conversation.
          </p>
          <a className="inschat-cta-button" href={liveUrl} target="_blank" rel="noreferrer">
            Open the live demo
          </a>
        </Reveal>
      </section>
    </StyledInsChatPage>
  );
};

InsChatShowcase.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string.isRequired,
};

export default InsChatShowcase;
