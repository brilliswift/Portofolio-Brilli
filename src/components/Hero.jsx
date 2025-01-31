import React from 'react';
import styles from '../styles';
import { css } from '@emotion/css';

const Hero = () => (
    <>
        <div className={css`
            padding: 2rem;
             
        `}>
            <div className="text-center text-white font-poppins font-extrabold text-5xl">
                <h2 className={`${styles.heading2} leading-[20px] tracking-tighter`}>
                    I do code and
                    <br />
                    love to projects
                    <span className="mx-2">
            <span
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              about it!
            </span>
          </span>
                </h2>
            </div>
        </div>
    </>
);

export default Hero;