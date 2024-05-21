import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTitle from "../components/page-title"
import { Container, Row, Col, Image } from "react-bootstrap"

const PortfolioPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location, }) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Link to="/portfolio" className='portfolio-link'>my work </Link>
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={10}><PageTitle title={post.frontmatter.title} /></Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className='mb-3'><p className='text-center'>{post.frontmatter.description}</p></Col>
        </Row>
      </Container>
      <a className='website-link px-4 py-2' href={post.frontmatter.link} target='_blank' rel='noreferrer' title={post.frontmatter.title}>visit website</a>
      {post.frontmatter.webMockup.map((item, index) => {
        return (
          <div key={index} className={index === 0 ? 'work' : null} style={{ backgroundColor: item.bgColour, padding: '4rem 0' }}>
            <Container>
              <Row className='justify-content-md-center'>
                <Col md={10}><Image src={item.mockupImg.publicURL} style={{ width: '100%' }} /></Col>
              </Row>
            </Container>
          </div>
        )
      })}
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        link
        webMockup {
          bgColour
          mockupImg {
            publicURL
          }
        }
      }
    }
    previous: markdownRemark(
      id: { eq: $previousPostId }
      frontmatter: { template: { eq: "portfolio" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }
      frontmatter: { template: { eq: "portfolio" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
