import Card from 'react-bootstrap/Card';

export default function Skill({ title, description, logo, mode }) {
    return (
        <Card className={mode == "dark" ? "bg-secondary text-light" : "bg-danger"}>
            <Card.Body>
                {title && <Card.Title className='d-flex align-items-center'><h4><img src={logo} className='skill-logo'/> {title}</h4></Card.Title>}
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
