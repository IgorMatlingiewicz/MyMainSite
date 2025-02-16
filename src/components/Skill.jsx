import Card from 'react-bootstrap/Card';

export default function Skill({ title, description, logo }) {
    return (
        <Card className="bg-secondary text-light">
            <Card.Body>
                {title && <Card.Title className='d-flex align-items-center'><img src={logo} className='skill-logo'/> {title}</Card.Title>}
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
