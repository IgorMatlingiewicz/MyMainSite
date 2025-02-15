import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MoreInfo({ title, infoList }) {
    return (
        <Col>
            <h2 className='my-3'>{title}</h2>
            <ListGroup>
                {infoList.map(info => <ListGroup.Item className="bg-secondary text-light border border-secondary mt-1">{info}</ListGroup.Item>)}
            </ListGroup>
        </Col>
    )
}