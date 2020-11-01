import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';
import { Button}  from 'reactstrap';
import EditProfile from '../pages/EditProfile';
import EditEmail from '../pages/EditEmail';
import EditPassword from '../pages/EditPassword';
import './Edit.css'


function Edit() {
    return (
        <div className="bg">
            <Navbar2 />
            <br/><br/><br/>
            <header>
                <h1 className='edittoptext'>Your Profile</h1>
            </header>
            <div className='centext'>
                <p className='edittext'>Name : Mr. Somchai</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>&nbsp;< EditProfile /></p>
                <br/>
                <p className='edittext'>E-mail : Som1***@****.com</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
