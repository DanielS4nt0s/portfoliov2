/* eslint-disable no-unused-vars */
import js_img from "../assets/img/js-img.png"
import ruby_img from "../assets/img/ruby-img.png"
import html_img from "../assets/img/html-img.png"
import github_img from "../assets/img/github-img.png"
import sql_img from "../assets/img/sql-img.png"
import ubuntu_img from "../assets/img/ubuntu-img.png"
import figma_img from "../assets/img/figma-img.png"
import heroku_img from "../assets/img/heroku-img.png"
import react_img from "../assets/img/react-img.png"
import rails_img from "../assets/img/rails-img.png"
import css_img from "../assets/img/css-img.jpg"
import git_img from "../assets/img/git-img.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Welcome to my skills section! Here, you'll find an overview of my technical expertise and abilities. I have a diverse set of skills and experience in various programming languages and technologies, including HTML, CSS, JavaScript, and Ruby. I am constantly seeking new challenges and opportunities to learn and grow.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={ruby_img} alt="Meter" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={rails_img} alt="Meter" />
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={js_img} alt="Meter" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react_img} alt="Meter" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={html_img} alt="Meter" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css_img} alt="Meter" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={github_img} alt="Meter" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={git_img} alt="Meter" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={sql_img} alt="Meter" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={ubuntu_img} alt="Meter" />
                                <h5>Ubuntu</h5>
                            </div>
                            <div className="item">
                                <img src={figma_img} alt="Meter" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={heroku_img} alt="Meter" />
                                <h5>Heroku</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
