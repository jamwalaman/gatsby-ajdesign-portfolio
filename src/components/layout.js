import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import SvgComponent from "./ajd-logo"

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Navbar expand='lg' className='ajd-nav-header mb-5'>
          <Container>
            <Link to='/' className='navbar-brand'>
              <SvgComponent />              
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <Link to='/portfolio' className='nav-link'>portfolio</Link>
                <Link to='/about' className='nav-link'>about</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={9}>{children}</Col>
          </Row>
        </Container>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
