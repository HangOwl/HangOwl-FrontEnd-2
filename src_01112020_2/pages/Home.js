import React from 'react';
import { NavLink } from 'react-router-dom';
import Welcome from '../Pics/Welcome_To_HangOwl.png';
import Navbar from '../components/Navbar/Navbar';
import BarCard from '../components/BarCard/BarCard';
import './Home.css'

function Home() {
  //const isLogin = props.isLogin;
  return (
    <div>
      <Navbar/>
      <br/><br/><br/>
      <div>
        <img src={Welcome} className="welcome" alt="" />
      </div>
      <header>
        <h1 className='rectext'><br/><br/><br/>Let's have a look for some recommended Bars :)</h1>
      </header>
      <BarCard/>
    </div>
  );
}


export default Home;