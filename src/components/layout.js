import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
      <header className="global-header">{header}</header>
      <main>
        <Navbar expand="lg">
          <Container>
            <Link to='/' className='navbar-brand'>Aj desgin</Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="me-auto">
                <Link to='/portfolio' className='nav-link'>Portfolio</Link>
                <Link to='/about' className='nav-link'>About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
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
