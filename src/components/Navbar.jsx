import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

// Modern, oval, sticky navbar container
const NavContainer = styled.nav`
    position: sticky;
    top: 20px;
    z-index: 100;
    background: #222222;
    color: #ffffff;
    padding: 16px 40px;
    height: 70px;
    max-width: 700px;
    margin: 0 auto 40px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: bold;
    border-radius: 40px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    border: 2px solid #393939;
    backdrop-filter: blur(3px);
`;

const Logo = styled.img`
    width: 42px;
    height: 42px;
    object-fit: contain;
    border-radius: 50%;
    background: #fff;
`;

const Links = styled.div`
    display: flex;
    gap: 32px;
`;

// Modern, pill-style link, with active route style
const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    text-decoration: none;
    padding: 6px 18px;
    border-radius: 24px;
    transition: background 0.2s, color 0.2s;
    &.active {
        background: #b746f1;
        color: #fff;
    }
    &:hover {
        background: #393939;
        color: #b746f1;
    }
`;

const Navbar = () => (
    <NavContainer>
        <Link to="/">
            <Logo alt="Logo" src="/logo192.png" />
        </Link>
        <Links>
            <StyledNavLink to="/" end>Home</StyledNavLink>
            <StyledNavLink to="/project">Project</StyledNavLink>
            <StyledNavLink to="/experience">Experience</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
        </Links>
    </NavContainer>
);

export default Navbar;