import React from 'react';
import {css} from "@emotion/css";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";



const Homepage = () => {
    return (
        <>
            <div className={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
            `}>
            <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center">
                Profil
            </div>
            </div>
            <Hero />
            <About />
            <Project />
            <Experience/>
        </>
    );
};

export default Homepage;