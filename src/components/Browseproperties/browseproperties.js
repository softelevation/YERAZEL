import React from "react";
import {Container, Row, Col } from "react-bootstrap";

const Browseproperties = props =>{
    return (
        <>
            <div className="browserProperties">
                <a href="#" className="flip-banner parallax" >
                  <div class="parallax-overlay"></div>
                    <div class="flip-banner-content">
                        <h2 class="flip-visible">We help people and homes find each other</h2>
                        <h2 class="flip-hidden">Browse Properties <i class="fa fa-angle-right" aria-hidden="true"></i></h2>
                    </div>
                </a>
            </div>
      </>
    );
  }

  export default Browseproperties




