import React from 'react';

import { Banner, Services, Contact, Portrait } from '../share';

import './index.scss';

const IndexPage = ({ data }) =>{
  console.log(data)
  return (
  <div className="page page--home">
    <Banner title={data.markdownRemark.frontmatter.title} />
    <Services />
    <Portrait />
    <p className="page__recommendation">
      Recommendations upon request.
    </p>
    <Contact />
  </div>
);
} 

export const query = graphql`
query indexQuery {
  markdownRemark(frontmatter: {pageId: {eq: "Page-Settings"}}) {
    frontmatter {
      title
    }
  }    
}
`;

export default IndexPage;
