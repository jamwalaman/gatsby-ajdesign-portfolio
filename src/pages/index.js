import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"
import WorkList from "../components/work-list"
import { Container, Row, Col } from "react-bootstrap"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const homePage = data.homePage
  const ctabtns = homePage.frontmatter.ctabtns

  return (
    <Layout location={location} title={siteTitle}>

      <div className='blue-bg pt-2 pb-5'>
        <Container className='content'>
          <Row className='justify-content-md-center'>
            <Col md={9}>
              <h2 className='text-center' dangerouslySetInnerHTML={{ __html: homePage.frontmatter.welcome }} />
              <div className='ctabtns mt-5'>
                {ctabtns.map(btn => {
                  return (
                    <Link className='px-4 py-2' to={btn.link} key={btn.link}>{btn.displaytext}</Link>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <WorkList />

      <ContactForm formWrapper='form-wrapper py-5' formHeading="Got a project in mind? Let's have a quick chat, no obligation" />

    </Layout>
  )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    homePage: markdownRemark(fields: { slug: { eq: "/home/" } }) {
      html
      frontmatter {
        title
        welcome
        ctabtns {
          displaytext
          link
        }
      }
    }
  }
`