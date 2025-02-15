import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Skill from './Skill';
import { useState } from 'react'

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
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Button onClick={() => handleClick("F")}>Frontend</Button>
                    </Col>
                    <Col className='text-center'>
                        <Button onClick={() => handleClick("B")}>Backend</Button>
                    </Col>
                </Row>

            </Container>
            <h1 className='text-center'>{field}</h1>
            <Container>
                <Row>
                    <Col>
                        <Skill title={field == "Frontend" ? "CSS" : "C++"} description={field == "Frontend" ? "Umiejętność stylowania dokumentu HTML zarówno natywnym CSS jak i preprocesorem SCSS. Znajomość RWD i Bootstrapa." :"Znajomość składni i funkcji języka. Operacje na plikach i umiejętność programowania obiektowego."} />
                    </Col>
                    <Col>
                        <Skill title={field == "Frontend" ? "HTML" : "Python"} description={field == "Frontend" ? "Duża znajomość elementów strony, znaczników meta i tworzenia poprawnego układu strony np. metodologia BEM. Umiejętność wstawiania grafik, tabel, list i innych elementów strony." : "Znajomość funkcji języka takich jak funkcje warunkowe, pętle, umiejętność operowania na listach, plikach tekstowych i pisania funkcji"} />
                    </Col>
                    <Col>
                        <Skill title={field == "Frontend" ? "JS" : "SQL"} description={field == "Frontend" ? "Znajomość języka (pętle, tablice, instrukcje warunkowe, podstawy obiektowości). Operacje na DOM - vanilla JS/jQuery, renderowanie DOM na bazie JSON czytanego z publicznego API." :"Podstawowa znajomość poleceń takich jak select, update, where. Umiejętność filtrowania i sortowania danych. Łączenie stron z bazami danych i operowanie na nich przy pomocy PHP."} />
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-center'>React</h2>
                    <Col>
                        <Skill title="React" description="Praca z biblioteką React, tworzenie komponentów funkcyjnych, modułowe pisane kodu, znajomość JSX. Dla przykładu ta strona jest stworzona w tej właśnie bibliotece. Do jej stylowania użyłem biblioteki React-Bootstrap, która pozwala użyć gotowych komnonetów Reacta posiadających już style standardowego Bootstrapa. Do jej stworzenia użyłem również narzędzia Vite." />
                    </Col>
                </Row>
            </Container>

        </>
    )
}