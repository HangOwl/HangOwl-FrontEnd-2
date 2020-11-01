// import React, { useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { Button, Modal, ModalHeader }  from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import * as Yup from 'yup'
// import axios from 'axios';
// import EditProfile from '../pages/EditProfile';


// function StatusEdit(){
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);
//   const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

//   return(
//     <div>
//     <Button className='stbut1' onClick={toggle}>
//         <p className='submittext'>Edit reserved details</p>
//     </Button>
//       <Modal isOpen={modal} fade={false} toggle={toggle} className='editbg' aria-labelledby="contained-modal-title-vcenter" centered>
//         <br/><br/>
//             <div className='centext'>
//                 <p className='edittext'>Bar's Name : Bar123</p>
//                 <br/>
//                 <p className='edittext'>Date : xxxxx</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <p className='edittext'>< EditProfile /></p>
//                 <br/>
//                 <p className='edittext'>People : xxxxx</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <p className='edittext'>< EditProfile /></p>
//                 <br/>
//             </div>
//             <br/>
//             <div className='cenbutton'>
//               <Button onClick={toggle}
//                       className='stbut11'              
//               ><p className='submittext'>Edit</p>
//               </Button>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <Button 
//                   className='stbut3'
//                   onClick={() => setModal(false)}
//               ><p className='submittext'>Cancel</p>
//               </Button>
//             </div>      
//           <br/><br/>
//       </Modal>
//     </div>
//   )
// };

// export default StatusEdit;
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader }  from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup'
import axios from 'axios';
import EditProfile from '../pages/EditProfile';
import EditReserve from './EditReserve';

interface CardProps {
  NumberOfPeople :  any ,
  DateReserve : any,
  BarName: any
  ResId: any;
}

function StatusCancel(props: CardProps){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return(
    <div>
    <Button className='stbut1' onClick={toggle}>
        <p className='submittext'>Edit reserved details</p>
    </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='editbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <br/><br/>
            <div className='centext'>
                <p className='edittext'>Bar's Name : {props.BarName}</p>
                <br/>
                <p className='edittext'>Date : {props.DateReserve}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>< EditReserve ResId={props.ResId} Name="DateReserve"/></p>
                <br/>
                <p className='edittext'>People : {props.NumberOfPeople}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className='edittext'>< EditReserve ResId={props.ResId} Name="NumberOfPeople"/></p>
                <br/>
            </div>
            <br/>
            <div className='cenbutton'>
              <Button onClick={toggle}
                      className='stbut11'              
              ><p className='submittext'>Edit</p>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button 
                  className='stbut3'
                  onClick={() => setModal(false)}
              ><p className='submittext'>Cancel</p>
              </Button>
            </div>      
          <br/><br/>
      </Modal>
    </div>
  )
};

export default StatusCancel;

