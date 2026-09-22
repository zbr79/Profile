import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from '@hooks';
import homeScreenshot from '@images/agent-home-real.png';
import builderScreenshot from '@images/agent-builder-composer-real.png';
import mobileScreenshot from '@images/agent-mobile-real.png';
import ProjectShowcaseNav from '@components/ProjectShowcaseNav';
import { StyledAgentPage } from './agentShowcaseStyles';

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`agent-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--agent-reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

const AgentShowcase = ({ external, github }) => {
  const liveUrl = external || 'https://agent.rwkit.com/';

  return (
    <StyledAgentPage>
      <ProjectShowcaseNav
        prefix="agent-nav"
        menuId="agent-project-menu"
        menuLabel="Agent project menu"
        brand="Agent"
        brandHref="/"
        sectionLinks={[
          { id: 'overview', label: 'Overview' },
          { id: 'build-loop', label: 'Build loop' },
          { id: 'responsive', label: 'Responsive' },
          { id: 'stack', label: 'Stack' },
        ]}
        external={liveUrl}
        github={github}
        githubLabel="Source on GitHub"
        githubClassName="agent-github-link"
        iconClassName="agent-menu-icon"
      />

      <section className="agent-hero" id="overview">
        <div className="agent-hero-grid">
          <Reveal className="agent-hero-copy">
            <span className="agent-eyebrow">AI agent / build workspace</span>
            <h1>Turn a prompt into a working change.</h1>
            <p>
              Agent is a focused AI workspace for building software: plan a change, let the agent
              inspect and edit a workspace, verify the result, and keep the commit path visible.
            </p>

            <div className="agent-button-row">
              <a className="primary" href={liveUrl} target="_blank" rel="noreferrer">
                Open live demo <span aria-hidden="true">↗</span>
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="agent-hero-facts">
              <div>
                <strong>Plan → build</strong>
                move from intent to implementation
              </div>
              <div>
                <strong>Workspace-aware</strong>
                inspect, edit, verify, and review
              </div>
              <div>
                <strong>Streaming execution</strong>
                follow the work as it happens
              </div>
            </div>
          </Reveal>

          <Reveal className="agent-hero-visual" delay={160}>
            <figure className="agent-presentation agent-home-presentation">
              <div className="agent-presentation-header">
                <span>Builder workspace</span>
                <span>01 / Overview</span>
              </div>
              <div className="agent-presentation-stage">
                <div className="agent-real-screenshot agent-home-capture">
                  <img
                    src={homeScreenshot}
                    alt="Authentic Agent landing screen with workspace navigation and plan/build composer"
                  />
                </div>
              </div>
              <figcaption>
                <strong>A calm surface for complex work.</strong>
                <span>The first screen keeps the task, workspace, and next action legible.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="agent-section agent-build-loop-section" id="build-loop">
        <div className="agent-section-inner">
          <Reveal className="agent-section-visual">
            <figure className="agent-presentation agent-builder-presentation">
              <div className="agent-presentation-header">
                <span>Intent to implementation</span>
                <span>02 / Build loop</span>
              </div>
              <div className="agent-presentation-stage">
                <div className="agent-real-screenshot agent-builder-capture">
                  <img
                    src={builderScreenshot}
                    alt="Authentic Agent composer with a build prompt and selectable model menu"
                  />
                </div>
              </div>
              <figcaption>
                <strong>The composer sets the direction.</strong>
                <span>
                  Mode, model, attachments, and the task prompt stay together at the point of
                  action.
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="agent-section-copy" delay={140}>
            <span className="agent-kicker">02 / Build loop</span>
            <h2>Build is a workflow, not a chat skin.</h2>
            <p>
              The latest branch makes the handoff from intent to implementation explicit. Agent can
              work through a workspace, keep the conversation resumable, and surface enough progress
              to understand what changed.
            </p>
            <div className="agent-feature-list">
              <article>
                <strong>Plan before editing</strong>
                <span>
                  Separate planning from Build mode so a task can be shaped before files move.
                </span>
              </article>
              <article>
                <strong>See the work happen</strong>
                <span>
                  Stream tool progress and preserve the run trail when a session is resumed.
                </span>
              </article>
              <article>
                <strong>Close the loop</strong>
                <span>
                  Workspace change totals and a commit/push action make delivery part of the flow.
                </span>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="agent-section agent-responsive-section" id="responsive">
        <div className="agent-responsive-inner">
          <Reveal className="agent-responsive-copy">
            <span className="agent-kicker">03 / Responsive</span>
            <h2>A workbench that fits the screen.</h2>
            <p>
              Desktop keeps workspaces and sessions visible. On mobile, navigation becomes a drawer
              and the composer moves its controls into reach without losing the plan/build
              distinction.
            </p>
            <div className="agent-responsive-facts">
              <span>Desktop / workspace and session navigation</span>
              <span>Mobile / compact drawer and bottom composer</span>
              <span>Focused / one clear action at a time</span>
            </div>
          </Reveal>

          <Reveal className="agent-mobile-visual" delay={140}>
            <figure className="agent-phone-presentation">
              <div className="agent-phone-frame">
                <img
                  src={mobileScreenshot}
                  alt="Authentic Agent mobile screen with compact navigation and composer"
                />
              </div>
              <figcaption>Builder workspace / mobile</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="agent-section agent-build-section" id="stack">
        <div className="agent-build-inner">
          <Reveal className="agent-build-copy">
            <span className="agent-kicker">04 / Build notes</span>
            <h2>Make the agent useful at the edges.</h2>
            <p>
              Agent pairs a small interaction surface with deliberate boundaries around workspace
              access, model routing, persistence, and delivery.
            </p>
          </Reveal>

          <Reveal className="agent-stack-panel" delay={140}>
            <div className="agent-stack-grid">
              {[
                ['Interface', 'Next.js + React'],
                ['Agent runtime', 'OpenCode Go + streaming'],
                ['Workspace', 'Read, edit, list, glob + grep'],
                ['Inputs', 'Images, documents + voice'],
                ['Data', 'MongoDB + session state'],
                ['Safety', 'Path jail + command checkpoints'],
                ['Delivery', 'PM2 + nginx'],
              ].map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="agent-release-note">
              <span>Latest branch</span>
              <p>
                The current build includes mode-aware chats, document extraction, resumable runs,
                workspace change totals, account settings, and commit/push feedback.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </StyledAgentPage>
  );
};

AgentShowcase.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string.isRequired,
};

export default AgentShowcase;
