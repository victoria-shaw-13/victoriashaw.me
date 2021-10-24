//code written based off of tutorial by Brian Design on YT 

import React, {useState} from 'react';
import { imgData } from './imgData';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import './Slider.css';



const Slider =({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? 0 : current - 1)
    }

    console.log(current);

    //if no imge data, returns a null
    if(!Array.isArray(slides) || slides.length <=0){
        return null; 
    }

    return(
       <section className="slider">
        <FaArrowLeft className="left-arrow" onClick = {prevSlide} />
        <FaArrowRight className="right-arrow" onClick = {nextSlide} />
       {imgData.map((slide, index) => {
           return (
           <div className ={index === current ? 'slide active' : 'slide'} 
           key={index}>
               {index === current && (
               <img src= {slide.image} alt= ' ' className = 'image'/>
               )}
           </div>
           );
           
           })}  
        </section>  
    );
};

export default Slider;