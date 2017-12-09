import React from 'react';

import { Banner, Services, Contact } from '../share';

import './index.scss';

const IndexPage = () => (
  <div className="page page--home">
    <Banner />
    <Services />
    <p className="page__recommendation">
      Recommendations upon request.
    </p>
    <Contact />
  </div>
);

export default IndexPage;
