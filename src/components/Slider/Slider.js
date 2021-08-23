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
                plugins={['arrows']}
                slidesPerPage={3}
                animationSpeed={200}
                centered={true}
                offset={1}
                itemWidth={400}
                slides={Slide}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        arrows: false,
                        offset: 1,
                        centered: true,
                        itemWidth: 680,
                    },
                }}
            />   
        </div>
    )
}


export default Slider;
