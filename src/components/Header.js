import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <Navbar
        bg="p-3  bg-primary text-white"
        expand="lg"
        collapseOnSelect
        fixed
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Nav.Item className="text-light">Matthew's Website</Nav.Item>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
           
                
                 
             

              <Nav.Item >
                <a href="docs/resume12.docx" download className="text-light  px-2" >
                  Resume Download
                </a>
              </Nav.Item>

              <Nav.Item className="text-light">
                <a href="//github.com/mdr20091">
                  <FontAwesomeIcon
                    className="text-light"
                    ariaHidden="true"
                    viewBox="0 0 512 512"
                    focusable="false"
                    icon={faGithub}
                  />
                </a>
              </Nav.Item>
              
                <Nav.Item >
                <a href="//www.linkedin.com/in/matthew-rodriguez-14ba24172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz2dxQzYcTsmWhRXC9hymiw%3D%3D" className="text-white px-2">
                  <FontAwesomeIcon
                    ariaHidden="true"
                    viewBox="0 0 512 512"
                    focusable="false"
                    icon={faLinkedin}
                  />
                  </a>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
