import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  to: PropTypes.string,
};
const defaultProps = {
  to: '',
};

const MailTo = ({ to }) => (
  <a className="mail-to" href={`mailto:${to}`}>
    {to}
  </a>);

MailTo.propTypes = propTypes;
MailTo.defaultProps = defaultProps;
export default MailTo;
