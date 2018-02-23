import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  title: PropTypes.string,
};
const defaultProps = {
  title: 'International Sanctions',
};

const Banner = ({ title }) => (
  <div className="banner">
    <div className="banner__inner">
      <h1 className="banner__title">
        {title}
      </h1>
      <p className="banner__subtitle">
        <span className="banner__subtitle-dot">
          .
        </span>
        <span className="banner__subtitle-location">
          Stockholm
        </span>
        <span className="banner__subtitle-dot">
          .
        </span>
      </p>
    </div>
    <div className="banner__overlay" />
  </div>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
