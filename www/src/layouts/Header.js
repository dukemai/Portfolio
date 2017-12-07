import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const propTypes = {
};
const defaultProps = {
};

const Header = ({ }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
