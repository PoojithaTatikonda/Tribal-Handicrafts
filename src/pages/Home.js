import React from 'react';
import SignIn from '../components/SignIn';
import './Home.css';
//import backgroundImage from '../assets/backgroundimage2.jpg'

const Home = () => {
  
  return (

    <div className="home">
      <div className="signin-container">
        <SignIn />
      </div>
      <div className="ad-image">
        <img src = "https://lsmedia.linker-cdn.net/282256/2021/7131317.jpeg?d=400x400" alt="Ad" />
      </div>
    </div>
    
  );
};

export default Home;
