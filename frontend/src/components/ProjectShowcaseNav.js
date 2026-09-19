import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import GitHubBrand from '@components/icons/github-brand';
import { Icon } from '@components/icons';

const ProjectShowcaseNav = ({
  prefix = 'showcase-nav',
  menuId,
  menuLabel,
  brand,
  brandHref,
  sectionLinks,
  external,
  github,
  externalIcon,
  githubLabel,
  githubClassName,
  iconClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = event => {
      if (event.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const className = suffix => `${prefix}-${suffix}`;

  return (
    <>
      <button
        className={className('toggle')}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Close project navigation' : 'Open project navigation'}
        onClick={() => setIsOpen(open => !open)}>
        <span className={iconClassName || className('menu-icon')} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <button
        className={`${className('overlay')} ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Close project navigation"
        tabIndex={isOpen ? 0 : -1}
        onClick={close}
      />
      <aside
        id={menuId}
        className={`${className('panel')} ${isOpen ? 'is-open' : ''}`}
        aria-label={menuLabel}
        aria-hidden={!isOpen}>
        <div className={className('panel-header')}>
          {brandHref ? (
            <Link className={className('panel-brand')} to={brandHref} onClick={close}>
              {brand}
            </Link>
          ) : (
            <span className={className('panel-brand')}>{brand}</span>
          )}
          <button type="button" aria-label="Close project navigation" onClick={close}>
            ×
          </button>
        </div>
        <nav className={className('links')} aria-label="Project sections">
          {sectionLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
        {(external || github) && (
          <div className={className('external')}>
            {external && (
              <a
                href={external}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
                title="Live demo"
                onClick={close}>
                {externalIcon || <Icon name="External" />}
              </a>
            )}
            {github && (
              <a
                className={githubClassName}
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub source"
                title="GitHub source"
                onClick={close}>
                <GitHubBrand />
                {githubLabel && <span>{githubLabel}</span>}
              </a>
            )}
          </div>
        )}
      </aside>
    </>
  );
};

ProjectShowcaseNav.propTypes = {
  prefix: PropTypes.string,
  menuId: PropTypes.string.isRequired,
  menuLabel: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  brandHref: PropTypes.string,
  sectionLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  external: PropTypes.string,
  github: PropTypes.string,
  externalIcon: PropTypes.node,
  githubLabel: PropTypes.string,
  githubClassName: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default ProjectShowcaseNav;
