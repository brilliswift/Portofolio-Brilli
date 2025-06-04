import React from 'react';
import styles from '../styles';
import {css} from "@emotion/css";
import styled from '@emotion/styled'


const color = 'white'

const Button = styled.button`
    padding: 3px;
    height: 40px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C5C5C5;
    font-size: 14px;
    border-radius: 25px;
    font-weight: bold;
    &:hover {
    color: white;
  }
`

const About = () => {
    return (
        <>
            <div className="flex flex-col text-center">
                <p className={`${styles.paragraph}`}>
                    I am a full-stack developer with 1 year of experience
                </p>
                <p className={`${styles.paragraph}`}>
                    specializing in front-end and back-end development.
                </p>
                <p className={`${styles.paragraph}`}>
                    My expertise lies in crafting robust collaboration team and
                </p>
                <p className={`${styles.paragraph}`}>
                    foundation on the Google Cloud Platform.
                </p>
                <div
                    className={css`
                            padding: 48px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                    `}
                >
                    <div
                        className={css`
                            margin-top: 2rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: grey;
                        `}
                    >
                        <Button>Get in touch</Button>
                    </div>
                    <div
                        className={css`
                            margin-top: 2rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: grey;
                        `}
                    >
                        <Button>Download CV</Button>
                    </div>
                </div>
                </div>
        </>
    );
};
export default About;