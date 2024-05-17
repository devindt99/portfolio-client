import React, { useRef } from "react";
import "./Section.scss"
import "../ExternalLinkIcon/ExternalLinkIcon"
import ExternalLinkIcon from "../ExternalLinkIcon/ExternalLinkIcon";
const Section = React.forwardRef(({ heading, image, paragraph, link }, ref) => {
    return (
        <section className="section" ref={ref}>
            <h1 className="section__heading">{heading}</h1>
            <div className="section__content">
                <img className="section__image" src={image} alt="Inov Partners"/>
                    <div className="section__text"><p className="section__paragraph">{paragraph}
                        <br/><br/>          
                        </p>
                        <a className="section__link" href={link}>
                            Check out {heading}
                            <ExternalLinkIcon/>
                        </a>
                    </div> 
            </div>
        </section>
    );
});

export default Section;
 