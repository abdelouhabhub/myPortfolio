import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Import Logos Icons */
import jsLogo from "../assets/images/logos/jsLogo.png";
import nodejsLogo from "../assets/images/logos/node-js.png";
// import Logo from "../assets/images/logos/node-js.png";
import CSS3 from "../assets/images/logos/css-3.png";
import Django from "../assets/images/logos/django.png";
import Docker from "../assets/images/logos/docker.png";
import Git from "../assets/images/logos/git.png";
import Html5 from "../assets/images/logos/html.png";
import Language from "../assets/images/logos/language-skills.png";
import MongoDB from "../assets/images/logos/mongodb.png";
import MySQL from "../assets/images/logos/mysql.png";
// import Next from "../assets/images/logos/next-js.svg";
// import Overleaf from "../assets/images/logos/overleaf.svg";
import Python from "../assets/images/logos/python.png";
import Solution from "../assets/images/logos/solution.png";
import Vue from "../assets/images/logos/vue-dot-js.png";
import Nuxt from "../assets/images/logos/nuxt-icon.svg";
import Nest from "../assets/images/logos/nest.svg";
import React from "../assets/images/logos/react.png";


const Skills = () => {
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
                        <h2>Overview. & My Skills</h2>
                        <p>As a freelancer writer at Mostaql, I create engaging and informative web content in Arabic and English for various clients in the tech industry. I have worked on topics such as e-learning, graphic design, web development, and freelancing, delivering high-quality and timely articles that meet the specifications and expectations of my clients,
                        As a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) Web Developer, I specialize in crafting robust and scalable web applications. My expertise spans the entire development process, from designing and implementing backend systems using MongoDB and Node.js to creating responsive and intuitive user interfaces with React.js.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={jsLogo} alt="js" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={nodejsLogo} alt="nodejs" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="React" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={Html5} alt="Html5" />
                                <h5>Html5</h5>
                            </div>
                            <div className="item">
                                <img src={CSS3} alt="CSS3" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={MySQL} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={MongoDB} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            {/* <div className="item">
                                <img src={Overleaf} alt="Overleaf" />
                                <h5>Overleaf Latex</h5>
                            </div> */}
                            <div className="item">
                                <img src={Python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="Git" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={Vue} alt="Vue" />
                                <h5>Vue Js</h5>
                            </div>
                            {/* <div className="item">
                                <img src={Nuxt} alt="Nuxt" />
                                <h5>Nuxt</h5>
                            </div> */}
                            <div className="item">
                                <img src={Nest} alt="Nest" />
                                <h5>Nest Js</h5>
                            </div>
                            {/* <div className="item">
                                <img src={Next} alt="Next" />
                                <h5>Next Js</h5>
                            </div> */}
                            {/* <div className="item">
                                <img src={Nuxt} alt="Nuxt" />
                                <h5>Nuxt Js</h5>
                            </div> */}
                            <div className="item">
                                <img src={Django} alt="Django" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={Docker} alt="Docker" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Solution} alt="Solution" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={Language} alt="Language"/>
                                <h5>Content Writings</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;