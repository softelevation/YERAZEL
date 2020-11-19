import React from "react";
import {Container, Row, Col, Form, Button, Accordion, Card } from "react-bootstrap";
import { Tabs, Tab } from 'react-bootstrap';
const  Stepform = props =>{
    return (
        <>
        <div className="formSection mt-5">
          <Container>
            <form className="main-search-form">
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Any Type">
                  <div className="innerForm">
                    <Row>
                      <Col md="9">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Enter address e.g. street, city and state or zip" />
                        </Form.Group>
                      </Col>
                      <Col md="3">
                        <Button className="customBtn w-100" variant="primary" type="submit">
                            Search
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option>Any Type</option>
                          <option>Any Type</option>
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Commercial</option>
                          <option>Garages</option>
                          <option>Lots</option>
                        </Form.Control>
                      </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                          <i class="data-unit">USD</i>
                          <Form.Control type="text" placeholder="Min Price" />
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                            <i class="data-unit">USD</i>
                            <Form.Control type="text" placeholder="Max Price" />
                          </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="text-left ">
                        <Accordion default="0">
                          <Card className="border-0">
                            <Card.Header>
                              <Accordion.Toggle as={Button} variant="link" eventKey="0" className="mb-2">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i> More Option
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body className="p-0">
                                <Row>
                                <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Min Area" />
                                      </Form.Group>
                                  </Col>
                                  <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Max Area" />
                                      </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Beds</option>
                                      <option>Beds 1</option>
                                      <option>Beds 2</option>
                                      <option>Beds 3</option>
                                      <option>Beds 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                  <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Baths</option>
                                      <option>Bath 1</option>
                                      <option>Bath 2</option>
                                      <option>Bath 3</option>
                                      <option>Bath 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                </Row>
                                <Row className="checkboxInput m-0">
                                  <Form.Group controlId="formBasicCheckbox1">
                                    <Form.Check type="checkbox" label="Air Conditioning" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox2">
                                    <Form.Check type="checkbox" label="Swimming Pool" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox3">
                                    <Form.Check type="checkbox" label="Central Heating" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox4">
                                    <Form.Check type="checkbox" label="Laundry Room" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox5">
                                    <Form.Check type="checkbox" label="Gym" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox6">
                                    <Form.Check type="checkbox" label="Alarm" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox7">
                                    <Form.Check type="checkbox" label="Window Covering" />
                                  </Form.Group>
                                </Row>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey={2} title="House">
                <div className="innerForm">
                    <Row>
                      <Col md="9">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Enter address e.g. street, city and state or zip" />
                        </Form.Group>
                      </Col>
                      <Col md="3">
                        <Button className="customBtn w-100" variant="primary" type="submit">
                            Search
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option>Any Type</option>
                          <option>Any Type</option>
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Commercial</option>
                          <option>Garages</option>
                          <option>Lots</option>
                        </Form.Control>
                      </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                          <i class="data-unit">USD</i>
                          <Form.Control type="text" placeholder="Min Price" />
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                            <i class="data-unit">USD</i>
                            <Form.Control type="text" placeholder="Max Price" />
                          </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="text-left ">
                        <Accordion default="0">
                          <Card className="border-0">
                            <Card.Header>
                              <Accordion.Toggle as={Button} variant="link" eventKey="0" className="mb-2">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i> More Option
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body className="p-0">
                                <Row>
                                <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Min Area" />
                                      </Form.Group>
                                  </Col>
                                  <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Max Area" />
                                      </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Beds</option>
                                      <option>Beds 1</option>
                                      <option>Beds 2</option>
                                      <option>Beds 3</option>
                                      <option>Beds 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                  <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Baths</option>
                                      <option>Bath 1</option>
                                      <option>Bath 2</option>
                                      <option>Bath 3</option>
                                      <option>Bath 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                </Row>
                                <Row className="checkboxInput m-0">
                                  <Form.Group controlId="formBasicCheckbox1">
                                    <Form.Check type="checkbox" label="Air Conditioning" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox2">
                                    <Form.Check type="checkbox" label="Swimming Pool" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox3">
                                    <Form.Check type="checkbox" label="Central Heating" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox4">
                                    <Form.Check type="checkbox" label="Laundry Room" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox5">
                                    <Form.Check type="checkbox" label="Gym" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox6">
                                    <Form.Check type="checkbox" label="Alarm" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox7">
                                    <Form.Check type="checkbox" label="Window Covering" />
                                  </Form.Group>
                                </Row>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey={3} title="Condos">
                <div className="innerForm">
                    <Row>
                      <Col md="9">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Enter address e.g. street, city and state or zip" />
                        </Form.Group>
                      </Col>
                      <Col md="3">
                        <Button className="customBtn w-100" variant="primary" type="submit">
                            Search
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option>Any Type</option>
                          <option>Any Type</option>
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Commercial</option>
                          <option>Garages</option>
                          <option>Lots</option>
                        </Form.Control>
                      </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                          <i class="data-unit">USD</i>
                          <Form.Control type="text" placeholder="Min Price" />
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                            <i class="data-unit">USD</i>
                            <Form.Control type="text" placeholder="Max Price" />
                          </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="text-left ">
                        <Accordion default="0">
                          <Card className="border-0">
                            <Card.Header>
                              <Accordion.Toggle as={Button} variant="link" eventKey="0" className="mb-2">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i> More Option
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body className="p-0">
                                <Row>
                                <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Min Area" />
                                      </Form.Group>
                                  </Col>
                                  <Col md="6">
                                    <Form.Group controlId="formBasicEmail" className="position-relative">
                                        <i class="data-unit">Sq Ft</i>
                                        <Form.Control type="text" placeholder="Max Area" />
                                      </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Beds</option>
                                      <option>Beds 1</option>
                                      <option>Beds 2</option>
                                      <option>Beds 3</option>
                                      <option>Beds 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                  <Col md="6">
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                      <option>Baths</option>
                                      <option>Bath 1</option>
                                      <option>Bath 2</option>
                                      <option>Bath 3</option>
                                      <option>Bath 4</option>
                                    </Form.Control>
                                  </Form.Group>
                                  </Col>
                                </Row>
                                <Row className="checkboxInput m-0">
                                  <Form.Group controlId="formBasicCheckbox1">
                                    <Form.Check type="checkbox" label="Air Conditioning" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox2">
                                    <Form.Check type="checkbox" label="Swimming Pool" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox3">
                                    <Form.Check type="checkbox" label="Central Heating" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox4">
                                    <Form.Check type="checkbox" label="Laundry Room" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox5">
                                    <Form.Check type="checkbox" label="Gym" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox6">
                                    <Form.Check type="checkbox" label="Alarm" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicCheckbox7">
                                    <Form.Check type="checkbox" label="Window Covering" />
                                  </Form.Group>
                                </Row>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                    </Row>
                  </div>
                </Tab>
              </Tabs>
            </form>
          </Container>
        </div>
      </>
    );
  }
export default Stepform



