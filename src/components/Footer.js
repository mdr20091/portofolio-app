import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Row className='text-center py-3'>
        <Col>Copyright {date} &copy; Matthew's Website</Col>
      </Row>
    </footer>
  );
};

export default Footer;
