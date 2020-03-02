import React from "react";

import { Banner, Services, Contact, Portrait } from "../share";
import Layout from "../layouts";

import "./index.scss";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <div className="page page--home">
        <Banner title={frontmatter.title} />
        <Services
          services={frontmatter.services.map(item => ({ text: item.service }))}
        />
        <Portrait
          quote={frontmatter.quote}
          credit={frontmatter.credit}
          positions={frontmatter.positions.former.map(item => item.position)}
        />
        <p className="page__recommendation">Recommendations upon request.</p>
        <Contact
          contactEmail={frontmatter.contactEmail}
          contactName={frontmatter.contactName}
          contactNumber2={frontmatter.contactNumber2}
          contactPersonalEmail={frontmatter.contactPersonalEmail}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { pageId: { eq: "Page-Settings" } }) {
      frontmatter {
        title
        quote
        credit
        positions {
          former {
            position
          }
        }
        services {
          service
        }
        contactEmail
        contactName
        contactNumber
        contactNumber2
        contactPersonalEmail
      }
    }
  }
`;

export default IndexPage;
