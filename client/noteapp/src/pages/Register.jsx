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
        color:#909090;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Register = () => {
  return (
        <Container>
           <Wrapper>
           <Input placeholder='Username' />
           <Input placeholder='Email' />
            <Input placeholder='Password' type='password' />
            <Input placeholder='Confirm Password' type='password' />
            <Button className='btn btn-primary'> Register </Button>
            <p>Already have account? <LinkItem to={`/login`}>Login</LinkItem> </p>
           </Wrapper>
        </Container>
    )
}

export default Register