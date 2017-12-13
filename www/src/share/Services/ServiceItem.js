import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  isLeftAlign: PropTypes.bool,
};
const defaultProps = {
  text: '',
  isLeftAlign: false,
};

const ServicesItem = ({ text, isLeftAlign }) => {
  const className = isLeftAlign ? 'service-item--left' : 'service-item--right';
  return (
    <li className={`service-item ${className}`}>
      <div className="service-item__inner">
        {text}
      </div>
      <div className="service-item__empty" />
      <i className="service-item__circle" />
    </li>
  );
};

ServicesItem.propTypes = propTypes;
ServicesItem.defaultProps = defaultProps;
export default ServicesItem;
