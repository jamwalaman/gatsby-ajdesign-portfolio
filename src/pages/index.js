import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col, Image } from "react-bootstrap"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const homePage = data.homePage
  const featuredWork = data.allMarkdownRemark.nodes
  const ctabtns = homePage.frontmatter.ctabtns

  return (
    <Layout location={location} title={siteTitle}>

      <div className='welcome pt-2 pb-5'>
        <Container className='welcome'>
          <Row className='justify-content-md-center'>
            <Col md={9}>
              <h1 dangerouslySetInnerHTML={{ __html: homePage.frontmatter.welcome }} />
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
      <Container className='work'>
        <Row>
          {featuredWork.map(work => {
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
      </Container>

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
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: {featured: {eq: true}} }
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
