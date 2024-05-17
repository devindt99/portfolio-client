import React, { useEffect, useRef } from 'react';
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import 'intersection-observer';
import "./PageComponent.scss"
const PageComponent = ({ title, intro, projects, backgroundImage }) => {
    const sectionRefs = useRef([]);
    
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const handleAnimationEnd = (ref) => {
        ref.current.classList.add('animation-ended');
    };

    const addAnimationEndListener = (ref) => {
        if (ref.current) {
            ref.current.addEventListener('animationend', () => handleAnimationEnd(ref));
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Trigger when 50% of the section is visible
        });
    
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.observe(section);
        });
    
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        sectionRefs.current.forEach(ref => addAnimationEndListener(ref));
    }, []);

    return (
        <div className="page">
            <Hero backgroundImage={backgroundImage} text={title} />
            <div className='page__intro'>
                <h1 className='page__title'>{title}</h1>
                <p>{intro}</p>
            </div>
            <hr className='page__divider'/>
            <h2 className='page__subtitle'>Previous Projects</h2>
            {projects.map((project, index) => {
                const ref = useRef(null);
                sectionRefs.current[index] = ref;
                return (
                    <Section 
                        ref={ref}
                        key={index}
                        heading={project.heading} 
                        image={project.image}
                        link={project.link} 
                        paragraph={project.paragraph.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    />
                );
            })}
            <Footer/>
        </div>
    );
};

export default PageComponent;
