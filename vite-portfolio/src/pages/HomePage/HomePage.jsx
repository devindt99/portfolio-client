import React, { useRef } from 'react';
import headshot from "../../assets/headshot.png"
import fullStack from "../../assets/fullStack3.png"
import gameDev from "../../assets/controller3.png"
import "./HomePage.scss"
import { Link } from 'react-router-dom';
const HomePage = () => {
    const headshotRef = useRef(null);
    const fullStackRef = useRef(null);
    const gameDevRef = useRef(null);

    const handleAnimationEnd = (ref) => {
        console.log("boom");
        ref.current.classList.add('home__animation-ended');
    };

    const addAnimationEndListener = (ref) => {
        const element = ref.current;
        if (element) {
            element.addEventListener('animationend', () => handleAnimationEnd(ref));
        }
    };

    React.useEffect(() => {

        addAnimationEndListener(fullStackRef);
        addAnimationEndListener(gameDevRef);

        return () => {
            if (fullStackRef.current) {
                fullStackRef.current.removeEventListener('animationend', handleAnimationEnd);
            }
            if (gameDevRef.current) {
                gameDevRef.current.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="home">
            <Link to="/about" className="icon-link"><img ref={headshotRef} className="round-icon home__headshot" src={headshot} alt="about-logo"/></Link>
            <Link to="/fullstack" className="icon-link"><img ref={fullStackRef} className="home__full-stack round-icon" src={fullStack} alt="about-logo" /></Link>
            <Link to="/gamedev" className="icon-link"><img ref={gameDevRef} className="home__game-dev round-icon" src={gameDev} alt="about-logo" /></Link>
            <h1 className='home__name'>Devin <span className='home__last-name'>Dellazizzo Toth</span></h1>
        </div>
    );
};

export default HomePage;
