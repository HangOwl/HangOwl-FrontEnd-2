import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import BarPic from '../components/BarCard/BarPic';
import Navbar2 from '../components/Navbar/Navbar2';
import CustomerBarForm from './CustomerBarForm';
import './CustomerHome.css'
import CustomerBarPic from './CustomerBarPic';
import Rating from '@material-ui/lab/Rating';
import FavBar from './FavBar';


function CustomerBarDetail({match} : {match:any}) {
    
    const barID = match.params.barID;
    const [images,setImages] = useState<any>('');
    const [value,setValue] = useState<any>('');



    const params = (
        {
            "barId": `${barID}`,
        }
    );
    const favCLick = () => {
        console.log('cusID : ',window.cusID);
        axios.post(`http://35.240.130.253:3001/customers/${window.cusID}/favbars`, params,{
            headers: {
                'Authorization' : `${window.Auth}`,
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            console.log(response.data);
        });          
    }

    const favCLick2 = () => {
        console.log('cusID favClick2 : ',window.cusID);
        axios.delete(`http://35.240.130.253:3001/customers/${window.cusID}/favbars/${barID}`,{
            headers: {
                'Authorization' : `${window.Auth}`,
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            console.log(response.data);
        });          
    }

    useEffect(()=> {
            if(value == 1){
                favCLick();
            }
            if(value === null){
                favCLick2();
            }        
    }, [value]);



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
            <Navbar2 />
            <div className="bgg">
                {/*<ul>{bardetail && bardetail.map(item => <li key={item._id}> {item._id} </li>)} </ul>*/}
                <br/><br/>
                <header>
                    <h1 className='nametext'>{images.BarName}
                    <Rating name="customized-1"
                            defaultValue={0} 
                            max={1}     
                            value={value}
                            size="large"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                console.log('value ', value)
                                // CheckValue();
                            }}
                    />
                    </h1>
                </header>
                <br/>                    
                <CustomerBarPic barID={barID}/>
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
                    <CustomerBarForm barID={`${barID}`}/>
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

export default CustomerBarDetail;
