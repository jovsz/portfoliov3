import React from 'react';
import './Section.css';
import coverVideo from './Media/video.mp4'
import { infoEnglish } from '../Info';
import profileImg from './Media/profile.jpg';

const Section = () => {
    return (
        <div className="section-container">
            <video className="video-container" src={coverVideo} autoPlay loop muted />
            <div className="info-container">
                <p className="fs-1 fw-bold">{infoEnglish.title}</p>
                <p className="fs-3 fw-light">{infoEnglish.fullName}</p>
            </div>
            <div className="profile-container">
                <img src={profileImg} className="profile-img" alt="Profile" />
            </div>
        </div>
    )
}

export default Section
