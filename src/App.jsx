import { useState } from 'react'
import AppNavbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './App.css'

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="bg-dark text-light mt-3">        
        <Row>
          <Col>
            <h2>O mnie</h2>
            <p>Jestem ambitną, młodą osobą chętną nanabycie nowej wiedzy i doświadczenia wbranży IT. Programowaniem i tworzeniem stron zainteresowałem się na początku technikum i od tej pory uczę się nowych rzeczy i technologii, robiąc przy tym małe projekty i strony. Posiadam tytuł technika z informatyki i aktualnie studiuje informatykę na Politechnice Śląskiej. Szukam pracy, w której rozwinę swoje umiejętności i nabędę też nowe z pomocą bardziej doświadczonych ludzi. Dotychczas najwięcej pracowałem we frontendzie, zrobiłem kilka do dziś aktywnych stron, ale chciałbym się również rozwinąć w obszarze backendu, głównie w języku Python.</p>
            <p>Strona ta ma być moim internetowym CV i opisać oraz pokazać moje zarówno umiejętności jak i doświadczenie. Niżej zamieszczę również formularz pozwalający sie skontaktować ze mną drogą mailową, oraz CV w postaci standardowego pliku PDF.</p>
          </Col>
          <Col>
            <h2>Edukacja</h2>
            <ul>
              <Education place="Politechnika Śląska w Gliwicach (2023 – obecnie)" fieldOfStudy="Informatyka" />
              <Education place="Techniczne Zakłady Naukowe w Częstochowie (2019-2023)" fieldOfStudy="Technik Informatyk" />
              <Education place="EduPlus – dwutygodniowe praktyki z Erasmus+" fieldOfStudy="Praktyki podczas których programowałem aplikacje w technologii Windows Forms w anglojęzycznym zespole" />
              <Education place="Jupiter – szkoła frontendu i tworzenia gier (2021-2023)" fieldOfStudy="Zajęcia z tworzenia stron internetowych" />
            </ul>
          </Col>
        </Row>
        <Row>
          <h2>Umiejętności</h2>
          <Skills/>
        </Row>
      </Container>
    </>
  )
}

export default App
