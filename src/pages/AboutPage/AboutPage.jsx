import React, { useEffect } from 'react';
import "./AboutPage.scss";
import Hero from "../../components/Hero/Hero";
import backgroundImage from "../../assets/KoiPondSoft.png";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import MMedia from "../../assets/mmedia-image.jpg";
import MeElementary from "../../assets/me-elementary-sketch.jpg";
import MeSinging from "../../assets/me-singing.jpg";
import MeChild from "../../assets/me-child.jpg";

const AboutPage = () => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const { target } = entry;
                    if (!target.classList.contains('reversed')) {
                        target.classList.add('visible');
                    }
                    if (target.classList.contains('reversed')) {
                        target.classList.add('visible-reversed');
                    }
                    observer.unobserve(target);
                    target.addEventListener('animationend', () => {
                        target.classList.add('animation-ended');
                    }, { once: true });
                }
            });
        };
        

        const observer = new IntersectionObserver(handleIntersection, options);
        document.querySelectorAll('.about__intro-wrapper').forEach((item) => {
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="about">
            <Hero backgroundImage={backgroundImage} text={"About"}/>
            <div className="about__content">
                <h1 className="about__title">About Me</h1>
                <div className='about__intro-wrapper'>
                    <div className='about__mask'>
                        <img className='about__img' src={MeChild} alt="Media"/>
                    </div>
                    <p className="about__paragraph">
                        I'm a software developer born and raised in Toronto. Recently, I received my in computer science with honour from Laurentian University and completed BrainStation's web development program. For the last 3 years, I have also worked as a web developer creating and maintaining elegant and robust websites for startups. Furthermore, I have worked on two different indie game projects in a small team as our resident programmer, sprite artist, designer, and audio engineer.
                    </p>
                </div>
                <div className='about__intro-wrapper reversed'>
                    <p className="about__paragraph">
                        I am deeply passionate about software development, which is why I founded and chaired Laurentian's App and Game Development Club. This experience, coupled with my outgoing nature and team spirit, has helped me excel in collaborative environments.  Beyond my professional life, I have a zest for travel and food; always seeking out new adventures and flavors. In my work, I similarly prioritize the user experience, ensuring that projects not only meet technical requirements but also delight clients and their intended audience.
                    </p>
                    <div className='about__mask'>
                        <img className='about__img' src={MeElementary} alt="Media"/>
                    </div>
                </div>
                <div className='about__intro-wrapper'>
                    <div className='about__mask'>
                        <img className='about__img' src={MeSinging} alt="Media"/>
                    </div>
                    <p className="about__paragraph">
                    As a web developer, I've created websites for small businesses using various technologies, including the popular MERN (MongoDB, Express, React, Node) and SERN (SQL, Express, React, Node) stacks for dynamic, full-stack applications, in addition to standard HTML, PHP, SCSS, MySQL2, NoSQL, and premiere CMSs such as Squarespace, Wix, and Wordpress. 
                        
                    </p>

                </div>
                <div className='about__intro-wrapper reversed'>
                    <p className="about__paragraph">
                        As a game developer, my current project is a Unity-based 2D isometric survivor-like called Rancid Feast. It features vivid, irreverent visuals, engaging fast-paced gameplay, satisfying meta-progression and an infectious soundtrack. We are roughly 2 years into development and it is slated for an early-access release late 2024 on PC. 
                       
                    </p>
                    <div className='about__mask'>
                        <img className='about__img' src={MMedia} alt="Media"/>
                    </div>
                </div>
                <p className="about__final-paragraph"> With a focus on continuous learning and a commitment to innovative solutions, I'm excited to bring my skills and enthusiasm to new challenges in the worlds of web and game development.</p>
            
            </div>
            <hr className="about__divider"/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default AboutPage;
