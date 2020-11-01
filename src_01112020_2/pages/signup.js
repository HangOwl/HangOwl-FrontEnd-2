import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MyModal from '../Modal';

const Signup = () => {
    const [click, setClick] = useState(false);
    const [customerPath, setCustomerPath] = useState('/signup');
    const clickChange = () => {
        setClick(true);
    }
    console.log(customerPath);


    return (
        <div>
            <Navbar />
            <button>BAR</button>
            <button onClick={clickChange} >
                CUSTOMER
                {/* <MyModal items={customerPath} mystate={click} /> */}
            </button>            
        </div>
        
    )
}

export default Signup;