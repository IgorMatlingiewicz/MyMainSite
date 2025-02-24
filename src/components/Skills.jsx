import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from './Skill';
import { useState } from 'react'

import logoCSS from '../assets/CSS.svg'
import logoCPP from '../assets/CPP.svg'
import logoHtml from '../assets/HTML.svg'
import logoPython from '../assets/Python.svg'
import logoJS from '../assets/JS.svg'
import logoSQL from '../assets/SQL.svg'
import logoReact from '/assets/React.svg'

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Skills({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    const [field, setField] = useState("Frontend");

    function handleClick(field) {
        if (field == "F") {
            setField("Frontend")
        } else {
            setField("Backend")
        }
    }

    return (
        <>
            <Container>
                <Row className="mb-3">
                    <Col className='d-flex justify-content-center'>
                        <Button className='mx-5' variant={field == "F" ? "warning" : "outline-warning"} active={field === "Frontend"} onClick={() => handleClick("F")}><h4>Frontend</h4></Button>
                        <Button className='mx-5' variant={field == "B" ? "warning" : "outline-warning"} active={field === "Backend"} onClick={() => handleClick("B")}><h4>Backend</h4></Button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="d-flex align-items-stretch">
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill mode={mode} title={field == "Frontend" ? "CSS" : "C++"} logo={field == "Frontend" ? logoCSS : logoCPP} description={field == "Frontend" ? content.skills.Frontend["CSS"] : content.skills.Backend["CPP"]} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill mode={mode} title={field == "Frontend" ? "HTML" : "Python"} logo={field == "Frontend" ? logoHtml : logoPython} description={field == "Frontend" ? content.skills.Frontend["HTML"] : content.skills.Backend["Python"]} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill mode={mode} title={field == "Frontend" ? "JS" : "SQL"} logo={field == "Frontend" ? logoJS : logoSQL} description={field == "Frontend" ? content.skills.Frontend["JS"] : content.skills.Backend["SQL"]} />
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center my-3 text-primary d-flex align-items-center justify-content-center'><img src={logoReact} className='skill-logo' />React</h2>
                    <Col>
                        <Skill mode={mode} description={content.skills["React"]} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}