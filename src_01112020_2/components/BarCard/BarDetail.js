import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import BarForm from '../BarCard/BarForm';
import Loginn from '../Login/Loginn';
import BarPic from './BarPic';
import './BarDetail.css'


function BarDetail({match}) {
    const barID = match.params.barID;
    const [images,setImages] = useState('');
    /*
    const [ bardetail, setBardetail] = useState({});
    useEffect(() => {
      axios.get("https://docs.google.com/document/d/1utsUs99LkGp568qHs9GB9eOB3p4KtV_7rl0FF7TE7wc/edit?usp=sharing").then(result => {
        const {data} = result;
        console.log(data);
        setBardata(data);
      });
    },[] );
    */

   useEffect(() => {
    axios.get(`http://35.240.130.253:3001/bars/${barID}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then((response) => {
                    // console.log(response.data);
                    setImages(response.data);
                });      
    },[])
    return (
        <div>
            <Navbar />
            <div>
                {/*<ul>{bardetail && bardetail.map(item => <li key={item._id}> {item._id} </li>)} </ul>*/}
                <br/><br/>
                <header>
                    <h1 className='nametext'>{images.BarName}</h1>
                </header>
                <br/>                    
                <BarPic barID={barID}/>
                {/* <section>
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
                </section> */}
                <p className='destext'>
                    Bar's Description: {images.BarDescription}<br/><br/>
                    Open-Time/Close-Time: {images.OpenTime}/{images.CloseTime}<br/><br/>
                    Close On: {images.CloseWeekDay}<br/><br/>
                    
                    LINE ID: {images.LineID}<br/>
                    {/* Tel: 012-345-6789<br/><br/> */}
                    Address: {images.Address}<br/><br/>
                    Bar's Rule: {images.BarRule}<br/><br />
                    {/* Bar's Rule: If you want larger table, please tell us<br/> one day before your reserved date<br/><br/> */}
                </p>
                <div className='rsdiv'>
                    <BarForm/>
                </div>
                <br/><br/><br/>
            </div>
        </div>
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
