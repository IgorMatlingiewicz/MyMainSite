import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Contact({ language, mode }) {
    let content = language === "PL" ? contentPL : contentEN;
    const isDark = mode === 'dark';

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

    const inputClass = isDark ? 'bg-dark text-light border-secondary' : '';

    return (
        <>
            <Row className="g-5">
                {/* Lewa kolumna: dane kontaktowe */}
                <Col md={4} xs={12}>
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-start gap-3">
                            <div className="contact-icon-wrap">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div>
                                <div className="small opacity-50 mb-1">{content.contact.mail.replace(': ', '')}</div>
                                <a href={`mailto:${content.contact.mailValue}`}
                                   className={`fw-medium text-decoration-none ${isDark ? 'text-light' : 'text-dark'}`}>
                                    {content.contact.mailValue}
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="contact-icon-wrap">
                                <i className="bi bi-telephone"></i>
                            </div>
                            <div>
                                <div className="small opacity-50 mb-1">{content.contact.phoneNumber.replace(': ', '')}</div>
                                <span className="fw-medium">{content.contact.phoneValue}</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="contact-icon-wrap">
                                <i className="bi bi-github"></i>
                            </div>
                            <div>
                                <div className="small opacity-50 mb-1">GitHub</div>
                                <a href="https://github.com/IgorMatlingiewicz" target="_blank" rel="noopener noreferrer"
                                   className={`fw-medium text-decoration-none ${isDark ? 'text-light' : 'text-dark'}`}>
                                    IgorMatlingiewicz
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Prawa kolumna: formularz */}
                <Col md={8} xs={12}>
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>Don't fill this out: <input name="bot-field" /></label>
                        </p>

                        <Row className="mb-3">
                            <Form.Group as={Col} md={6} xs={12} className="mb-3 mb-md-0" controlId="formEmail">
                                <Form.Label className="small opacity-75">Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" required name="email" className={inputClass} />
                            </Form.Group>
                            <Form.Group as={Col} md={6} xs={12} controlId="formName">
                                <Form.Label className="small opacity-75">{content.contact.form["name"]}</Form.Label>
                                <Form.Control type="text" placeholder={content.contact.form["name"]} required name="name" className={inputClass} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label className="small opacity-75">{content.contact.form["phone"]}</Form.Label>
                            <Form.Control type="text" placeholder={content.contact.form["phone"]} name="phone" className={inputClass} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label className="small opacity-75">{content.contact.form["message"]}</Form.Label>
                            <Form.Control as="textarea" placeholder={content.contact.form["message"]} rows={4} required name="message" className={inputClass} />
                        </Form.Group>

                        <Form.Group className="mb-3" id="formCheckbox">
                            <Form.Check type="checkbox" label={content.contact.form["agreement"]} required
                                className="small opacity-75" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="px-4 fw-semibold btn-accent">
                            {content.contact.form["submit"]}
                        </Button>
                    </form>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton closeVariant={isDark ? "white" : undefined} className={isDark ? "bg-dark text-light border-secondary" : ""}>
                    <Modal.Title>
                        {formError
                            ? <><i className="bi bi-x-circle-fill text-danger me-2"></i>{content.contact.modal.error.title}</>
                            : <><i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent)' }}></i>{content.contact.modal.success.title}</>
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={isDark ? "bg-dark text-light" : ""}>
                    {formError ? formError : content.contact.modal.success["message"]}
                </Modal.Body>
                <Modal.Footer className={isDark ? "bg-dark border-secondary" : ""}>
                    <Button variant={isDark ? "outline-light" : "outline-dark"} onClick={() => setShowModal(false)}>
                        {content.contact.modal["button"]}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
