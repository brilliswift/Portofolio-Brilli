import React from 'react';
import styles from '../styles';
import { css } from '@emotion/css';

const Hero = () => (
    <>
        <div className={css`
            padding: 2rem;
             
        `}>
            <div className="text-center text-white font-poppins text-5xl">
                <h2 className={`${styles.heading2} leading-[20px] tracking-tighter font-weight: 900`}>
                    I do code and
                    <br />
                    love to project
                    <span className="mx-2">
            <span
                className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
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