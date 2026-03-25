import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logoCSS    from '../assets/CSS.svg'
import logoCPP    from '../assets/CPP.svg'
import logoHtml   from '../assets/HTML.svg'
import logoPython from '../assets/Python.svg'
import logoJS     from '../assets/JS.svg'
import logoSQL    from '../assets/SQL.svg'
import logoReact  from '../assets/React.svg'
import logoPHP    from '../assets/php-svgrepo-com.svg'
import logoJava   from '../assets/java-svgrepo-com.svg'
import logoREST   from '../assets/rest-api-icon.svg'

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Skills({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    const skillList = [
        { key: "React",  name: "React",      logo: logoReact,  desc: () => content.skills["React"] },
        { key: "CSS",    name: "CSS",         logo: logoCSS,    desc: () => content.skills.Frontend["CSS"] },
        { key: "HTML",   name: "HTML",        logo: logoHtml,   desc: () => content.skills.Frontend["HTML"] },
        { key: "JS",     name: "JavaScript",  logo: logoJS,     desc: () => content.skills.Frontend["JS"] },
        { key: "PHP",    name: "PHP",         logo: logoPHP,    desc: () => content.skills.Backend["PHP"] },
        { key: "SQL",    name: "SQL",         logo: logoSQL,    desc: () => content.skills.Backend["SQL"] },
        { key: "Python", name: "Python",      logo: logoPython, desc: () => content.skills.Backend["Python"] },
        { key: "Java",   name: "Java",        logo: logoJava,   desc: () => content.skills.Backend["Java"] },
        { key: "CPP",    name: "C++",         logo: logoCPP,    desc: () => content.skills.Backend["CPP"] },
        { key: "REST",   name: "REST API",    logo: logoREST,   desc: () => content.skills.Backend["REST"] },
    ];

    const [selected, setSelected] = useState("React");
    const tileClass = `skill-tile ${mode === "dark" ? "skill-tile-dark" : "skill-tile-light"}`;
    const selectedSkill = skillList.find(s => s.key === selected);

    return (
        <Container>
            <Row className="g-2 mb-4 justify-content-center">
                {skillList.map(skill => (
                    <Col key={skill.key} xs={4} sm={3} md={2} className="d-flex">
                        <div
                            className={`${tileClass} w-100 ${selected === skill.key ? "active" : ""}`}
                            onClick={() => setSelected(skill.key)}
                        >
                            {skill.logo
                                ? <img src={skill.logo} className="skill-tile-logo" alt={skill.name} />
                                : <div className="skill-tile-abbr">{skill.name.slice(0, 3).toUpperCase()}</div>
                            }
                            <span>{skill.name}</span>
                        </div>
                    </Col>
                ))}
            </Row>

            {selectedSkill && (
                <Row>
                    <Col>
                        <div className={`skill-description-panel ${mode === "dark" ? "panel-dark text-light" : "panel-light text-dark"}`}>
                            <h6 className="text-primary mb-2 fw-bold">{selectedSkill.name}</h6>
                            <p className="mb-0">{selectedSkill.desc()}</p>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    )
}
