import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/contact-form"
import PageTitle from "../components/page-title"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const page = data.aboutPage

  return (
    <Layout location={location} title={siteTitle}>
      <Container className='content'>
        <Row className='justify-content-md-center'>
          <Col md={10}>
            <PageTitle title={page.frontmatter.title} />
            <section className='text-center' dangerouslySetInnerHTML={{ __html: page.html }} />
            <ContactForm formWrapper='py-4' />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Contact' />

export const pageQuery = graphql`
  {

    site {
      siteMetadata {
        title
      }
    }
    aboutPage: markdownRemark(fields: { slug: { eq: "/contact/" } }) {
      html
      frontmatter {
        title
      }
    }

  }
`
