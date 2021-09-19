import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {projects} from './Projects';
import './Slider.css';



const Slideshow = () => {
    return (
        <div className="main-slider-container">
            <div className="slider-title">
                <h3>My projects</h3>
            </div>
            <div className="slide-container">
                <Slide class="rounded">
                {projects.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.src})`}}>
                        <span><a href={slideImage.url} target="_blank" rel="noreferrer" >{slideImage.alt}</a></span>
                    </div>
                    </div>
                ))}
                </Slide>
            </div>
        </div>
    )
};

export default Slideshow;