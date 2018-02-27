import React from 'react';
import PropTypes from 'prop-types';

import ServiceItem from './ServiceItem';
import './style.scss';

const propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({})),
};
const defaultProps = {
  services: [],
};

const providingSerivces = [
  {
    text: 'Up to date legal counsel on EU and US sanctions',
  },
  {
    text: 'Analysis of political processes and geopolitical frameworks with regard to sanctions',
  },
  {
    text: 'Advice on legal recourse',
  },
  {
    text: 'Access to related services',
  },
];

const Services = ({ services }) => (
  <div className="services">
    <h3>
      International Sanctions offers:
    </h3>
    <ul className="services__list">
      {services.map((service, key) => (
        <ServiceItem isLeftAlign={key % 2 === 0} key={key} {...service} />
      ))}
    </ul>
  </div>
);

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;
export default Services;
