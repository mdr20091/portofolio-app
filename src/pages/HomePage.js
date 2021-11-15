import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Badge,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <Fragment>
      <section className="headerBg">
        <Container
          className="headerBg text-white py-5 center-block header-intro theme-bg-primary "
          flex
        >
          <section>
            <Row>
              <Col xs={3} className="md-auto text-center ">
                <Image
                style={({ width: '200px' }, { height: '200px' })}
                  src="images/IMG_2311.jpg"
                  rounded
                  className="profile-image mb-3 mb-lg-0 ms-md-0 mx-auto"
                />
              </Col>
              <Col xs={5}>
                <p>Hi, my name is</p>
                <h1 className=" mt-0 display-4 fw-bold">Matthew Rodriguez</h1>
                <p>
                  I'm a full-stack developer, movtivated all the time for my
                  next project!
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
      <section style={{ backgroundColor: '#F8F8F8' }}>
        <Container style={{ backgroundColor: '#F8F8F8' }}>
          <section>
            <div>
              <h1 className="mx-auto py-5 " style={{ width: '350px' }}>
                Overview of my skills
              </h1>
              <p className="mx-auto text-center mb-5 text-secondary">
                I am an entry level fullstack software developer. I have had
                around 10 months of experiance in software developerment and an
                addtion that I have 4 months of IT experiance.
              </p>
            </div>
          </section>
          <section>
          <Container>
            <Row>
              <Col>
                <Card
                  style={({ width: 'auto' }, { height: 'auto' })}
                  className="rounded bg-white shadow-sm mb-3 py-3 px-3 position-relative border-0"
                >
                  <Card.Img
                    style={({ width: '200px' }, { height: '200px' })}
                    className="rounded"
                    variant="top"
                    src="images/frontEnd.jpg"
                  />
                  {/* FRONTEND */}
                  <Card.Body>
                    <Card.Title className="mx-auto py-2 text-center">
                      Frontend
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span> React/Redux</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span> JavaScript</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span> HTML/CSS</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span> Node.js</span>
                      </ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={({ width: 'auto' }, { height: 'auto' })}
                  className="rounded bg-white shadow-sm  py-3 px-3 mb-3 position-relative border-0 "
                >
                  <Card.Img
                    className="rounded"
                    style={({ width: '200px' }, { height: '200px' })}
                    variant="top"
                    src="images/backend.jpg"
                  />
                  {/* BACKEND */}
                  <Card.Body>
                    <Card.Title className="mx-auto py-2 text-center">
                      Backend
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                        />
                        <span> Java</span>
                      </ListGroupItem>{' '}
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                        />
                        <span> JSON/MySQL/ MangoBD</span>
                      </ListGroupItem>{' '}
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                        />
                        <span> Android OS</span>
                      </ListGroupItem>{' '}
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                        />
                        <span> Python</span>
                      </ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={({ width: 'auto' }, { height: 'auto' })}
                  className="rounded bg-white shadow-sm py-3 mb-3 px-3 position-relative border-0"
                >
                  <Card.Img
                    style={({ width: '200px' }, { height: '200px' })}
                    className="rounded"
                    variant="top"
                    src="images/programmer.png"
                  />
                  <Card.Body>
                    <Card.Title className="mx-auto py-2 text-center">
                      Other
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          focusable="false"
                        />
                        <span> Hardware Installation </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          focusable="false"
                        />
                        <span> Unit Testing</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          focusable="false"
                        />
                        <span> IT TroubleShooting</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          style={{ color: 'rgb(118, 170, 219)' }}
                          icon={faCheck}
                          focusable="false"
                        />
                        <span> CISCO Networking</span>
                      </ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Container>
          </section>
        </Container>
      </section>

      <section style={{ backgroundColor: '#F8F8F8' }}>
        <Container style={{ backgroundColor: '#F8F8F8' }}>
          <section>
            <div>
              <h1 className="mx-auto py-5" style={{ width: '150px' }}>
                Projects
              </h1>
            </div>
          </section>

          <section>
            <Row>
              <Col>
                <Card
                  style={({ width: '296px' }, { height: '406px' })}
                  className="rounded bg-white shadow-sm py-3 mb-3 px-3 position-relative border-0"
                >
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="images/phone.jpg"
                    style={({ width: '100px' }, { height: '200px' })}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">Capstone</Card.Title>
                    <Card.Text>
                      My Capstone Project I worked during my final semester of college was 
                      on creating an Android application that was made from Java for a Company 
                      called Meridian Bird Removal.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  style={({ width: 'auto' }, { height: 'auto' })}
                  className="rounded bg-white shadow-sm py-3 mb-3 px-3 position-relative border-0 text-center"
                >
                  <Card.Img
                    className="rounded "
                    src="images/office.jpg"
                    style={({ width: '100px' }, { height: '200px' })}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Self Learning
                    </Card.Title>
                    <Row className="py-3">
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">Java</Badge>
                          </span>
                        </h4>
                      </Col>
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">Spring.io</Badge>
                          </span>
                        </h4>
                      </Col>{' '}
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">React.js</Badge>
                          </span>
                        </h4>
                      </Col>{' '}
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">JSON</Badge>
                          </span>
                        </h4>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={({ width: '296px' }, { height: '406px' })}
                  className="rounded bg-white shadow-sm py-3 mb-3 px-3 position-relative border-0 text-center"
                >
                  <Card.Img
                    className="rounded "
                    src="images/gears.png"
                    style={({ width: '100px' }, { height: '200px' })}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">Other </Card.Title>
                    <Row className="py-3">
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">Vehicle work</Badge>
                          </span>
                        </h4>
                      </Col>
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">Handy Man</Badge>
                          </span>
                        </h4>
                      </Col>{' '}
                      <Col>
                        <h4>
                          <span>
                            <Badge className="rounded">Great Husban</Badge>
                          </span>
                        </h4>
                      </Col>{' '}
                      
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          
        </Container>
      </section>
    </Fragment>
  );
};

export default HomePage;
