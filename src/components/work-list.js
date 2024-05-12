import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

const WorkList = () => {

    const data = useStaticQuery(graphql`
    query WorkQuery {
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
    }
  `)
    return (
        <Container className='work'>
            <Row>
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
        </Container>
    )

}

export default WorkList
