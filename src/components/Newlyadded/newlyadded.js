import React from "react";
import {Container, } from "react-bootstrap";
import Stepform from '../Form/form';
export const Newlyadded = props =>{
    return (
        <>
        <div className="bannerSection ">
          <Container>
            <div className="bannerContent">
              <h1 className="text-white f-36">Get a Rebate On Your Dream Home</h1>
              <Stepform/>
            </div>
          </Container>
        </div>
      </>
    );
  }




