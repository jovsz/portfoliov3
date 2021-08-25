import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css';
import Slide from './Slide';


const Slider = () => {
    

    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>
            <Carousel
                plugins={['arrows', 'infinite','centered', 'autoPlay']}
                slidesPerPage={2}
                
                animationSpeed={200}
                offset={20}
                itemWidth={425}
                slides={Slide}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        arrows: false,
                        offset: 1,
                        itemWidth: 250,
                    },
                }}
            />   
        </div>
    )
}


export default Slider;
