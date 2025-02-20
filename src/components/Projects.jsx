import { useState } from "react";
import { Carousel, Form } from "react-bootstrap";

import SWAPI from '../assets/projects/SWAPISmall.png';
import TicTacToe from '../assets/projects/TicTacToeSmall.png';
import nightSky from '../assets/projects/nightSkySmall.png';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Projects({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const slides = [
        { title: content.projects.SWAPI.title, description: content.projects.SWAPI.description },
        { title: content.projects.ticTacToe.title, description: content.projects.ticTacToe.description },
        { title: content.projects.nightSky.title, description: content.projects.nightSky.description },
    ];

    console.log("link: ", slides[activeIndex].link)

    return (
        <>
            <h2 className="text-center">{slides[activeIndex].title}</h2>
            <p className="text-center">{slides[activeIndex].description} <a href={slides[activeIndex].link} target="_blank">Link do repozytorium GitHub</a></p>

            <div className="d-flex justify-content-center aling-items-center mb-1">
                <div className={mode == "dark" ? "bg-info rounded" : "bg-danger rounded"}>
                {slides.map((slide, index) => (
                    <Form.Check
                        inline
                        key={index}
                        name="carousel-radio"
                        type="radio"
                        checked={activeIndex === index}
                        onChange={() => setActiveIndex(index)}
                        className="mx-4"
                    />
                ))}
                </div>
            </div>

            <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} controls={false} indicators={false}>
                <Carousel.Item className="carousel-slide">
                    <div className="carousel-bg">
                        <img src={SWAPI} alt="Star Wars API" className="carousel-img"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-slide">
                    <div className="carousel-bg">
                        <img src={TicTacToe} alt="Tic Tac Toe" className="carousel-img"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-slide">
                    <div className="carousel-bg">
                        <img src={nightSky} alt="Night Sky" className="carousel-img"/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}