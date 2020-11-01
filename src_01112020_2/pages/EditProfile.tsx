import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup'
import axios from 'axios';
import './EditProfile.css'


const RegisterSchema = Yup.object().shape({
  detail: Yup.string(),
});

interface Value2{
  detail: string,
}

function EditProfile(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  const [datereserve, setDatereserve] = useState('');
  const [numberofpeople, setNumberOfPeople]= useState('');
  const [postscript, setPostscript] = useState('');
  let Auth = window.Auth;
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  }
  
  const handleChange = () => {
    const params = JSON.stringify(
      {
        barId: "5f8d33c8f736c01bd4619bfb",
        DateReserve: datereserve,
        NumberOfPeople: numberofpeople,
        Postscript: postscript
      }
    );

    // console.log(Auth);
    // console.log(datereserve);
    // console.log(numberofpeople);
    // console.log('window', window.Auth);
    axios.post("http://35.240.130.253:3001/reservations", params,{
      headers: {
        'Authorization' : `${window.Auth}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(response);
      window.Reserveid = response.data._id;
      console.log(window.Reserveid);
      handleClick();
    });
    //console.log(Auth);
    setDatereserve('');
    setNumberOfPeople('');
    setPostscript('');
  }


  return(
    <div>
      <Button className='edbutton' onClick={toggle}>
        <p className='edtext'> Edit </p>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='editbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <p className='edittoptext'>Edit your details</p>
        </ModalHeader>
          <Formik
            initialValues={{
              detail: '',
            }}
            onSubmit={(
              values: Value2,
              { setSubmitting }: FormikHelpers<Value2>
            ) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={RegisterSchema}
          >
          {({ errors, touched }) => (
            <Form>
            <br/>
            <Col>
              <FormGroup>
                <Field name="detail" 
                        type="text" 
                        id="detail" 
                        value={postscript}
                        onChange={(e:any) => setPostscript(e.target.value)}
                        className={`form-control ${touched.detail ? touched.detail ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
              </FormGroup>
            </Col>
            <div className='cenbutton'>
              <Button
                className='submitbut2'
                type='submit'
                value='submit'
                onClick={() => {handleChange(); setModal(!modal);}}
              >
                <p className='submittext2'>Edit</p>
              </Button>
            </div>     
            <br/>     
            </Form>
          )}  
          </Formik>
      </Modal>
    </div>
  )
};

export default EditProfile;
