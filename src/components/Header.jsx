import React,{useState} from 'react'
import styled from 'styled-components'
import { Container } from '../../globalStyle'
import { Link } from 'react-router-dom';
import { FaMagento,FaTimes,FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  background:#101522;
  height:80px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:1.2rem;
  position:sticky;
  top:0;
  color:red;
  z-index:999;
`
const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
height:80px;


${Container}
`

const NavLogo = styled(Link)`
  color:#fff;
  cursor:pointer;
  text-decoration:none;
  font-size:2rem;
  display:flex;
  align-items:center;
  justify-self:flex-start;
`

const NavIcon = styled(FaMagento)`
  margin-right:0.5rem;
`
const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
  display:block;
  position:absolute;
  top:5px;
  right:0;
  transform:translate(-100%, 60%);
  font-size:1.8rem;
  cursor:pointer;
}
`

const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;

  @media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position:absolute;
    top:80px;
    left:${({click}) => (click ? 0 : '-100%')}
    opacity:1;
    transition:all 0.5s ease;
    background:purple;
  }
`

const NavItem = styled.li`
  height:80px;
  border-bottom:2px solid transparent;

  &:hover{
    border-bottom:2px solid #4b59f7;
  }
  @media screen and(max-width:960px){
    width:100%;
    &:hover{
      border:none
    }
  }
`

const NavLinks = styled(Link)`
  color:#fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding:0.5rem 1rem;
  height:100%;

  @media screen and (max-width:960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;

    &:hover{
      color:#4b9f7;
      transition:all 0.3s ease;
    }
  }
`

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
      <NavbarContainer>
       <NavLogo to="/">
          <NavIcon/>
          ULTRA
       </NavLogo>
       <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
       </MobileIcon>
       <NavMenu onClick={handleClick} click={click}>
          <NavItem>
              <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to="/">Home</NavLinks>
          </NavItem>
       </NavMenu>
       </NavbarContainer>
      </Nav>
    </>
  )
}

export default Header;