import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
const defaultProps = {
  text: '',
  icon: '',
};

const ServicesItem = ({ text, icon }) => (
  <li className="service-item">
    <div className="service-item__inner">
      <i className="material-icons">{icon}</i>{text}
    </div>
  </li>
);

ServicesItem.propTypes = propTypes;
ServicesItem.defaultProps = defaultProps;
export default ServicesItem;
