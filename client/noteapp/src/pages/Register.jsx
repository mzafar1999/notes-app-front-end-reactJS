import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  margin-top: 0.8rem;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.3rem;
`;
const Wrapper = styled.div`
  margin: 2rem auto;
  width: 400px;
  display: flex;
  flex-direction: column;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #909090;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswowrd, setConfirmPasswowrd] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  const newUser =
        {
            username,
            email,
            password,
            confirmPasswowrd,
          }
  };
  return (
    <Container>
      <Wrapper>
        <Input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPasswowrd(e.target.value)}
          value={confirmPasswowrd}
        />
        <Button className="btn btn-primary" onClick={handleSubmit}>
          {" "}
          Register{" "}
        </Button>
        <p>
          Already have account? <LinkItem to={`/login`}>Login</LinkItem>{" "}
        </p>
      </Wrapper>
    </Container>
  );
};

export default Register;
