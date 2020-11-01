import React,{useState,useEffect} from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBars';
import ImageList from './ImageList';


const BarCards = () => {
  const [images,setImages] = useState([]);
  
  
      const Tomap = () => {
                  return (                    
                  <div>
                      {images.map((image) => (
                          //window.$barID = image._id,
                          // <Link to={`/bardetail/${image._id}`}>
                          <div className="box">
                              <img className="box1st" src={`http://35.240.130.253:3001/pictures/` + image.ProfilePicPath} /> 
                              <div className="box2nd">
                                  <div className="textInBox2nd">
                                      {image.BarName}
                                  </div>
                              </div>
                              
                          </div>
                          // </Link>
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
  
    export default BarCards;
