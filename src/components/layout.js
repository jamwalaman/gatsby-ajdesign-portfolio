import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import SvgComponent from "./ajd-logo"
import "bootstrap-icons/font/bootstrap-icons.css"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <Navbar expand='lg' className='ajd-nav-header navbar-dark'>
        <Container>
          <Link to='/' className='navbar-brand' title='Home'><SvgComponent /></Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Link to='/portfolio' className='nav-link'>portfolio</Link>
              <Link to='/about' className='nav-link'>about</Link>
              <Link to='/contact' className='nav-link'>contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {location.pathname === rootPath ? (
        children
      ) : (
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={10}>{children}</Col>
          </Row>
        </Container>
      )}

      <footer className='blue-bg p-5' >
        <Container>
          <Row>
            <Col md={6}>
              <Link to='/' className='navbar-brand' title='Home'><SvgComponent /></Link>
              <p className='mt-4'>© {new Date().getFullYear()} | Aman Jamwal Design</p>
              <a href='https://github.com/jamwalaman' target='_blank' rel='noreferrer' title='My GitHub account'><i className='bi bi-github'></i></a>
            </Col>
            <Col md={6}>
              <Link to='/portfolio' className='nav-link'>portfolio</Link>
              <Link to='/about' className='nav-link py-3'>about</Link>
              <Link to='/contact' className='nav-link'>contact</Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )

}

export default Layout
