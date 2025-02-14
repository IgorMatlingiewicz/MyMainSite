import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
            
        </>
    )
}