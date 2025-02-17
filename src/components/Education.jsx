import Carousel from 'react-bootstrap/Carousel';
import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function Education({ language }) {
    let content = language == "PL" ? contentPL : contentEN;

    return (
        <Carousel interval={null} className="text-carousel" controls={false} >
            {content.education.places.map((item, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}