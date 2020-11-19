import React from "react";
import {Navbar, Nav, Container, Form, FormControl, Button, ListGroup } from "react-bootstrap";
import Logo from '../../assets/images/logo.png'
export const Topbar = props =>{
    return (
        <>
        <div className="topBar ">
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div className="contact-detail d-flex">
                  <p className="mb-0 text-white mr-4"><i class="fa fa-phone mr-2" aria-hidden="true"></i> (855) YERAZEL</p>
                  <p className="mb-0 text-white"><i class="fa fa-envelope mr-2" aria-hidden="true"></i> office@yerazel.com</p>
              </div>
              <div className="socialIcon">
              <ListGroup className="social-list">
                  <ListGroup.Item><a className="text-white" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></ListGroup.Item>
                  <ListGroup.Item><a className="text-white" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></ListGroup.Item>
                  <ListGroup.Item><a className="text-white" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></ListGroup.Item>
                  <ListGroup.Item><a className="text-white" href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></ListGroup.Item>
              </ListGroup>
              </div>
              </div>
              </Container>
          </div>
        <Navbar className="sticky p-0" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="mr-md-5 mr-4"><img className="img-fluid" src={Logo} alt="logo" width="185px" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Home Search</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <div className="ml-auto">
                <Button className="loginBtn"><i class="fa fa-sign-out" aria-hidden="true"></i> Log In</Button>
                <Button className="registerBtn">Register for Rebate</Button>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }




