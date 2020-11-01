import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './BarCard.css'

function BarCard() {
//   const isLogin = props.isLogin;
    return (
        <div>
        <NavLink to='/BarDetail'>
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