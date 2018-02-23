import React from 'react';
import PropTypes from 'prop-types';

import MailTo from './MailTo';

import './style.scss';

const propTypes = {
};
const defaultProps = {
};

const Contact = ({ }) => (
  <div className="contact">
    <h3 className="contact__title">
      Contact
    </h3>
    <div className="contact__row contact__row--info">
      <MailTo to="contact@international-sanctions.com" />
    </div>
    <div className="contact__row contact__row--text">
      Christoffer Berg
    </div>
    <div className="contact__row contact__row--info">
      <a className="contact__row-phone" href="tel:46-70-37-89-600">
        +46 70 37 89 600
      </a>
    </div>
    <div className="contact__row contact__row--info">
      <MailTo to="christoffer.berg@international-sanctions.com" />
    </div>
  </div>
);

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;
