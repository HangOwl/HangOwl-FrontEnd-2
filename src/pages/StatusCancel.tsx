// import React, { useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
// import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
// import 'bootstrap/dist/css/bootstrap.css';
// import * as Yup from 'yup'
// import axios from 'axios';
// import './EditProfile.css'


// function StatusCancel(){
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);
//   const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

//   return(
//     <div>
//     <Button className='stbut2' onClick={toggle}>
//         <p className='submittext'>Edit reserved details</p>
//     </Button>
//       <Modal isOpen={modal} fade={false} toggle={toggle} className='editbg' aria-labelledby="contained-modal-title-vcenter" centered>
//         <br/><br/>
//             <div className='centext'>
//                 <p className='edittoptext2'>
//                 Do you want to cancel
//                 <br/>your reserved order?</p>
//             </div>   
//             <br/>
//             <div className='cenbutton'>
//               <Button onClick={toggle}
//                       className='stbut11'              
//               ><p className='submittext'>Cancel</p>
//               </Button>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <Button 
//                   className='stbut3'
//                   onClick={() => setModal(false)}
//               ><p className='submittext'>No</p>
//               </Button>
//             </div>      
//           <br/><br/>
//       </Modal>
//     </div>
//   )
// };

// export default StatusCancel;

import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup'
import axios from 'axios';
import './EditProfile.css'


function StatusCancel({ResId} : {ResId:any}){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  let history = useHistory();

  const handleClick = () => {
    axios.delete(`http://35.240.130.253:3001/reservations/${ResId}`,{
      headers: {
        'Authorization' : `${window.Auth}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(response);
    });    
  }


  return(
    <div>
    <Button className='stbut2' onClick={toggle}>
        <p className='submittext'>CanCel Reserved</p>
    </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='editbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <br/><br/>
            <div className='centext'>
                <p className='edittoptext2'>
                Do you want to cancel
                <br/>your reserved order?</p>
            </div>   
            <br/>
            <div className='cenbutton'>
              <Button onClick={() => { handleClick(); setModal(!modal);}}
                      className='stbut11'       
              ><p className='submittext'>Cancel</p>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button 
                  className='stbut3'
                  onClick={() => setModal(false)}
              ><p className='submittext'>No</p>
              </Button>
            </div>      
          <br/><br/>
      </Modal>
    </div>
  )
};

export default StatusCancel;

