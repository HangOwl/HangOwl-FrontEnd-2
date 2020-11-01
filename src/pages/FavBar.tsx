import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BarCard from '../components/BarCard/BarCard';
import axios from 'axios';

function FavBar() {
  return (
    <div className="bg">
      <Navbar/>
      <br/><br/>
      <header>
        <p className='edittoptext'>Your Favorite Bars</p>
      </header>
      <BarCard/>
      <BarCard/>
      <BarCard/>
      <BarCard/>
      <BarCard/>
      &nbsp;
    </div>
  );
}

export default FavBar;