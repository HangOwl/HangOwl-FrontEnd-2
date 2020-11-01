import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BarPic.css'
import defaultimage from '../../Pics/default.jpg';
const BarPic = ({barID}) => {
const [image,setImages] = useState([]);
const [profile, setProfile] = useState('');
//const barID = match.params.barID;

    // const Tomap = () => {
    //     return ( 
    //         <div>
    //             <img className="box0" src={`http://35.240.130.253:3001/pictures/` + profile} />
    //             <br /><br /><br />
    //                 <div className="container">
    //                     {image.map((image2) =>{
    //                         return (
    //                             <img className="card" src={`http://35.240.130.253:3001/pictures/` + image2} />
    //                         );
    //                     })}

    //                 </div>  
    //         </div>                                 
    //     );
    // };

    const Tomap = () => {
        if(profile === ''){
            return(
                <div>
                    <img className="Box" src={defaultimage} />
                </div>
            )
        }else{
        return ( 
            <div>
                <img className="Box" src={`http://35.240.130.253:3001/pictures/` + profile} />
                <br /><br /><br />
                    <div className="container">
                        {image.map((image2) =>{
                            return (
                                <img className="card" src={`http://35.240.130.253:3001/pictures/` + image2} />
                            );
                        })}

                    </div>  
            </div>                                 
        );
        }
    };

    useEffect(() => {
    axios.get(`http://35.240.130.253:3001/bars/${barID}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then((response) => {
                    console.log(response.data)
                    setProfile(response.data.ProfilePicPath)
                    setImages(response.data.AdditionalPicPath);
                });
    },[]);

    // const handleClick = () => {
                
    // }

      return(

            <div>
                {/* <button onClick={handleClick}>Click to download</button> */}
                <Tomap />
            </div>
      );
  }

  export default BarPic;
