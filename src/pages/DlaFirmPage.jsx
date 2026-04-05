import { useState, useEffect, useRef } from 'react';
import { Container, Button, Row, Col, Modal, Form } from 'react-bootstrap';

import AppNavbar from '../components/Navbar';
import PageSwitcher from '../components/PageSwitcher';
import contentPL from '../data/contentPL.json';
import contentEN from '../data/contentEN.json';

export default function DlaFirmPage({ language, setLanguage, mode, setMode }) {
    const content = language === 'PL' ? contentPL : contentEN;
    const c = content.dlaFirm;

    const isDark = mode === 'dark';
    const mainBg = isDark ? 'bg-dark text-light' : 'bg-light text-dark';
    const altBg  = isDark ? 'section-alt-dark text-light' : 'section-alt-light text-dark';

    const [showModal, setShowModal] = useState(false);
    const [formError, setFormError] = useState(null);
    const [contactActive, setContactActive] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const scrollRef = useRef(null);

    const examples = [
        {
            title: language === 'PL' ? 'Restauracja / kawiarnia' : 'Restaurant / café',
            desc:  language === 'PL' ? 'Menu, rezerwacja stolika, galeria dań, kontakt' : 'Menu, table booking, food gallery, contact',
            url: 'https://themewagon.github.io/restoran/',
        },
        {
            title: language === 'PL' ? 'Salon fryzjerski / barber' : 'Hair salon / barber',
            desc:  language === 'PL' ? 'Cennik usług, galeria stylizacji, formularz rezerwacji' : 'Price list, style gallery, booking form',
            url: 'https://themewagon.github.io/haircut/',
        },
        {
            title: language === 'PL' ? 'Warsztat samochodowy' : 'Car workshop',
            desc:  language === 'PL' ? 'Oferta serwisu, wycena online, dane kontaktowe i mapa' : 'Service offer, online quote, contact details and map',
            url: 'https://themewagon.github.io/carserv/',
        },
    ];

    useEffect(() => {
        const contact = document.getElementById('df-contact');
        if (!contact) return;
        const observer = new IntersectionObserver(
            ([entry]) => setContactActive(entry.isIntersecting || entry.boundingClientRect.top < 0),
            { threshold: 0, root: scrollRef.current }
        );
        observer.observe(contact);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToContact = () => document.getElementById('df-contact')?.scrollIntoView({ behavior: 'smooth' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => { setFormError(null); setShowModal(true); form.reset(); })
            .catch((error) => { setFormError(content.contact.modal.error.message + error); setShowModal(true); });
    };

    return (
        <div ref={scrollRef} className={mainBg} data-mode={mode} style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>

            <AppNavbar
                language={language} setLanguage={setLanguage}
                mode={mode} setMode={setMode}
                customNavItems={[
                    { label: language === 'PL' ? 'Oferta' : 'Offer', active: !contactActive, onClick: scrollToTop },
                    { label: c.nav.contact, active: contactActive, onClick: scrollToContact },
                ]}
            />
            <PageSwitcher language={language} mode={mode} />

            {/* Hero */}
            <section className={`${mainBg} py-5`} style={{ position: 'relative', overflow: 'hidden' }}>
                <Container style={{ position: 'relative', zIndex: 1 }}>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <h1 className="fw-bold mb-4 df-hero-title">{c.hero.title}</h1>
                            <p className="lead mb-5 opacity-75">{c.hero.subtitle}</p>
                            <Button className="btn-accent px-5 py-3 fw-bold fs-5" onClick={scrollToContact}>
                                {c.hero.cta}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Przykłady stron */}
            <section className={`${altBg} py-5`}>
                <Container>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h2 className="section-title text-primary">
                                {language === 'PL' ? 'Tak może wyglądać strona Twojej firmy' : 'This is how your website could look'}
                            </h2>
                            <p className="opacity-75">
                                {language === 'PL' ? 'Kliknij kartę, żeby zobaczyć działający podgląd' : 'Click a card to see a live preview'}
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {examples.map((ex, i) => (
                            <Col md={4} xs={12} key={i}>
                                <div
                                    className="df-card h-100"
                                    onClick={() => setPreviewUrl(ex.url)}
                                    style={{ cursor: 'pointer', border: '1px solid var(--accent)', borderRadius: '0.75rem', overflow: 'hidden', background: isDark ? '#12141a' : '#fff', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                                >
                                    <div style={{ height: '180px', overflow: 'hidden', pointerEvents: 'none' }}>
                                        <iframe
                                            src={ex.url}
                                            title={ex.title}
                                            scrolling="no"
                                            style={{ width: '333%', height: '600px', transform: 'scale(0.3)', transformOrigin: 'top left', border: 'none', pointerEvents: 'none' }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h5 className="fw-bold mb-1">{ex.title}</h5>
                                        <p className="small opacity-75 mb-3">{ex.desc}</p>
                                        <Button variant="outline-primary" size="sm" onClick={e => { e.stopPropagation(); setPreviewUrl(ex.url); }}>
                                            {language === 'PL' ? 'Zobacz podgląd →' : 'View preview →'}
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <p className="text-center mt-4 small fst-italic opacity-50">
                        {language === 'PL'
                            ? '* Powyższe szablony pochodzą z ThemeWagon i służą wyłącznie jako inspiracja. Twoja strona powstanie od podstaw - zaprojektowana specjalnie dla Ciebie.'
                            : '* Templates above are from ThemeWagon and serve as inspiration only. Your site will be built from scratch - designed specifically for you.'}
                    </p>
                </Container>
            </section>

            {/* Dlaczego warto */}
            <section id="df-why" className={`${mainBg} py-5`}>
                <Container>
                    <Row className="mb-4">
                        <Col><h2 className="section-title text-primary">{c.why.header}</h2></Col>
                    </Row>
                    <Row className="g-4">
                        {c.why.items.map((item, i) => (
                            <Col md={6} xs={12} key={i}>
                                <div className="df-why-item d-flex gap-4 align-items-start">
                                    <div className="df-why-icon flex-shrink-0">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-1">{item.title}</h5>
                                        <p className="mb-0 opacity-75">{item.desc}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Kontakt */}
            <section id="df-contact" className={`${altBg} py-5`}>
                <Container>
                    <Row className="mb-4">
                        <Col><h2 className="section-title text-primary">{c.contact.header}</h2></Col>
                    </Row>
                    <Row className="g-5">
                        <Col md={4} xs={12}>
                            <p className="lead mb-4">{c.contact.subtitle}</p>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <i className="fa-solid fa-phone fs-4" style={{ color: 'var(--accent)' }}></i>
                                <a href={`tel:${c.contact.phone}`} className={`fw-semibold fs-5 text-decoration-none ${isDark ? 'text-light' : 'text-dark'}`}>
                                    {c.contact.phone}
                                </a>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i className="fa-solid fa-envelope fs-4" style={{ color: 'var(--accent)' }}></i>
                                <a href={`mailto:${c.contact.email}`} className={`fw-medium text-decoration-none ${isDark ? 'text-light' : 'text-dark'}`}>
                                    {c.contact.email}
                                </a>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <form name="contact-df" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                                <input type="hidden" name="form-name" value="contact-df" />
                                <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md={6} xs={12} controlId="dfEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email" required name="email" />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} xs={12} controlId="dfName">
                                        <Form.Label>{content.contact.form.name}</Form.Label>
                                        <Form.Control type="text" placeholder={content.contact.form.name} required name="name" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="dfMessage">
                                    <Form.Label>{content.contact.form.message}</Form.Label>
                                    <Form.Control as="textarea" placeholder={content.contact.form.message} rows={4} required name="message" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="dfCheckbox">
                                    <Form.Check type="checkbox" label={content.contact.form.agreement} required className="small opacity-75" />
                                </Form.Group>
                                <Button type="submit" className="btn-accent px-4 fw-semibold">
                                    {content.contact.form.submit}
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className={`${isDark ? 'bg-dark' : 'bg-light'} py-3 text-center border-top ${isDark ? 'border-secondary' : ''}`}>
                <small className="opacity-50">© 2026 Igor Matlingiewicz</small>
            </footer>

            {/* Modal podglądu szablonu */}
            <Modal show={!!previewUrl} onHide={() => setPreviewUrl(null)} size="xl" fullscreen="lg-down">
                <Modal.Header closeButton closeVariant={isDark ? 'white' : undefined} className={isDark ? 'bg-dark text-light border-secondary' : ''}>
                    <Modal.Title>{language === 'PL' ? 'Podgląd szablonu' : 'Template preview'}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={`p-0 ${isDark ? 'bg-dark' : ''}`}>
                    {previewUrl && <iframe src={previewUrl} title="preview" style={{ width: '100%', height: '82vh', border: 'none', display: 'block' }} />}
                </Modal.Body>
            </Modal>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton closeVariant={isDark ? 'white' : undefined} className={isDark ? 'bg-dark text-light border-secondary' : ''}>
                    <Modal.Title>
                        {formError
                            ? <><i className="bi bi-x-circle-fill text-danger me-2"></i>{content.contact.modal.error.title}</>
                            : <><i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent)' }}></i>{content.contact.modal.success.title}</>
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={isDark ? 'bg-dark text-light' : ''}>
                    {formError ? formError : content.contact.modal.success.message}
                </Modal.Body>
                <Modal.Footer className={isDark ? 'bg-dark border-secondary' : ''}>
                    <Button variant={isDark ? 'outline-light' : 'outline-dark'} onClick={() => setShowModal(false)}>
                        {content.contact.modal.button}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
