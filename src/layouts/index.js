import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const description = `International Sanctions, Up to date legal counsel on EU and US sanctions,
Advice on legal recourse, Analysis of political processes and geopolitical frameworks with regard to sanctions,
Access to related services`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="International Sanction"
      meta={[
        { charset: 'utf-8' },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'International Sanctions, counsel, law, legal, advice, EU, US, OFAC',
        },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:site_name',
          content: 'International Sanction',
        },
        {
          property: 'og:title',
          content:
            'International Sanction, Up to date legal counsel, Advice and analysis on legal',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content:
            'http://international-sanctions.com/static/North_face.d8c89915.jpg',
        },
      ]}
    >
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Helmet>
    <div className="container is-fluid">{children}</div>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-155113124-1"
    ></script>
    <script async src="/static/ga.js"></script>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
