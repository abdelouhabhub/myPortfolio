// Projects.js
import React from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Portfolio from '../assets/images/logos/portfolio.png';
import Github from '../assets/images/github.png';
import Mostaql from '../assets/images/mostaql.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'My Content Writings.',
      description: 'Writing & Editing, My Content Writings as a Freelancer @ Mostaql Plateform.',
      imgUrl: Mostaql,
      websiteUrl: 'https://mostaql.com/u/abdelouhab_bmrf',
    },
    {
      title: 'My Github Repositories.',
      description: 'My Github Repositories.',
      imgUrl: Github,
      websiteUrl: 'https://github.com/abdelouhabhub',
    },
    {
      title: 'My Portfolio Website.',
      description:
        'My Portfolio Website, MERN Web Application USING React, Node, Express, MongoDB and Bootstrap.',
      imgUrl: Portfolio,
      websiteUrl: '/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2 className="mt-4">My Recent Projects!</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
