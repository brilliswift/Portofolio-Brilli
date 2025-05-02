import React from 'react';
import {css} from "@emotion/css";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
import { profile } from "../assets/index.js";


const Homepage = () => {
    return (
        <>
            <div className={css`
                display: flex;
                align-items: center;
                justify-content: center;
            `}>
                <div className="bg-gray-300 rounded-full flex items-center justify-center h-28 w-28 shadow-lg shadow-gray-500">
                    <img src={profile} alt="my profile" className="h-28 scale-110 relative left-4 bottom-2"/>
                </div>
            </div>
            <Hero/>
            <About/>
            <Project/>
            <Experience/>
        </>
    );
};

export default Homepage;