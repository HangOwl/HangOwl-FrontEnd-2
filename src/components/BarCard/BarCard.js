import React from 'react';
import { NavLink } from 'react-router-dom';
import './BarCard.css'
import Navbar from '../Navbar/Navbar';


function BarCard() {
//   const isLogin = props.isLogin;
  return (
    <div>
        <Navbar />
      <header>
        <h1 className='matchtext'>Match result</h1>
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

export default BarCard;