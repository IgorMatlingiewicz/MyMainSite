import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Footer({ language, mode }) {
    let content = language === "PL" ? contentPL : contentEN;
    const year = new Date().getFullYear();

    return (
        <footer className={mode === "dark" ? "bg-secondary text-light" : "bg-primary text-light"}>
            <Container>
                <Row className="py-4 align-items-center">
                    <Col md={5} xs={12} className="mb-3 mb-md-0">
                        <div className="fw-bold fs-5">Igor Matlingiewicz</div>
                        <div className="opacity-75 small">{content.footer.subtitle}</div>
                    </Col>
                    <Col md={7} xs={12} className="d-flex gap-4 justify-content-md-end flex-wrap">
                        <a href="https://github.com/IgorMatlingiewicz" className="link-light d-flex align-items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github fs-5"></i>
                            <span>{content.links["github"]}</span>
                        </a>
                        <a href="/assets/CV_MatlingiewiczIgor.pdf" download="CV_MatlingiewiczIgor.pdf" className="link-light d-flex align-items-center gap-2" target="_blank">
                            <i className="bi bi-file-earmark-person fs-5"></i>
                            <span>{content.links["CV"]}</span>
                        </a>
                    </Col>
                </Row>
                <hr className="opacity-25 my-0" />
                <Row className="py-2">
                    <Col className="text-center opacity-50 small">
                        © {year} Igor Matlingiewicz
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
