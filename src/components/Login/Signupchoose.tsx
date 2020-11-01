import React from 'react';
import { Col } from 'reactstrap';
import Signupcus from '../Login/Signupcus';
import Signupbar from '../Login/Signupbar';
import 'bootstrap/dist/css/bootstrap.css';
import './Signupchoose.css'
import Navbar from '../Navbar/Navbar';


function Signupchoose(){
  return (
    <div >
      <Navbar />
      <br/><br/>
      <h1 className='signupas'> You're sign up as...</h1>
      <br/><br/><br/>
      <Col className='cenbutton'>
        <Signupcus/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Signupbar/>
      </Col>
    </div>
  );
}

export default Signupchoose;