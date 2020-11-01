import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import BarCard from './BarCard';
import axios from 'axios';
import './BarCardMatch.css'

function BarCardMatch() {
  return (
    <div>
      <Navbar/>
      <header>
        <h1 className='matchtext'>Match result</h1>
      </header>
      <BarCard/>
      <BarCard/>
      <BarCard/>
      <BarCard/>
      <BarCard/>
    </div>
  );
}

export default BarCardMatch;