// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
        {/* <Row className="align-items-center">
          <Col size={20} sm={6} className="text-center text-sm-end">
            <p>Abdelouahab Boumaraf</p>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;
