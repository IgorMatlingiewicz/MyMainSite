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
                        <Skill title={field == "Frontend" ? "CSS" : "C++"} logo={field == "Frontend" ? logoCSS : logoCPP} description={field == "Frontend" ? "Potrafię stylować strony zarówno natywnym CSS jak i preprocesorem SCSS. Umiem tworzyć strony responsywne i znam bibliotekę Bootstrapa." : "Znam składnie i funkcje języka. Potrafię operować na plikach i znam podstawy programowania obiektowego."} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill title={field == "Frontend" ? "HTML" : "Python"}  logo={field == "Frontend" ? logoHtml : logoPython} description={field == "Frontend" ? "Znam i umiem korzystać z wielu elementów strony dostępnych w HTML takich jak listy, tabele i wiele innych. Znam również znaczniki meta i umiem tworzyć poprawny układu strony np. stosować się do metodologii BEM." : "Znam podstawowe funkcje języka takich jak funkcje warunkowe, pętle, umiem operować na listach, plikach tekstowych i pisać własne funkcje."} />
                    </Col>
                    <Col md={4} xs={12} className="d-flex my-2 my-md-0">
                        <Skill title={field == "Frontend" ? "JS" : "SQL"} logo={field == "Frontend" ? logoJS : logoSQL} description={field == "Frontend" ? "Znam składnie języka i wbudowane w nim funkcje (pętle, tablice, instrukcje warunkowe, podstawy obiektowości). Potrafię operować na DOM poprzez standardowy JavaScript lub jQuery, renderować DOM na bazie JSON czytanego z publicznego API." : "Potrafie koszystać z podstawowych poleceń takich jak select, update, where. Umiem filtrować i sortować dane. Jestem w stanie połączyć stronę z bazą danych i operować na nich przy pomocy PHP."} />
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center my-3 text-primary d-flex align-items-center justify-content-center'><img src={logoReact} className='skill-logo'/>React</h2>
                    <Col>
                        <Skill description="Potrafię pracować z biblioteką React, tworzyć komponentów funkcyjne, pisać modułowy kod i znam składnie JSX. Dobrym przykładem mojej pracy w tej bibliotece jest ta strona, która została stworzona w tej właśnie bibliotece. Do jej stylowania użyłem biblioteki React-Bootstrap, która pozwala użyć gotowych komnonetów Reacta posiadających już style standardowego Bootstrapa. Do stworzenia strony użyłem również narzędzia Vite."/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}