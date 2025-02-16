import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from './Skill';
import { useState } from 'react'

import logoCSS from '../../src/assets/CSS.svg'
import logoCPP from '../../src/assets/CPP.svg'
import logoHtml from '../../src/assets/HTML.svg'
import logoPython from '../../src/assets/Python.svg'
import logoJS from '../../src/assets/JS.svg'
import logoSQL from '../../src/assets/SQL.svg'
import logoReact from '../../src/assets/React.svg'

export default function Skills({ }) {

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
            <Container className='mb-3'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Button variant="primary" active={field == "Frontend" ? true : false} className="mx-5" onClick={() => handleClick("F")}>Frontend</Button>
                        <Button variant="primary" active={field == "Backend" ? true : false} className="mx-5" onClick={() => handleClick("B")}>Backend</Button>
                    </Col>
                </Row>
            </Container>
            <h2 className='text-center my-3 text-primary'>{field}</h2>
            <Container>
                <Row className="d-flex align-items-stretch">
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill title={field == "Frontend" ? "CSS" : "C++"} logo={field == "Frontend" ? logoCSS : logoCPP} description={field == "Frontend" ? "Umiejętność stylowania dokumentu HTML zarówno natywnym CSS jak i preprocesorem SCSS. Znajomość RWD i Bootstrapa." : "Znajomość składni i funkcji języka. Operacje na plikach i umiejętność programowania obiektowego."} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill title={field == "Frontend" ? "HTML" : "Python"}  logo={field == "Frontend" ? logoHtml : logoPython} description={field == "Frontend" ? "Duża znajomość elementów strony, znaczników meta i tworzenia poprawnego układu strony np. metodologia BEM. Umiejętność wstawiania grafik, tabel, list i innych elementów strony." : "Znajomość funkcji języka takich jak funkcje warunkowe, pętle, umiejętność operowania na listach, plikach tekstowych i pisania funkcji"} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill title={field == "Frontend" ? "JS" : "SQL"} logo={field == "Frontend" ? logoJS : logoSQL} description={field == "Frontend" ? "Znajomość języka (pętle, tablice, instrukcje warunkowe, podstawy obiektowości). Operacje na DOM - vanilla JS/jQuery, renderowanie DOM na bazie JSON czytanego z publicznego API." : "Podstawowa znajomość poleceń takich jak select, update, where. Umiejętność filtrowania i sortowania danych. Łączenie stron z bazami danych i operowanie na nich przy pomocy PHP."} />
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center my-3 text-primary d-flex align-items-center justify-content-center'><img src={logoReact} className='skill-logo'/>React</h2>
                    <Col>
                        <Skill description="Praca z biblioteką React, tworzenie komponentów funkcyjnych, modułowe pisane kodu, znajomość JSX. Dla przykładu ta strona jest stworzona w tej właśnie bibliotece. Do jej stylowania użyłem biblioteki React-Bootstrap, która pozwala użyć gotowych komnonetów Reacta posiadających już style standardowego Bootstrapa. Do jej stworzenia użyłem również narzędzia Vite." />
                    </Col>
                </Row>
            </Container>

        </>
    )
}