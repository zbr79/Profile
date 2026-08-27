import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { useScrollDirection } from '@hooks';
import { Menu } from '@components';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(255, 255, 255, 0.8);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(255, 255, 255, 0.85);
        border-bottom: 1px solid var(--border);
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        background-color: rgba(255, 255, 255, 0.85);
        border-bottom: 1px solid var(--border);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--text-primary);
  font-family: var(--font-sans);
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--text-primary);
      font-size: var(--fz-lg);
      font-weight: 600;
      letter-spacing: -0.02em;

      &:hover,
      &:focus {
        color: var(--text-muted);
        outline: 0;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-sm);

      a {
        padding: 10px;
        color: var(--text-secondary);

        &:hover,
        &:focus {
          color: var(--text-primary);
        }
      }
    }
  }
`;

const Nav = ({ isHome }) => {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <div className="logo anim-fadeup" tabIndex="-1" style={{ animationDelay: '0ms' }}>
          {isHome ? (
            <a href="/" aria-label="home">
              Andy Ren
            </a>
          ) : (
            <Link to="/" aria-label="home">
              Andy Ren
            </Link>
          )}
        </div>

        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i} className="anim-fadeup" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>
        </StyledLinks>

        <Menu />
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
