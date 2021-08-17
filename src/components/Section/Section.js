import React from 'react';
import './Section.css';
import coverVideo from './Media/video.mp4'

const Section = () => {
    return (
        <div className="section-container">
            <video className="video-container" src={coverVideo} autoPlay loop muted />
            
        </div>
    )
}

export default Section
