import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  quote: PropTypes.string,
  credit: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
  quote: `"I help you or your company comply with international sanctions law while avoiding 
            unnecessary loss of business opportunities."`,
  credit: 'Carl (Christoffer) Berg',
  positions: ['Former senior diplomat', 'Founder of International Sanctions', 'll.m, cams, cgss'],
};
const Portrait = ({ quote, credit, positions }) => (
  <div className="portrait">
    <div className="portrait__text">
      <div className="portrait__text-inner">
        <p>
          <i>
            {quote}
          </i>
        </p>
        <div className="portrait__text-credit">
          <div className="portrait__text-credit__name">
            {credit}
          </div>
          {
            positions.map((position, key) => (
              <div key={key} className="portrait__text-credit__role">
                {position}
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <div className="portrait__right">
      <div className="portrait__right-inner">
        <div className="portrait__image-wrapper">
          <img className="portrait__image" src="/static/Christoffer_Portrait.jpg" alt="Christoffer Berg" />
        </div>
      </div>
    </div>
  </div>
);

Portrait.propTypes = propTypes;
Portrait.defaultProps = defaultProps;
export default Portrait;
