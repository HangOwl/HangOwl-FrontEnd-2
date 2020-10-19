import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import './BarDetail.css'

function BarDetail(props) {
  return (
    <NavLink to='/test1'>
        <Navbar />
        <div>
            <header>
                <h1 className='nametext'>Bar's Name</h1>
            </header>
            <section>
                <div className="box0">
                    <p className="boxtext">
                        Bar<br/>
                        Pic
                    </p>
                </div>
            </section>
            <section>
                <div className="box1">
                    <p className="boxtext">
                        Bar<br/>
                        Pic
                    </p>
                </div>
                <div className="box2">
                    <p className="boxtext">
                        Bar<br/>
                        Pic
                    </p>
                </div>
            </section>
            <p className='destext'>
                Bar's Description: The great bar with the great views<br/><br/>
                Open-Time/Close-Time: 18.00 PM- 12.00 AM<br/><br/>
                Close On: Monday<br/><br/>
                Bar's Rule: If you want larger table, please tell us<br/> one day before your reserved date<br/><br/>
                LINE ID: Bar123456<br/>
                Tel: 012-345-6789<br/><br/>
                Address: 123 Soi Phaholyothin, Ladyao Subdistrict,<br/> Chatuchak District, Bangkok 10900<br/><br/>
                Bar's Rule: If you want larger table, please tell us<br/> one day before your reserved date<br/><br/>
            </p>
            <div className='rsdiv'>
                <Button className='rsbutton'>
                    <b className='rstext'>Reserve</b>
                </Button>
            </div>
            <br/><br/><br/>
        </div>
    </NavLink>
  );
}

/*
function BarDetail(props: { isLogin: any; }) {
    const isLogin = props.isLogin;
    return(<BarDescription/>);
    if (isLogin){
        return <ReserveForm/>;
    }return <Login/>;
}
*/

export default BarDetail;
