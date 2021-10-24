import React from 'react';
import '../../App.css';
import './Resume.css';
import pdf from '../../Victoria_resume_8_8.pdf';


function Resume() {
  return(
    <div classname='resume'>
      <div classname='link'>
        <a href = {pdf} target = "_blank" rel="noreferrer" >PDF</a>
      </div>
      i am confused 
    </div>
  )
}

export default Resume; 