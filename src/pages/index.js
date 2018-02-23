import React from 'react';

import { Banner, Services, Contact, Portrait } from '../share';

import './index.scss';

const IndexPage = () => (
  <div className="page page--home">
    <Banner />
    <Services />
    <Portrait />
    <p className="page__recommendation">
      Recommendations upon request.
    </p>
    <Contact />
  </div>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
