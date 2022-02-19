import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/userReducers";

const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 0 15px;
  color: white;
  &:hover {
    color: #7e7e7e;
  }
`;
const NavBar = () => {

  const logoutUser = (dispatch) => {
    dispatch(logout())
  }
  
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()
  const logoutHandler = (e)=>{
    e.preventDefault()
    logoutUser(dispatch)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <LinkItem to={`/`}>Notes</LinkItem>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {user ? <LinkItem to='/' onClick={logoutHandler}> Log out  </LinkItem> : <LinkItem to="/register">Register</LinkItem>}

            {user ? <LinkItem to='/userinfo'>{user.username}</LinkItem> : <LinkItem to="/login">Log In</LinkItem>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
