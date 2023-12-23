// ProjectCard.js
import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card className="project-card h-100">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <div className="image-card">
            <img src={imgUrl} alt={title} className="img-fluid" />
          </div>
        </a>
        <Card.Body className="d-flex flex-column text-left">
          <div>
            <h3 className="mb-3">{title}</h3>
            <h6>{description}</h6>
          </div>
          <Button href={websiteUrl} target="_blank" rel="noopener noreferrer" variant="dark" className="mt-auto">
            View Projects
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
