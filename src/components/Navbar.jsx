import React from 'react';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


const NavContainer = styled.nav`
    background: #222222;
    color: #ffffff;
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`;

const Navbar = () => {
    return (
        <NavContainer>
            <div>
                <Link to="/" className="flex items-center">
                    <img className="w-8 h-8 mr-2" alt="Logo" src=" " />
                </Link>
            </div>
            <div className="flex space-x-10">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/project" className="mr-4">Project</Link>
                <Link to="/experience" className="mr-4">Experience</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </NavContainer>
    );
};

export default Navbar;