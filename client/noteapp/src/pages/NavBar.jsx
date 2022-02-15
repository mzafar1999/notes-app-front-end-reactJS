import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkItem = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        color:#6e6e6e;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand> <LinkItem to={`/`}>Notes</LinkItem> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link>
        <LinkItem to='/register' style={{ textDecoration: 'none',color:'white' }}>
          Register
        </LinkItem>
        </Nav.Link>
        <Nav.Link>
        <LinkItem to='/login' style={{ textDecoration: 'none',color:'white' }}>
          Log In
        </LinkItem>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar