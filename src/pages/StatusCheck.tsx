import React, { useState, useEffect } from 'react';
import Navbar2 from '../components/Navbar/Navbar2';
import StatusCard from './StatusCard';
import axios from 'axios';
import './StatusCheck.css'

function StatusCheck() {

  const [images,setImages] = useState<any[]>([]);

  const Tomap = () => {
    return (                    
      <div>
          {images.map((image) => (
              // window.barID = image._id,
              // <div className="box">
              //     {/* <img className="box1st" src={`http://35.240.130.253:3001/pictures/` + image.ProfilePicPath} />  */}
              //     <div className="box2nd">
              //         <div className="textInBox2nd">
              //             {image.BarName}
              //         </div>
              //     </div>
                  
              // </div>
              <StatusCard Status={image.Status} NumberOfPeople={image.NumberOfPeople} DateReserve={image.DateReserve} BarName={image.BarName} ResId={image.ResId}/>
          ))}
      </div>
    )
  };
  useEffect(() =>{
    axios.get(`http://35.240.130.253:3001/reservations`, {
      headers: {
        'Authorization' : `${window.Auth}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      setImages(response.data)
      //console.log(response.data['0'].Status)
    });
  }, []);



  return (
    <div className="bg">
      <Navbar2/>
      
      <br/><br/><br/>
      <header className='cenbutton'>
        <p className='textInBox1st'>Your Reserved Orders</p>
      </header>
      <br/><br/><br/>
      <p className='edittoptext2'>*You can edit your details only when your status is pending.</p>
      <br/><br/>
      <div className="statusbox0">
        <p className='statustext'>Reserved Orders Status</p>
      </div>
      &nbsp;
      {/* <StatusCard props={'0'}/> */}
      <Tomap />
    </div>
  );
}

export default StatusCheck;