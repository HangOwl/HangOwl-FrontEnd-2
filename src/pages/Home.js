import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Welcome from '../Pics/Welcome_To_HangOwl.png';
import '../components/BarCard/BarCard.css'
import '../components/BarCard/BarCardHome.css'
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <br/><br/><br/>
      <div>
        <img className='welcome' src={Welcome} alt="" />
      </div>
      <header>
        <h1 className='rectext'><br/><br/><br/>Let's have a look for some recommended Bars :)</h1>
      </header>
      <NavLink to='/test1'>
        <div className="box">
          <div className="box1st">
            <div className="textInBox1st">
              Bar Pic
            </div>
          </div>
          <div className="box2nd">
            <div className="textInBox2nd">
              Bar's Name
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to='/test1'>
        <div className="box">
          <div className="box1st">
            <div className="textInBox1st">
              Bar Pic
            </div>
          </div>
          <div className="box2nd">
            <div className="textInBox2nd">
              Bar's Name
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to='/test1'>
        <div className="box">
          <div className="box1st">
            <div className="textInBox1st">
              Bar Pic
            </div>
          </div>
          <div className="box2nd">
            <div className="textInBox2nd">
              Bar's Name
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to='/test1'>
        <div className="box">
          <div className="box1st">
            <div className="textInBox1st">
              Bar Pic
            </div>
          </div>
          <div className="box2nd">
            <div className="textInBox2nd">
              Bar's Name
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to='/test1'>
        <div className="box">
          <div className="box1st">
            <div className="textInBox1st">
              Bar Pic
            </div>
          </div>
          <div className="box2nd">
            <div className="textInBox2nd">
              Bar's Name
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Home;
