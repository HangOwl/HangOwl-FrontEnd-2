import React, { useState, useEffect, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button }  from 'reactstrap';
import axios from 'axios';
import './StatusCard.css'
import StatusEdit from './StatusEdit';
import StatusCancel from './StatusCancel';
interface CardProps {
    Status : any ,
    NumberOfPeople :  any ,
    DateReserve : any,
    BarName: any
    ResId: any;
}
function Card0(props : CardProps){
    console.log("date ",props.DateReserve)
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='white'>[ Pending ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>{props.BarName} | {props.NumberOfPeople} people | {props.DateReserve}</p>
                <br/>
                <div className='cenbutton'>
                    <StatusEdit BarName={props.BarName} NumberOfPeople={props.NumberOfPeople} DateReserve={props.DateReserve} ResId={props.ResId}/>
                    {/* <Button className='stbut1'>
                        <p className='submittext'><StatusEdit /></p>
                    </Button> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <StatusCancel ResId={props.ResId}/>
                    {/* <Button className='stbut2'>
                        <p className='submittext'><StatusCancel /></p>
                    </Button> */}
                </div>
            </div>
        </div>
    );
}

function Card1(props: CardProps) {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='green'>[ Accepted ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>{props.BarName} | {props.NumberOfPeople} people | {props.DateReserve}</p>
                <br/>
                <Button className='stbut2'>
                        <p className='submittext'>Cancel reserved</p>
                </Button>
            </div>
        </div>
    );
}

function Card2(props: CardProps) {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='red'>[ Rejected ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>{props.BarName} | {props.NumberOfPeople} people | {props.DateReserve}</p>
                <br/>
            </div>
        </div>
    );
}

function Card3(props: CardProps) {
    return (
        <div className='centext'>
            <div className='statusbox'>
                <br/><br/>
                <p className='red'>[ Canceled ]</p>&nbsp;&nbsp;&nbsp;
                <p className='sttext'>{props.BarName} | {props.NumberOfPeople} people | {props.DateReserve}</p>
                <br/>
            </div>
        </div>
    );
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
        { whatcolor == '0' ? Card0(props) : null}
        { whatcolor == '1' ? Card1(props) : null}
        { whatcolor == '2' ? Card2(props) : null}
        { whatcolor == '3' ? Card3(props) : null}

    </div> ;

    
    // if (whatcolor === '0')
    //     <Card0/>
    // if (whatcolor === 1)
    //     <Card1/>
    // if (whatcolor===2)
    //     <Card2/> 
};

export default StatusCard;
