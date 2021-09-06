import React from 'react'
import "./About.css"
import { infoEnglish } from '../Info';
import aboutPicture from './media/about-img.jpeg';

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>{infoEnglish.aboutMe}</p>
                <p>{infoEnglish.knowledge}</p>
                <p>{infoEnglish.experience}</p>
            </div>
            <div className="about-img">
                <img src={aboutPicture} alt="about"/>
            </div>
        </div>
    )
}

export default About;
