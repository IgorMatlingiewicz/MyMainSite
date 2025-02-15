import { useState } from 'react'
import AppNavbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Container from 'react-bootstrap/Container';
import Contact from './components/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoreInfo from './components/MoreInfo';

// import './App.css'

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="bg-dark text-light mt-3">
        <Row id='home'>
          <Col>
            <h2>O mnie</h2>
            <p>Jestem ambitną, młodą osobą chętną nanabycie nowej wiedzy i doświadczenia wbranży IT. Programowaniem i tworzeniem stron zainteresowałem się na początku technikum i od tej pory uczę się nowych rzeczy i technologii, robiąc przy tym małe projekty i strony. Posiadam tytuł technika z informatyki i aktualnie studiuje informatykę na Politechnice Śląskiej. Szukam pracy, w której rozwinę swoje umiejętności i nabędę też nowe z pomocą bardziej doświadczonych ludzi. Dotychczas najwięcej pracowałem we frontendzie, zrobiłem kilka do dziś aktywnych stron, ale chciałbym się również rozwinąć w obszarze backendu, głównie w języku Python.</p>
            <p>Strona ta ma być moim internetowym CV i opisać oraz pokazać moje zarówno umiejętności jak i doświadczenie. Niżej zamieszczę również formularz pozwalający sie skontaktować ze mną drogą mailową, oraz CV w postaci standardowego pliku PDF.</p>
          </Col>
          <Col>
            <h2>Edukacja</h2>
            <Education/>
          </Col>
        </Row>
        <Row id='skills' className='my-3'>
          <h2>Umiejętności</h2>
          <Skills />
        </Row>
        <Row className='my-3'>
            <MoreInfo title="Inne umiejętności" infoList={["Github - podstawowa znajomość serwisu i związanych z nim poleceń w konsoli (add, commit, push, pull)", "Angielski - znajomość języka na poziomie B2", "Photoshop - podstawowa znajomość programu i umiejętność modyfikowania grafiki"]} />
            <MoreInfo title="Kursy i certyfikaty" infoList={["PCAP: Programming Essentials in Python", "Udemy: React – Complete Guide 2025(Academind) (w trakcie)", "Udemy: Zaawansowane projekty w CSS i JavaScript (Samuraj Programowania)"]} />
        </Row>
        <Row id="contact" className='my-3'>
          <h2>Kontakt</h2>
          <Contact/>
        </Row>
      </Container>
    </>
  )
}

export default App
