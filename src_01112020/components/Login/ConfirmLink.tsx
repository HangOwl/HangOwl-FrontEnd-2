import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import './ConfirmLink.css';

function ConfirmLink(){
  return (
    <div >
      <Navbar />
      <br/><br/><br/><br/><br/>
      <h1 className='linktext'> We've sent confirmed link to your email.</h1>
      <br/><br/><br/>
    </div>
  );
}

export default ConfirmLink;