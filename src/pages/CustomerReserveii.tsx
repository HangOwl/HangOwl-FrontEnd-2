import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';
import './CustomerHome.css'
import '../components/BarCard/Reserveii.css';
//import './BarForm.css'

function CustomerReserveii() {
  return (
    // <NavLink to='/Reserveii'>
    <div className='bgg'>
      <Navbar2 />

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

export default CustomerReserveii;