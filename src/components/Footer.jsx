import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Footer({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    return (
        <>
            <div className={mode == "dark" ? "bg-secondary text-light" : "bg-primary text-light"}>
                <Container>
                    <h2 className='my-4 pt-3'>{content.links["header"]}</h2>
                    <Row className='pb-4'>
                        <Col md={6} xs={12} className='mb-3 mb-md-0'>
                            <a href="https://github.com/IgorMatlingiewicz" className='link-light' target="_blank"><h3><i class="bi bi-github"></i> {content.links["github"]}</h3></a>
                        </Col>
                        <Col md={6} xs={12}>
                            <a href="../assets/CV_MatlingiewiczIgor.pdf" download="CV_MatlingiewiczIgor.pdf" className='link-light' target="_blank"><h3><i class="bi bi-file-earmark-person"></i> {content.links["CV"]}</h3></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}