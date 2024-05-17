import React from 'react';
import PageComponent from '../../components/PageComponent/PageComponent';
import backgroundImage from "../../assets/Nova.jpeg";
import projectsData from '../../data/gameDev.json';
const GameDevPage = () => {


    return (
        <PageComponent
            title="Game Dev"
            intro="As a game enthusiast, I build the sorts of projects I would love to play. I am committed to crafting an engaging player experience. If you are a developer, artist, producer, or gamer I would love to hear from you!"
            projects={projectsData.projects}
            backgroundImage={backgroundImage}
        />
    );
};

export default GameDevPage;
