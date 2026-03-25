import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import SWAPI1 from "../assets/projects/SWAPI1C.png"
import SWAPI2 from "../assets/projects/SWAPI2C.png"
import SWAPI3 from "../assets/projects/SWAPI3C.png"
import TicTacToe1 from "../assets/projects/TicTacToe1C.png"
import TicTacToe2 from "../assets/projects/TicTacToe2C.png"
import TicTacToe3 from "../assets/projects/TicTacToe3C.png"
import nightSky1 from "../assets/projects/nightSky1C.png"
import nightSky2 from "../assets/projects/nightSky2C.png"
import nightSky3 from "../assets/projects/nightSky3C.png"

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Projects({ language, mode }) {
    let content = language === "PL" ? contentPL : contentEN;
    const textClass = mode === "dark" ? "text-light" : "";
    const subtitleClass = mode === "dark" ? "text-light opacity-50" : "text-secondary";

    return (
        <Container>

            <Row className="mb-5">
                <Col md={6} className="order-md-1">
                    <h3 className="mt-5">{content.projects.SWAPI.title}</h3>
                    <p>{content.projects.SWAPI.description2}</p>
                    <a href={content.projects.SWAPI.link} target="_blank" rel="noopener noreferrer">{content.projects.linkInfo}</a>
                </Col>
                <Col md={6} className="order-md-2">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI1} className="carousel-img" alt="Star Wars API – widok tabeli postaci" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI2} className="carousel-img" alt="Star Wars API – widok tabeli planet" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={SWAPI3} className="carousel-img" alt="Star Wars API – szczegóły rekordu" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} className="order-md-2">
                    <h3 className="mt-5">{content.projects.ticTacToe.title}</h3>
                    <p>{content.projects.ticTacToe.description2}</p>
                    <a href={content.projects.ticTacToe.link} target="_blank" rel="noopener noreferrer">{content.projects.linkInfo}</a>
                </Col>
                <Col md={6} className="order-md-1">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe1} className="carousel-img" alt="React Tic-Tac-Toe – plansza gry" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe2} className="carousel-img" alt="React Tic-Tac-Toe – w trakcie gry" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={TicTacToe3} className="carousel-img" alt="React Tic-Tac-Toe – historia ruchów" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row>
                <Col md={6} className="order-md-1">
                    <h3 className="mt-5">{content.projects.nightSky.title}</h3>
                    <p>{content.projects.nightSky.description2}</p>
                    <a href={content.projects.nightSky.link} target="_blank" rel="noopener noreferrer">{content.projects.linkInfo}</a>
                </Col>
                <Col md={6} className="order-md-2">
                    <Carousel interval={null}>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky1} className="carousel-img" alt="Night Sky – gwieździste niebo" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky2} className="carousel-img" alt="Night Sky – konstelacje" />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-slide">
                            <img src={nightSky3} className="carousel-img" alt="Night Sky – widok ogólny" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <hr className="my-5" />

            <Row className="g-4">
                {[content.projects.qaDashboard, content.projects.ecommerceTrailers, content.projects.wordle].map((project) => (
                    <Col md={4} xs={12} key={project.title} className="d-flex">
                        <Card className={`w-100 project-card ${mode === "dark" ? "bg-dark text-light" : "bg-white"}`}>
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <Card.Title as="h5" className={textClass}>{project.title}</Card.Title>
                                    {(() => {
                                        const isCommercial = project.category.toLowerCase().includes('komercyjny') || project.category.toLowerCase().includes('commercial');
                                        return (
                                            <Badge
                                                bg="primary"
                                                className="project-type-badge ms-2 flex-shrink-0"
                                                style={isCommercial ? { backgroundColor: '#f59e0b', color: '#1a1d23' } : {}}
                                            >
                                                {project.category.split(" | ")[0]}
                                            </Badge>
                                        );
                                    })()}
                                </div>
                                <small className={`${subtitleClass} mb-3`}>{project.tech}</small>
                                <Card.Text className={textClass}>{project.description2}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    )
}