import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import AppNavbar from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import MoreInfo from './components/MoreInfo';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import HexagonPattern from './components/HexagonPattern';
import BracketsPattern from './components/patterns/BracketsPattern';
import RipplePattern from './components/patterns/RipplePattern';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import contentPL from "./data/contentPL.json";
import contentEN from "./data/contentEN.json";
import "./about.css";

function App() {
  const [language, setLanguage] = useState("PL");
  const [mode, setMode] = useState("dark");

  let content = language === "PL" ? contentPL : contentEN;

  useEffect(() => {
    AOS.init({ duration: 700, once: false, offset: 80 });
  }, []);

  const mainBg = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  const altBg  = mode === "dark" ? "section-alt-dark text-light" : "section-alt-light text-dark";

  return (
    <div className={mainBg} data-mode={mode}>
      <AppNavbar setLanguage={setLanguage} language={language} setMode={setMode} mode={mode}/>

      {/* Sekcja: O mnie */}
      <section id="home" className={`${mainBg} py-5`} style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground mode={mode} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="mb-4">
            <Col data-aos="fade-down">
              <h2 className="section-title text-primary">{content.navbar["home"]}</h2>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6} xs={12} className="mb-4 mb-md-0" data-aos="fade-right">
              <h4 className="text-primary mb-3">{content.aboutMe["header"]}</h4>
              <div className="mb-3">
                <p className="about-icon mb-2">💼 {content.aboutMe["1"]}</p>
              </div>
              <div className="mb-3">
                <p className="about-icon mb-2">🎓 {content.aboutMe["2"]}</p>
              </div>
              <div className="mb-3">
                <p className="about-icon mb-2">🚀 {content.aboutMe["3"]}</p>
              </div>
            </Col>
            <Col md={6} xs={12} data-aos="fade-left">
              <h4 className="text-primary mb-3">{content.education["header"]}</h4>
              <Education language={language} mode={mode}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} data-aos="fade-up">
              <h4 className="text-primary mb-3">{content.experience?.header}</h4>
              <Experience language={language} mode={mode} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sekcja: Umiejętności */}
      <section id="skills" className={`${altBg} py-5`} style={{ position: 'relative', overflow: 'hidden' }}>
        <HexagonPattern mode={mode} position="center-left" />
        <HexagonPattern mode={mode} position="bottom-right" />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="mb-2">
            <Col data-aos="fade-down">
              <h2 className="section-title text-primary">{content.skills["header"]}</h2>
            </Col>
          </Row>
          <Row data-aos="fade-up">
            <Skills language={language} mode={mode}/>
          </Row>
          <Row className="mt-4" data-aos="fade-up" data-aos-delay="100">
            <MoreInfo title={content.OtherInfo["otherSkillsHeader"]} infoList={content.OtherInfo.OtherSkills} mode={mode}/>
            <MoreInfo title={content.OtherInfo["coursesHeader"]} infoList={content.OtherInfo.Courses} mode={mode}/>
          </Row>
        </Container>
      </section>

      {/* Sekcja: Projekty */}
      <section id="projects" className={`${mainBg} py-5`} style={{ position: 'relative', overflow: 'hidden' }}>
        <BracketsPattern mode={mode} position="center-right" />
        <BracketsPattern mode={mode} position="bottom-left" />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="mb-2">
            <Col data-aos="fade-down">
              <h2 className="section-title text-primary">{content.projects["header"]}</h2>
            </Col>
          </Row>
          <div data-aos="fade-up">
            <Projects language={language} mode={mode}/>
          </div>
        </Container>
      </section>

      {/* Sekcja: Kontakt */}
      <section id="contact" className={`${altBg}`} style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0 6rem' }}>
        <RipplePattern mode={mode} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="mb-2">
            <Col data-aos="fade-down">
              <h2 className="section-title text-primary">{content.contact["header"]}</h2>
            </Col>
          </Row>
          <div data-aos="fade-up">
            <Contact language={language} mode={mode} />
          </div>
        </Container>
      </section>


      <Footer language={language} mode={mode}/>
    </div>
  )
}

export default App
