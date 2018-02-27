import React from 'react';
import PropTypes from 'prop-types';

import MailTo from './MailTo';

import './style.scss';

const propTypes = {
  contactName: PropTypes.string,
  contactNumber: PropTypes.string,
  contactPersonalEmail: PropTypes.string,
  contactEmail: PropTypes.string,
};
const defaultProps = {
  contactName: '',
  contactNumber: '',
  contactPersonalEmail: '',
  contactEmail: '',
};

const Contact = ({ contactName, contactNumber, contactPersonalEmail, contactEmail }) => (
  <div className="contact">
    <h3 className="contact__title">
      Contact
    </h3>
    <div className="contact__row contact__row--info">
      <MailTo to={contactEmail} />
    </div>
    <div className="contact__row contact__row--text">
      {contactName}
    </div>
    <div className="contact__row contact__row--info">
      <a className="contact__row-phone" href={`tel:${contactNumber}`}>
        {contactNumber}
      </a>
    </div>
    <div className="contact__row contact__row--info">
      <MailTo to={contactPersonalEmail} />
    </div>
  </div>
);

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;
