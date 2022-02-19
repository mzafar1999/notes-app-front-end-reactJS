import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkItem = styled(Link)`
    text-decoration: none;
    margin: 0 15px;
    color: white;
    &:hover{
        color:#7e7e7e;
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
        <LinkItem to='/register'>
          Register
        </LinkItem>
       
        <LinkItem to='/login'>
          Log In
        </LinkItem>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar