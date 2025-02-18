import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MoreInfo({ title, infoList, mode }) {
    return (
        <Col md={6} xs={12}>
            <h2 className='my-3 text-primary'>{title}</h2>
            <ListGroup>
                {infoList.map(info => <ListGroup.Item className={mode == "dark" ? "bg-secondary text-light border border-secondary mt-1" : "bg-danger border border-danger mt-1 text-dark"}>{info}</ListGroup.Item>)}
            </ListGroup>
        </Col>
    )
}