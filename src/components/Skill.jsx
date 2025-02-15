import Card from 'react-bootstrap/Card';

export default function Skill({ title, description }) {
    return (
        <Card className="bg-secondary text-light">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}