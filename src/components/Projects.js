/* eslint-disable no-unused-vars */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.webp";
import projImg2 from "../assets/img/project-img2.webp";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/comingsoon.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AirBnb Clone",
      description: "My first project using Ruby on Rails",
      imgUrl: projImg1,
      link: "https://airbnb-v212.herokuapp.com/",
    },
    {
      title: "My-Pokedex",
      description: "My first project using React and consuming an API to display content",
      imgUrl: projImg2,
      link: "https://myownpokedex.herokuapp.com/",
    },
    {
      title: "Nudge 🐘",
      description: "Nudge is a mobile app that as ways to influence the behavior and decision-making of groups or individuals, improving decisions about health, wealth and happiness",
      imgUrl: projImg3,
      link: "https://www.thenudge.me/",
    },
    {
      title: "New Project Coming 😁",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "New Project Coming 😁",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "New Project Coming 😁",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my project section! Here, you'll find a collection of some of my most recent and notable work. Has a web developer, I have a diverse set of skills and interests that I've applied to various projects. I am constantly seeking new challenges and opportunities to learn and grow, and I hope my work demonstrates my passion for problem-solving and creativity. I invite you to explore and learn more about my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Why I love my Projects?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Motivations</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I love my projects because they allow me to express my creativity and problem-solving skills. Each project is a new opportunity to learn and grow, whether it's learning a new technology or developing a new skill. I enjoy the process of taking an idea and turning it into a tangible outcome, and the satisfaction that comes with it. I also love how my projects allow me to make a positive impact, whether it's through creating a useful tool or providing a solution to a problem. Additionally, my projects are a way for me to showcase my abilities and accomplishments, and to build a portfolio of my work.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>As a web developer, my motivations include creating user-friendly and visually appealing websites, solving problems, staying current with the latest technologies and trends, making a positive impact, continually learning, and building a portfolio of work that showcases my abilities and skills. I am passionate about using my skills to design and build websites that provide a positive user experience, and am constantly seeking new challenges and opportunities to learn and grow in my field.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
