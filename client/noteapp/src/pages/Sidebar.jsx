import React from 'react'
import styled from 'styled-components'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";

  import { FaList, FaRegHeart } from "react-icons/fa";
  import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
  import { RiPencilLine } from "react-icons/ri";
  import { BiCog } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    height: 100vh;
    width: 200px;
    position: fixed;
    background-color: #375bc0;
    @media (max-width: 640px) {
        width: 60px;
      }
`
const LinkWrapper = styled.div`
    position: relative;
    top: 60px;
    padding: 12px;
`
const LinkItem = styled(Link)`
     text-decoration: none;
     display: block;
     border: 1px solid white;
     margin: 10px 0;
     padding: 5px 5px;
     color: white;
  &:hover {
    color: #3cd2f8;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  
`
const Sidebar = () => {
  return (
    <Wrapper>
        <LinkWrapper>
        <LinkItem to={`/create-note`}>Create Note</LinkItem>
        <LinkItem to={`/my-notes`}>My Notes</LinkItem>        
        
        </LinkWrapper>
    </Wrapper>
  )
}

export default Sidebar