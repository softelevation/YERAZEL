import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import Ic_1 from '../../assets/images/ic_1.png';
import Ic_2 from '../../assets/images/ic_2.png';
import Ic_3 from '../../assets/images/ic_3.png'
export const Howgetrebate = props =>{
    return (
        <>
            <div className="howGetRetable margin-top-105">
              <Container>
                <h2 className="headline-box">How to get a rebate from Yerazel</h2>
                <Row>
                  <Col md="4" sm="6">
                    <div className="icon-box-1">
                      <div className="icon-container position-relative">
                        <img className="img-fluid" src={Ic_1} alt="icon" />
                        <div className="icon-links">
                          <a className="text-white" href="#">Register</a>
                        </div>
                      </div>
                      <h3>1. Register</h3>
                      <p>Register at Yerazel.com to signup and choose from our approved rebate Lenders.</p>
                    </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="icon-box-1">
                      <div className="icon-container position-relative">
                        <img className="img-fluid" src={Ic_2} alt="icon" />
                        <div className="icon-links">
                          <a className="text-white" href="#">Find Home</a>
                        </div>
                      </div>
                      <h3>2. Find your Home</h3>
                      <p>Search from our site or any other MLS property.</p>
                    </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="icon-box-1">
                      <div className="icon-container position-relative">
                        <img className="img-fluid" src={Ic_3} alt="icon" />
                        <div className="icon-links">
                          <a className="text-white" href="#">Get Rebate</a>
                        </div>
                      </div>
                      <h3>3. Get Rebate</h3>
                      <p>At the close of escrow, receive your Rebate!</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
      </>
    );
  }




