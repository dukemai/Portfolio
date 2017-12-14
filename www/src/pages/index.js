import React from 'react';

import { Banner, Services, Contact } from '../share';

import './index.scss';

const IndexPage = ({ data }) => {
  const home = data.home ? data.home.edges[0].node : {};
  console.log(home);
  return (
    <div className="page page--home">
      <Banner title={home.title} />
      <Services />
      <p className="page__recommendation">
        Recommendations upon request.
      </p>
      <Contact />
    </div>
  );
};

export const query = graphql`
query PageQuery {
  home: allContentfulHome {
    edges {
      node {
        title,
        location,
        offer,
        services,
      }
    }
  }
}`;

export default IndexPage;
