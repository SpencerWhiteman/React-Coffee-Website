import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
     Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks,
     NavBtn,
     NavBtnLink
    } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>daily cup</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"> Discover </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="brewing"> Brewing </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="equipment"> Equipment </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
