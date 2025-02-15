import MoreInfo from './MoreInfo';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact({ }) {
    return (
        <>
        <h3>Można skontaktować sie ze mną drogą telefoniczną lub mailową:</h3>
           <p>igor.matlingiewicz@gmail.com</p>
           <p>697-327-580</p>
        <h3>Można też wysłać do mnie wiadomość mailową w poniższym formularzu:</h3>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Imie i nazwisko</Form.Label>
                    <Form.Control type="text" placeholder="Imie i nazwisko" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Numer telefonu (opcjonalne)</Form.Label>
                    <Form.Control type="text" placeholder="Numer telefonu (opcjonalne)" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Treść wiadomości:</Form.Label>
                <Form.Control as="textarea" placeholder="Treść Twojej wiadomości" rows={4} />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="* Wyrażam zgodę na przetwarzanie przez właściciela strony moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania." />
            </Form.Group>

            <Button variant="primary" type="submit">
                Wyślij
            </Button>
        </Form>
        </>
    )
}