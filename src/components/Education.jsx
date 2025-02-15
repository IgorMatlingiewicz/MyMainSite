import Carousel from 'react-bootstrap/Carousel';

export default function Education() {

    return (
        <Carousel interval={null} className="text-carousel" controls={false} >
            <Carousel.Item>
                <div className="carousel-content">
                    <h3>Politechnika Śląska w Gliwicach (2023 – obecnie)</h3>
                    <p>Kierunek: Informatyka</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-content">
                    <h3>Techniczne Zakłady Naukowe w Częstochowie (2019-2023)</h3>
                    <p>Kierunek: Technik Informatyk</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-content">
                    <h3>EduPlus – dwutygodniowe praktyki z Erasmus+</h3>
                    <p>Praktyki podczas których programowałem aplikacje w technologii Windows Forms w anglojęzycznym zespole</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-content">
                    <h3>Jupiter – szkoła frontendu i tworzenia gier (2021-2023)</h3>
                    <p>Zajęcia z tworzenia stron internetowych</p>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}