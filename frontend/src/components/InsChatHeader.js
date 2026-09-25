import React from 'react';
import PropTypes from 'prop-types';

const InsChatHeader = ({ external }) => {
  return (
    <header className="inschat-topbar">
      <a className="inschat-topbar-brand" href="/" aria-label="InsChat home">
        InsChat
      </a>
      <a className="inschat-topbar-action" href={external} target="_blank" rel="noreferrer">
        Open app
      </a>
    </header>
  );
};

InsChatHeader.propTypes = {
  external: PropTypes.string.isRequired,
};

export default InsChatHeader;
