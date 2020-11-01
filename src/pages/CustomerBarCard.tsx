import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import defaultImage from '../Pics/default.jpg'
import './CustomerHome.css'

function CustomerBarCard() {
    const [images,setImages] = useState<any[]>([]);
    
    
    const Tomap = () => {
                return (                    
                <div>
                    {images.map((image) => (
                        window.barID = image._id,
                        <Link to={`/CustomerBarDetail/${window.barID}`}>
                        <div className="box">
                            {(image.ProfilePicPath === '') ? <img className="box1st" src={defaultImage} /> : <img className="box1st" src={`http://35.240.130.253:3001/pictures/` + image.ProfilePicPath} /> }
                            {/* <img className="box1st" src={`http://35.240.130.253:3001/pictures/` + image.ProfilePicPath} />  */}
                            <div className="box2nd">
                                <div className="textInBox2nd">
                                    {image.BarName}
                                </div>
                            </div>
                            
                        </div>
                        </Link>
                    ))}
                </div>
    )
        //return <div>{image}</div>
    };

    useEffect(() => {
        axios.get("http://35.240.130.253:3001/bars", {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response) => {
                setImages(response.data);
            });            

    // }
    }, []);


      return(

            <div>
                <Tomap />
            </div>
      );
  }


export default CustomerBarCard;