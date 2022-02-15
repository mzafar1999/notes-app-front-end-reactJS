import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled.button`
    margin-top:0.8rem
`;

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.3rem;
`
const Wrapper = styled.div`
    margin: 2rem auto;
    width: 400px;
    display: flex;
    flex-direction: column;
`
const LinkItem = styled(Link)`
    text-decoration: none;
    &:hover{
        color:#808080;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Login = () => {
  return (
        <Container>
           <Wrapper>
           <Input placeholder='Username/Email' />
            <Input placeholder='Password' type='password' />
            <Button className='btn btn-primary'> Login </Button>
            <p>Don't have account? <LinkItem to={`/register`}>Register</LinkItem> </p>
           </Wrapper>
        </Container>
    )
}

export default Login