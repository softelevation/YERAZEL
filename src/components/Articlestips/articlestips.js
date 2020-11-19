import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import Blogpost1 from '../../assets/images/blog-post-01.jpg';
import Blogpost2 from '../../assets/images/blog-post-02.jpg';
import Blogpost3 from '../../assets/images/blog-post-03.jpg'
const Articlestips = props =>{
    return (
        <>
            <div className="howGetRetable margin-top-105">
              <Container>
                <h2 className="headline-box">Articles & Tips</h2>
                <Row className="mt-3">
                  <Col md="4" sm="6">
                    <div className="blog-post">
                      <a href="#" class="post-img">
                          <img className="img-fluid" src={Blogpost1} alt="blog post" />
                      </a>
                      <div className="post-content">
                          <h3><a href="#">8 Tips to Help You Finding New Home</a></h3>
                          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

                          <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                      </div>

                      </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="blog-post">
                      <a href="#" class="post-img">
                          <img className="img-fluid" src={Blogpost2} alt="blog post" />
                      </a>
                      <div className="post-content">
                          <h3><a href="#">Bedroom Colors You'll Never Regret</a></h3>
                          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>
                          <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </Col>
                  <Col md="4" sm="6">
                    <div className="blog-post">
                      <a href="#" class="post-img">
                          <img className="img-fluid" src={Blogpost3} alt="blog post" />
                      </a>
                      <div className="post-content">
                          <h3><a href="#">What to Do a Year Before Buying Apartment</a></h3>
                          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae.</p>
                          <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
      </>
    );
  }

  export default Articlestips




