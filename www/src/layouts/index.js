import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bulma/css/bulma.css';

import Header from './Header';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="container is-fluid" >
      <Header />
      <div>
        {children()}
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
