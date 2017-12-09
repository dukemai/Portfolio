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
      <i className="material-icons">contact_mail</i>
      <MailTo to="contact@international-sanctions.com" />
    </div>
    <div className="contact__row contact__row--text">
      Or contact Christoffer Berg directly
    </div>
    <div className="contact__row contact__row--info">
      <i className="material-icons">call</i>+46 70 37 89 600
    </div>
    <div className="contact__row contact__row--info">
      <i className="material-icons">contact_mail</i>
      <MailTo to="christoffer.berg@international-sanctions.com" />
    </div>
  </div>
);

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;
