import React, { useState, useEffect, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button }  from 'reactstrap';
import axios from 'axios';
import './StatusCard.css'

function Card0() {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='white'>[ Pending ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>Bar's Name | 3 people | date : 10/01/2020</p>
                <br/>
                <div className='cenbutton'>
                    <Button className='stbut1'>
                        <p className='submittext'>Edit reserved details</p>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='stbut2'>
                        <p className='submittext'>Cancel reserved</p>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Card1() {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='green'>[ Accepted ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>Bar's Name | 3 people | date : 10/01/2020</p>
                <br/>
                <Button className='stbut2'>
                        <p className='submittext'>Cancel reserved</p>
                </Button>
            </div>
        </div>
    );
}

function Card2() {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='red'>[ Rejected ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>Bar's Name | 3 people | date : 10/01/2020</p>
                <br/>
            </div>
        </div>
    );
}
interface CardProps {
    Status : any ,
    NumberOfPeople :  any ,
    DateReserve : any
}
const StatusCard= (props : CardProps) => {
    
    const whatcolor = props.Status;
    console.log(props.NumberOfPeople);
    // if(whatcolor == '0'){
    //     return <div>{Card0()}</div> 
    // }
    // if(whatcolor == '1'){
    // //    return  <div>{Card1()}</div> ;
    // }    
    // if(whatcolor == '2'){
    // //   return   <div>{Card2()}</div> ;
    // }

    return <div>
        { whatcolor == '0' ? Card0() : null}
        { whatcolor == '1' ? Card1() : null}
        { whatcolor == '2' ? Card2() : null}
    </div> ;

    
    // if (whatcolor === '0')
    //     <Card0/>
    // if (whatcolor === 1)
    //     <Card1/>
    // if (whatcolor===2)
    //     <Card2/> 
};

export default StatusCard;
