import React from 'react';
import '../../App.css';
import './Home.css';


function Home() {
   return(
       <div className='home'> 
        <div className='home-intro'>
           <h1>Hello!</h1>
           <p>My name is Victoria Shaw! I'm a Dartmouth '24 from the Boston area.
            </p>
        </div>
        <div className='photo'>
            <img src={process.env.PUBLIC_URL + '/images/IMG_7090.JPG'} alt = " " />
        </div>
       </div>
   );
}

export default Home; 