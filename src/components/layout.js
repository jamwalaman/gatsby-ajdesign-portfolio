import * as React from "react"
import { Link } from "gatsby"
import {Navbar, Nav, Container} from 'react-bootstrap'
import SvgComponent from "./ajd-logo"

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar expand='lg' className='ajd-nav-header'>
        <Container>
          <Link to='/' className='navbar-brand'>
            <SvgComponent />              
          </Link>
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
      {children}
      <Container>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Container>
    </div>
  )
  
}

export default Layout
