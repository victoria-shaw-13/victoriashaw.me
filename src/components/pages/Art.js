import React from 'react';
import '../../App.css';
import Slider from '../../components/Slider';
import { imgData } from '../../components/imgData';
import '../../components/pages/Art.css';

function Art() {
  return (
  <div className = 'artwork'> 
    Check out some of my artwork! 
    <Slider slides={imgData}></Slider>
  </div>

  );
}

export default Art; 