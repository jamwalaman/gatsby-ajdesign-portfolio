import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTitle from "../components/page-title"
import { Container, Row, Col, Image } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

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
                <Col md={10}><Image src={item.mockupImg.publicURL} /></Col>
              </Row>
            </Container>
          </div>
        )
      })}
      <Container className='blue-border'>
        <Row className='work' style={previous ? { justifyContent: 'space-between' } : { justifyContent: 'end' }}>
          {previous && (
            <Col md={4} className='py-5'>
              <Link to={previous.fields.slug} rel='prev' title={previous.frontmatter.title}>
                <Image src={previous.frontmatter.featuredimg.publicURL} className='mb-4' />
                <p><i style={{ marginRight: '0.8rem' }} className='bi bi-chevron-left'></i>{previous.frontmatter.title}</p>
              </Link>
            </Col>
          )}
          {next && (
            <Col md={4} className='py-5'>
              <Link to={next.fields.slug} rel='next' title={next.frontmatter.title}>
                <Image src={next.frontmatter.featuredimg.publicURL} className='mb-4' />
                <p style={{ textAlign: 'right' }}>{next.frontmatter.title}<i style={{ marginLeft: '0.8rem' }} className='bi bi-chevron-right'></i></p>
              </Link>
            </Col>
          )}
        </Row>
      </Container>
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
        featuredimg {
          publicURL
        }
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
        featuredimg {
          publicURL
        }
      }
    }
  }
`
