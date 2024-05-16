import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const page = data.aboutPage

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className='text-center'>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      <ContactForm formWrapper='py-5' formHeading="Flick me a message and let's get the ball rolling" />
    </Layout>
  )
}

export default AboutPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About me" />

export const pageQuery = graphql`
  {

    site {
      siteMetadata {
        title
      }
    }
    aboutPage: markdownRemark(fields: { slug: { eq: "/about/" } }) {
      html
      frontmatter {
        title
      }
    }

  }
`
