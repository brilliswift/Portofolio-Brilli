import React from 'react';
import styles from "../styles";

function Hero() {
    return (
        <div className="text-center text-white font-poppins font-extrabold  text-5xl">
            <h2 className={styles.heading2}>I do code and love to projects
                <span className="mx-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            about it
          </span>
        </span>
            </h2>
        </div>
    );
};

export default Hero;