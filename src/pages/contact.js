import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const page = data.aboutPage

  return (
    <Layout location={location} title={siteTitle}>
      <div className='page-title'>
        <h1 className='text-center'>{page.frontmatter.title}</h1>
        <div className='headline-rule'></div>
      </div>
      <section className='text-center' dangerouslySetInnerHTML={{ __html: page.html }} />
      <ContactForm formWrapper='py-4' />
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
