import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <>
            <div className="bg-secondary text-light">
                <Container>
                    <h2 className='my-4 pt-3'>Linki</h2>
                    <Row className='pb-4'>
                        <Col md={6} xs={12} className='mb-3 mb-md-0'>
                            <a href="https://github.com/IgorMatlingiewicz" className='link-primary' target="_blank"><h3><i class="bi bi-github"></i> Moje konto GitHub</h3></a>
                        </Col>
                        <Col md={6} xs={12}>
                            <a href="../assets/CV_MatlingiewiczIgor.pdf" download="CV_MatlingiewiczIgor.pdf" className='link-primary' target="_blank"><h3><i class="bi bi-file-earmark-person"></i> Moje CV w formie PDF</h3></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}