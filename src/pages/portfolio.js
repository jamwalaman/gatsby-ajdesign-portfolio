import * as React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Image } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioHome = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Row className='work'>
        {data.allMarkdownRemark.nodes.map(work => {
          return (
            <Col md={6} key={work.fields.slug} className='py-5'>
              <Image src={work.frontmatter.featuredimg.publicURL} />
              <h2 className='my-4'>{work.frontmatter.title}</h2>
              <p>{work.frontmatter.description}</p>
              <Link className='px-4 py-2 button' to={work.fields.slug}>View project</Link>
            </Col>
          )
        })}
      </Row>
    </Layout>
  )

}

export default PortfolioHome

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Portfolio" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: {template: {eq:"portfolio"}} }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          featuredimg {
            publicURL
          }
        }
      }
    }
  }
`
