import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Contact({ language }) {
    let content = language == "PL" ? contentPL : contentEN;

    return (
        <>
            <h3>{content.contact["contactOptions"]}</h3>
            <h4 className='fw-bold'><i class="bi bi-envelope"></i> igor.matlingiewicz@gmail.com</h4>
            <h4 className='fw-bold'><i class="bi bi-telephone"></i> 697-327-580</h4>
            <h3><i class="bi bi-chat-left-dots"></i> {content.contact.form['formInfo']}</h3>
            <Form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" md={4} xs={12}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required name='email'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" md={4} xs={12}>
                        <Form.Label>{content.contact.form["name"]}</Form.Label>
                        <Form.Control type="text" placeholder={content.contact.form["name"]} required name='name'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" md={4} xs={12}>
                        <Form.Label>{content.contact.form["phone"]}</Form.Label>
                        <Form.Control type="text" placeholder={content.contact.form["phone"]} name='phone'/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>{content.contact.form["message"]}</Form.Label>
                    <Form.Control as="textarea" placeholder={content.contact.form["message"]} rows={4} required name='message'/>
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label={content.contact.form["agreement"]} required/>
                </Form.Group>

                <Button variant="warning" type="submit" className='fw-bold'>
                    {content.contact.form["submit"]}
                </Button>
            </Form>
        </>
    )
}