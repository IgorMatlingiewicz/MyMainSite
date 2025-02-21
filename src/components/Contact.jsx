import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';


import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Contact({ language }) {
    let content = language == "PL" ? contentPL : contentEN;

    const [showModal, setShowModal] = useState(false);
    const [formError, setFormError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => {
                setFormError(null);
                setShowModal(true);
                form.reset();
            })
            .catch((error) => {
                setFormError(content.contact.modal.error["message"] + error);
                setShowModal(true);
            });
    };

    return (
        <>
            <h4><i className="bi bi-envelope"></i> {content.contact.mail}igor.matlingiewicz@gmail.com</h4>
            <h4><i className="bi bi-telephone"></i> {content.contact.phoneNumber}697-327-580</h4>
            <h4><i className="bi bi-chat-left-dots"></i> {content.contact.form['formInfo']}</h4>

            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                </p>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" md={4} xs={12}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required name='email' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" md={4} xs={12}>
                        <Form.Label>{content.contact.form["name"]}</Form.Label>
                        <Form.Control type="text" placeholder={content.contact.form["name"]} required name='name' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" md={4} xs={12}>
                        <Form.Label>{content.contact.form["phone"]}</Form.Label>
                        <Form.Control type="text" placeholder={content.contact.form["phone"]} name='phone' />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>{content.contact.form["message"]}</Form.Label>
                    <Form.Control as="textarea" placeholder={content.contact.form["message"]} rows={4} required name='message' />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label={content.contact.form["agreement"]} required />
                </Form.Group>

                <Button variant="warning" type="submit" className='fw-bold'>
                    {content.contact.form["submit"]}
                </Button>
            </form>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{formError ? content.contact.modal.error.title : content.contact.modal.success.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formError ? formError : content.contact.modal.success["message"]}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {content.contact.modal["button"]}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}