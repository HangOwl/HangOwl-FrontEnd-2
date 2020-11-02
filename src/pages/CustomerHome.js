import React, {useEffect} from 'react';
import Navbar2 from '../components/Navbar/Navbar2';
import Welcome from '../Pics/Welcome_To_HangOwl.png';
import CustomerBarCard from './CustomerBarCard';
import BarPic2 from '../components/BarCard/BarPic2';
import axios from 'axios';
import './CustomerHome.css'
import FavoriteBar from './FavoriteBar';

const CustomerHome = () => {
    useEffect(() => {
        axios.get(`http://35.240.130.253:3001/customers/${window.cusID}`, {
                headers: {
                    'Authorization': `${window.Auth}`
                }
            }).then((response) => {
                console.log(response);
                window.Name=response.data.Name;
                window.Email = response.data.Email;
            });
    }, [])
    return (
        <div className="bgg">
            <Navbar2/>
            <br/><br/><br/>
            <div>
                <img src={Welcome} className="welcome" alt="" />
            </div>
            <header>
                <h1 className='rectext'><br/><br/><br/>Let's have a look for some recommended Bars :)</h1>
            </header>
            {/* <CustomerBarCard/> */}
            
            &nbsp;
            <h1 className='rectext2'><br/>Your Favorite Bar</h1>
            <br />
            <FavoriteBar />
            <br/><br/>
            <h1 className='rectext2'><br/>All Bars</h1>
            <CustomerBarCard />

        </div>
    );
};

export default CustomerHome;