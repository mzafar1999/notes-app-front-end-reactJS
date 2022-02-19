import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
    color: #808080;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async(e)=>{
      e.preventDefault()
      const res = await axios.post('http://localhost:5000/api/users/login',{email,password})
  }

  return (
    <Container>
      <Wrapper>
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <Button onClick={handleLogin} className="btn btn-primary"> Login </Button>
        <p>
          Don't have account? <LinkItem to={`/register`}>Register</LinkItem>{" "}
        </p>
      </Wrapper>
    </Container>
  );
};

export default Login;
