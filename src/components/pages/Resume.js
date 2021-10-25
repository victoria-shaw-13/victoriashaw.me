import React from 'react';
import '../../App.css';
import pdf from '../../Victoria_resume_8_8.pdf';
import '../../components/pages/Resume.css';


function Resume() {
  return(
    <div classname='resume'>
      <div classname='link'>
        <a href = {pdf} target = "_blank" rel="noreferrer" >PDF</a>
      </div>
    </div>
  )
}

export default Resume; 