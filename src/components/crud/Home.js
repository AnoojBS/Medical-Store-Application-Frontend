import React from 'react';
import Navbar from '../Navbar';
import HomeMedicine from './HomeMedicine';
import coverImage from '../image/coverpic.jpg';
import "../crud/Home.css"
import Footer from './Footer';



function Home() {
  return (
    <div>
    
      <Navbar />
      {/* <HomeMedicine/> */}
      <div className="cover">
        <img  className='coverimage' src={coverImage} alt="Background" />
      </div>
      <Footer/>
    </div>
    
  );
}

export default Home;
