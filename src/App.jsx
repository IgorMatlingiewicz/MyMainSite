import { useState } from 'react'
import AppNavbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Collapse } from 'react-bootstrap';

// import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppNavbar />
      <Container className="bg-dark text-light mt-3">
        <Row id='home'>
          <Col md={6} xs={12}>
            <h2 className='text-primary'>O mnie</h2>
            <p>
              Jestem ambitną, młodą osobą chętną do nabycie nowej wiedzy i doświadczenia w branży IT. Programowaniem i tworzeniem stron oraz aplikacji internetowych zainteresowałem się na początku technikum i od tej pory uczę się nowych rzeczy, języków i technologii, robiąc przy tym małe projekty, które można zobaczyć w moich repozytoriach <a href="https://github.com/IgorMatlingiewicz" className='link-primary' target="_blank">GitHub</a>.
            </p>
            <Collapse in={open}>
              <div id="about-text">
                <p>  Posiadam tytuł technika z informatyki i aktualnie studiuje informatykę na Politechnice Śląskiej. Szukam pracy, w której rozwinę swoje umiejętności i nabędę też nowe z pomocą bardziej doświadczonych ludzi. Dotychczas najwięcej pracowałem we frontendzie, zrobiłem kilka do dziś aktywnych stron, ale chciałbym się również rozwinąć w obszarze backendu.</p>
                <p>Strona ta ma być moim internetowym CV i opisać oraz pokazać moje zarówno umiejętności jak i doświadczenie. Niżej zamieszczę również formularz pozwalający sie skontaktować ze mną drogą mailową, oraz CV w postaci standardowego pliku PDF.</p>
              </div>
            </Collapse>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="about-text"
              aria-expanded={open}
              className="my-3"
            >
              {open ? 'Zwiń tekst' : 'Czytaj więcej'}
            </Button >

            {/* <p>Jestem ambitną, młodą osobą chętną do nabycie nowej wiedzy i doświadczenia w branży IT. Programowaniem i tworzeniem stron oraz aplikacji internetowych zainteresowałem się na początku technikum i od tej pory uczę się nowych rzeczy, języków i technologii, robiąc przy tym małe projekty, które można zobaczyć w moich repozytoriach <a href="https://github.com/IgorMatlingiewicz" className='link-primary' target="_blank">GitHub</a>. Posiadam tytuł technika z informatyki i aktualnie studiuje informatykę na Politechnice Śląskiej. Szukam pracy, w której rozwinę swoje umiejętności i nabędę też nowe z pomocą bardziej doświadczonych ludzi. Dotychczas najwięcej pracowałem we frontendzie, zrobiłem kilka do dziś aktywnych stron, ale chciałbym się również rozwinąć w obszarze backendu.</p>
            <p>Strona ta ma być moim internetowym CV i opisać oraz pokazać moje zarówno umiejętności jak i doświadczenie. Niżej zamieszczę również formularz pozwalający sie skontaktować ze mną drogą mailową, oraz CV w postaci standardowego pliku PDF.</p> */}
          </Col>
          <Col>
            <h2 className='text-primary'>Edukacja</h2>
            <Education />
          </Col>
        </Row>
        <Row id='skills' className='my-3'>
          <h2 className='text-primary'>Umiejętności</h2>
          <Skills />
        </Row>
        <Row className="my-3">
          <MoreInfo title="Inne umiejętności" infoList={["Github - podstawowa znajomość serwisu i związanych z nim poleceń w konsoli", "Angielski - znajomość języka na poziomie B2", "Photoshop - podstawowa znajomość programu i umiejętność modyfikowania grafiki"]} />
          <MoreInfo title="Kursy i certyfikaty" infoList={["PCAP: Programming Essentials in Python", "Udemy: React – Complete Guide 2025(Academind) (w trakcie)", "Udemy: Zaawansowane projekty w CSS i JavaScript (Samuraj Programowania)"]} />
        </Row>
        <Row id="contact" className='my-3'>
          <h2 className='text-primary'>Kontakt</h2>
          <Contact />
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
