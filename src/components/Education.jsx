import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Education({ language, mode }) {
    let content = language == "PL" ? contentPL : contentEN;

    return (
        <ListGroup>
            {content.education.places.map((item, index) => (
                <ListGroup.Item key={index} className={mode == "dark" ? 'bg-dark text-light border-dark' : 'bg-light border-light'}>
                    <p><b>{item.title}</b> {item.more} {item.description}</p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}