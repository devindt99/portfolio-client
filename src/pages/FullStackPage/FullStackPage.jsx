import React from 'react';
import PageComponent from '../../components/PageComponent/PageComponent';
import backgroundImage from "../../assets/Iceberg.jpeg";

import projectsData from '../../data/fullStack.json';
const FullStackPage = () => {


    return (
        <PageComponent
            title="Web Dev"
            intro="Are you a startup or business owner looking to build a unique online presence that reflects your brand's identity without costly monthly fees? I provide web development services tailored to your needs, ensuring your website stands out."
            projects={projectsData.projects}
            backgroundImage={backgroundImage}
        />
    );
};

export default FullStackPage;
