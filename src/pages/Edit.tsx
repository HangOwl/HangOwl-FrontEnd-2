import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';
import { Button}  from 'reactstrap';
import EditProfile from '../pages/EditProfile';
import EditEmail from '../pages/EditEmail';
import axios from 'axios';
import EditPassword from '../pages/EditPassword';
import './Edit.css'
import Axios from 'axios';


function Edit() {

    const [name, setName] = useState('');

    const handleChange = () => {
        return<div>{`${window.Name}`}</div>
    }

    useEffect(() => {
        axios.get(`http://35.240.130.253:3001/customers/${window.cusID}`, {
                headers: {
                    'Authorization': `${window.Auth}`
                }
            }).then((response) => {
                console.log(response);
                window.Name=response.data.Name;
            });
    }, [])
    return (
        <div className="bgg">
            <Navbar2 />
            <br/><br/><br/>
            <header>
                <h1 className='edittoptext'>Your Profile</h1>
            </header>
            <div className='centext'>
                <p className='edittext'>Name : {window.Name}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>&nbsp;< EditProfile /></p>
                <br/>
                <p className='edittext'>E-mail :{window.Email}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>&nbsp;< EditEmail /></p>
                <br/>
                <p className='edittext'>Password : **********</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>&nbsp;< EditPassword /></p>
                <br/>
            </div>
            <br/>
            <div className='cenbutton'>
                <NavLink to='/'>
                    <Button className='submitbut2'>
                        <p className='submittext3'>Save Edit</p>
                    </Button>
                </NavLink>
            </div>  
            <br/><br/>
        </div>
    );
}

export default Edit;
