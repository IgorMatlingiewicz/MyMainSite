import { useState } from 'react'

import AppNavbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import MoreInfo from './components/MoreInfo';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Collapse } from 'react-bootstrap';

import contentPL from "./data/contentPL.json";
import contentEN from "./data/contentEN.json";

function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("PL");
  const [mode, setMode] = useState("dark");

  let content = language == "PL" ? contentPL : contentEN;

  return (
    <div className={mode == "dark" ? "bg-dark text-light" : "bg-light text-dark"}>
      <AppNavbar setLanguage={setLanguage} language={language} setMode={setMode} mode={mode}/>
      <Container className="mt-3">
        <Row id='home'>
          <Col md={6} xs={12}>
            <h2 className='text-primary'>{content.aboutMe["header"]}</h2>
            <p>
              {content.aboutMe["1"]} <a href="https://github.com/IgorMatlingiewicz" className='link-primary' target="_blank">GitHub</a>.
            </p>
            <Collapse in={open}>
              <div id="about-text">
                <p>{content.aboutMe["2"]}</p>
                <p>{content.aboutMe["3"]}</p>
              </div>
            </Collapse>
            <Button
              variant="warning"
              onClick={() => setOpen(!open)}
              aria-controls="about-text"
              aria-expanded={open}
              className="my-3 fw-bold"
            >
              {open ? content.aboutMe["hideText"] : content.aboutMe["showText"]}
            </Button >

            {/* <p>{content.aboutMe["1"]} <a href="https://github.com/IgorMatlingiewicz" className='link-primary' target="_blank">GitHub</a>.</p>
            <p>{content.aboutMe["2"]}</p>
            <p>{content.aboutMe["3"]}</p> */}

          </Col>
          <Col>
            <h2 className='text-primary'>{content.education["header"]}</h2>
            <Education language={language} mode={mode}/>
          </Col>
        </Row>
        <Row id='skills' className='mt-5'>
          <h2 className='text-primary'>{content.skills["header"]}</h2>
          <Skills language={language} mode={mode}/>
        </Row>
        <Row className="my-3">
          <MoreInfo title={content.OtherInfo["otherSkillsHeader"]} infoList={content.OtherInfo.OtherSkills} mode={mode}/>
          <MoreInfo title={content.OtherInfo["coursesHeader"]} infoList={content.OtherInfo.Courses} mode={mode}/>
        </Row>
        <Row id="projects" className='my-3'>
          <h2 className='text-primary'>{content.projects["header"]}</h2>
          <Projects language={language} mode={mode}/>
        </Row>
        <Row id="contact" className='my-3'>
          <h2 className='text-primary'>{content.contact["header"]}</h2>
          <Contact language={language} />
        </Row>
      </Container >
      <Footer language={language} mode={mode}/>
    </div>
  )
}

export default App
