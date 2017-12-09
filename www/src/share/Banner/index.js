import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
};
const defaultProps = {
};

const Banner = ({ }) => (
  <div className="banner">
    <div className="banner__inner">
      <h1 className="banner__title">
        International Sanctions Advice
      </h1>
      <p className="banner__subtitle">
        . Stockholm .
      </p>
    </div>
  </div>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
export default Banner;
