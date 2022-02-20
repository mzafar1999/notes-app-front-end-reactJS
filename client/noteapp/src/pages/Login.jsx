import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from "../redux/userReducers";

const Button = styled.button`
  margin-top: 0.8rem;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.3rem;
`;
const Wrapper = styled.div`
 margin: auto;
  position: relative;
  top: 200px;
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

const BASE_URL = 'http://localhost:5000/api/'
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

const login = async(dispatch, user) => {
  dispatch(loginStart())
  try {
      const res = await publicRequest.post('/users/login', user)
      dispatch(loginSuccess(res.data))
  } catch (error) {
      dispatch(loginFailure())
  }
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handleLogin = (e)=>{
      e.preventDefault()
      login(dispatch,{email,password})
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
