import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MoreInfo({ title, infoList, mode }) {
    return (
        <Col md={6} xs={12}>
            <h2 className='my-3 text-primary'>{title}</h2>
            <ListGroup>
                {infoList.map((info, index) => <ListGroup.Item key={index} className={mode == "dark" ? "bg-dark text-light border border-dark mt-1" : "bg-light border border-light mt-1 text-dark"}>{info}</ListGroup.Item>)}
            </ListGroup>
        </Col>
    )
}