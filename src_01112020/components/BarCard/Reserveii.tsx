import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Reserveii.css'
import './BarForm.css'

function Reserveii() {
  return (
    // <NavLink to='/Reserveii'>
    <div>
      <Navbar />

      <div className='rsidpos'>
        <p className='rsidtext'>
          <br/><br/>
          {console.log('reserve id: ', window.Reserveid)}
          Your Reserve ID is<br/><br/>
          {window.Reserveid}<br/><br/>
          {/* Your reserved ID is {window.Reserveid}<br/> */}
          We'll send E-mail of this ID and receipt to you. Don't worry :)
        </p>
        <br/><br/><br/>
        </div>
      <div className='rsidpos'>
        <p className='rsidtext2'>
          You can check<br/>your status here!
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button className='rsidbutton'>
          <b className='rsidtext3'> Check Status </b>
        </Button>
      </div>
    {/* </NavLink> */}
  </div>
  );
}

export default Reserveii;