import React from 'react';
import './Hero.scss';

const Hero = ({ text, backgroundImage }) => {
    return (
        <div className="hero">
            
            <div className="hero__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}></div>
            <div className="hero__text"><h1>{text}</h1></div>
        
        </div>

    );
}

export default Hero;
