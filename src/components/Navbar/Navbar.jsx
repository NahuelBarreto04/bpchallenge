import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Header = styled.header`
    width:100%;
    height: 6rem;
    background-color: #DB7092;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`
const NavbarComp = styled.nav`
    & ul{
       color: white;
       height: 100%;
       display: flex;
       align-items: center;
       gap: 1rem;

    }
`
export const LinkItem = styled(NavLink)`
  font-size: 2rem;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Koulen', cursive;
  &.active {
    /* color: green; */
    text-shadow: -4px -1px 0px rgba(253, 101, 132, 1);
    /* text-shadow:10px 10px 0px solid #FD6584; */
  };
 `

const Logo = styled.div`
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span{
  font-size: 2rem;
  font-family: 'Koulen', cursive;
  color: #ffffff;
  cursor: pointer;
}
& span:active {
  color:#FD6584;
  };

    
`


export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Header>
      <Logo onClick={() => navigate("/")}><span>Home</span></Logo>
      <NavbarComp>
        <ul>
          <LinkItem to={"idols"}>Idols</LinkItem>
          <LinkItem ><s>Songs</s></LinkItem>
        </ul>
      </NavbarComp>
    </Header>
  )
}
