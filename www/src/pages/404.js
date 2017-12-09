import React from 'react';

import { Banner } from '../share';

const NotFoundPage = () => (
  <div className="page page--404">
    <Banner />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
