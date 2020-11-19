import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import Popular_img1 from '../../assets/images/popular_img1.jpg';
import Popular_img2 from '../../assets/images/popular_img2.jpg';
import Popular_img3 from '../../assets/images/popular_img3.jpg';
import Popular_img4 from '../../assets/images/popular_img4.jpg';
 const Popularplaces = props =>{
    return (
        <>
            <div className="popularPlaces sectionMarginTop">
              <Container>
                <h2>Most Popular Places</h2>
                <span>Properties In Most Popular Places</span>
                <Row className="mt-5">
                  <Col md="4">
                    <a className="img-box" href="#">
                    <div className="listing-badges">
                        <span className="featured">Featured</span>
                    </div>
                    <div className="img-box-content visible">
                        <h4>Burbank </h4>
                        <span>14 Properties</span>
                    </div>
                    <div class="img-box-background" style={{backgroundImage: `url(${Popular_img1}` }}></div>
                    </a>
                  </Col>
                  <Col md="8">
                    <a className="img-box" href="#">
                      <div className="img-box-content visible">
                          <h4>North Hollywood </h4>
                          <span>24 Properties</span>
                      </div>
                      <div class="img-box-background" style={{backgroundImage: `url(${Popular_img2}` }}></div>
                      </a>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                      <a className="img-box" href="#">
                        <div className="img-box-content visible">
                            <h4>Van Nuys </h4>
                            <span>12 Properties</span>
                        </div>
                        <div class="img-box-background" style={{backgroundImage: `url(${Popular_img3}` }}></div>
                        </a>
                    </Col>
                    <Col md="4">
                      <a className="img-box" href="#">
                        <div className="img-box-content visible">
                            <h4>Sun Valley</h4>
                            <span>25 Properties</span>
                        </div>
                        <div class="img-box-background" style={{backgroundImage: `url(${Popular_img4}` }}></div>
                        </a>
                    </Col>
                </Row>
              </Container>
            </div>
      </>
    );
  }
export default Popularplaces



