import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import SWAPI1 from "../assets/projects2/SWAPI1.png"
import SWAPI2 from "../assets/projects2/SWAPI2.png"
import SWAPI3 from "../assets/projects2/SWAPI3.png"
import TicTacToe1 from "../assets/projects2/TicTacToe1.png"
import TicTacToe2 from "../assets/projects2/TicTacToe2.png"
import TicTacToe3 from "../assets/projects2/TicTacToe3.png"
import nightSky1 from "../assets/projects2/nightSky1.png"
import nightSky2 from "../assets/projects2/nightSky2.png"
import nightSky3 from "../assets/projects2/nightSky3.png"

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Projects({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    return (
        <Container>

            <Row className="mb-5">
                <Col md={6} className="order-md-1">
                    <h3 className="mt-5">{content.projects.SWAPI.title}</h3>
                    <p>{content.projects.SWAPI.description2}</p>
                    <a href={content.projects.SWAPI.link} target="_blank">{content.projects.linkInfo2}</a>
                </Col>
                <Col md={6} className="order-md-2">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI1} className="carousel-img" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI2} className="carousel-img" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI3} className="carousel-img" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} className="order-md-2">
                    <h3 className="mt-5">{content.projects.ticTacToe.title}</h3>
                    <p>{content.projects.ticTacToe.description2}</p>
                    <a href={content.projects.ticTacToe.link} target="_blank">{content.projects.linkInfo2}</a>
                </Col>
                <Col md={6} className="order-md-1">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe1} className="carousel-img" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe2} className="carousel-img" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe3} className="carousel-img" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row>
                <Col md={6} className="order-md-1">
                    <h3 className="mt-5">{content.projects.nightSky.title}</h3>
                    <p>{content.projects.nightSky.description2}</p>
                    <a href={content.projects.nightSky.link} target="_blank">{content.projects.linkInfo2}</a>
                </Col>
                <Col md={6} className="order-md-2">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky1} className="carousel-img" />

                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky2} className="carousel-img" />

                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky3} className="carousel-img" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>
    )
}