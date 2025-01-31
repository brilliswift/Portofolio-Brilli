import React from 'react';
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import {css} from "@emotion/css";



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
        </>
    );
};

export default Homepage;