import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  quote: PropTypes.string,
};
const defaultProps = {
  quote: `"I help you or your company comply with international sanctions law while avoiding 
            unnecessary loss of business opportunities."`,
};
const Portrait = ({ quote }) => (
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
            Christoffer Berg
          </div>
          <div className="portrait__text-credit__role">
            Former senior diplomat
          </div>
          <div>
            Founder of International Sanctions
          </div>
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
