import React from 'react';
import PropTypes from 'prop-types';

import ServiceItem from './ServiceItem';
import './style.scss';

const propTypes = {
};
const defaultProps = {
};

const providingSerivces = [
  {
    icon: 'update',
    text: 'Up to date legal counsel on EU and US sanctions',
  },
  {
    icon: 'data_usage',
    text: 'Analysis of political processes and geopolitical frameworks with regard to sanctions',
  },
  {
    icon: 'live_help',
    text: 'Advice on legal recourse',
  },
  {
    icon: 'get_app',
    text: 'Access to related services',
  },
];

const Services = ({ }) => (
  <div className="services">
    <h3>
      International Sanctions offers:
    </h3>
    <ul className="services__list">
      {providingSerivces.map((service, key) => (
        <ServiceItem isLeftAlign={key % 2 === 0} key={key} {...service} />
      ))}
    </ul>
  </div>
);

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;
export default Services;
