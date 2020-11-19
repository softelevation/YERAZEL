import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import Logo from '../../assets/images/logo.png'
const Footer = props =>{
    return (
        <>
            <div className="sticky-footer" id="footer">
              <Container>
                <Row>
                <Col md="5" sm="6" className="text-left">
                  <img className="img-fluid" src={Logo} alt="icon" width="190px" />
                  <p className="my-4">Yerazel is committed to adding value, by connecting people. This platform was designed to ease the home buying process and allow the consumer to enjoy a rebate from their own efforts.</p>
                  <p>Website is a service of Remax Empower
				              Ed Sanchez Broker/Owner CalBRE No. 01293683</p>
                </Col>
                <Col md="4" sm="6">
                  <h4>Helpful Links</h4>
                  <ul className="footer-links">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                  <ul className="footer-links">
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                </Col>
                <Col md="3" sm="12">
                  <h4>Contact Us</h4> 
                  <div className="text-widget text-left">
                    <p>701 S Victory Blvd, Burbank CA 91502</p> 
                    <p>Phone: (855) YERAZEL 937-2935 </p>
                    <p>E-Mail: <a href="#">office@yerazel.com</a> </p>
                  </div>
                  <ul className="social-icons-footer margin-top-20 p-0 text-left">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="copyrights">© 2020 Remax Empower. All Rights Reserved.</div>
                  </Col>
                </Row>
              </Container>
            </div>
      </>
    );
  }

  export default Footer




