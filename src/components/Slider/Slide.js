import React from 'react'
import proyect_1 from './Media/project_1.png'
import proyect_2 from './Media/project_2.png'
import proyect_3 from './Media/project_3.png'
import proyect_4 from './Media/project_4.png'
import proyect_5 from './Media/project_5.png'
import proyect_6 from './Media/project_6.png'
import proyect_7 from './Media/project_7.png'
import proyect_8 from './Media/project_8.png'
import proyect_9 from './Media/project_9.png'
import proyect_10 from './Media/project_10.png'
import './Slider.css'



const slidesInfo = [
    {
        src: proyect_1,
        alt: 'To Do List',
        url: 'https://jvz-todo-list.netlify.app',
        desc: 'This is a CRUD project built on the reaction frame. This project was created with the following libraries: hook from, axios, useEffect, useState.'
    },
    {
        src: proyect_2,
        alt: 'Rick & Morty',
        url: 'https://jvs-rick-and-morty.netlify.app',
        desc: 'In this project an Api was used to obtain the characters according to their number of inhabitants.',
    },
    {
        src: proyect_3,
        alt: 'Weather App',
        url: 'https://agitated-mirzakhani-55228f.netlify.app',
        desc: 'The project Weather app were built using geolocation library to get the geolocation of each user and then it could display the current weather from that location',
    },
    {
        src: proyect_4,
        alt: 'Qoutes App',
        url: 'https://elastic-brown-e09436.netlify.app',
        desc: 'This is a simple app, it principal function is display a random Quotes becoming from an API',
    },
    {
        src: proyect_5,
        alt: 'My 1st PortFolio',
        url: 'https://jovannyfuentes.netlify.app',
        desc: 'that where my 1st portfolio using only html, css & a little code of javascript',
    },
    {
        src: proyect_6,
        alt: 'OpenTrivia',
        url: 'https://apiopen-trivia.netlify.app',
        desc: 'This is an App built on vanilla JavaScript, it principal funcion, it is get the questions and answers from the API and then compare both answers and get the a final score',
    },
    {
        src: proyect_7,
        alt: 'Crud js',
        url: 'https://crud0-javascript.netlify.app/',
        desc: 'A simple Crud app built on pure javascript Vanilla',
    },
    {
        src: proyect_8,
        alt: 'Pokedex',
        url: 'https://poke-app-v2.netlify.app/',
        desc: 'The pokedex App is to obtain the information of each pokemon and then it will display, it depending on the query that user make',
    },
    {
        src: proyect_9,
        alt: 'SUA',

        desc: 'It is an application were built with node.js & ejs, its main function is to register and unblock domain users in windows server active directory',
    },
    {
        src: proyect_10,
        alt: 'Yomi',
        url: 'https://yom1.netlify.app',
        desc: 'This is a simple app, its principal function is display the movie that you search coming from an API and then you have the option to add as favorite or delete it',
    },
];

const slides = slidesInfo.map(slide =>(
    <div className='slide-container'>
        <a href={slide.url} rel="noreferrer" target='_blank'>
        <img src={slide.src} alt={slide.alt} /></a>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
        
    </div>
));

export default  slides;