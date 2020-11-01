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
  let Auth = window.Auth;
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  let history = useHistory();

  const handleClick = () => {
    // history.push('/');
    history.push(`/profile/${window.cusID}`)
  }
  
  const handleChange = () => {
    const params = JSON.stringify(
      {
        [name] : value
      }
    );

    // console.log(Auth);
    // console.log(datereserve);
    // console.log(numberofpeople);
    // console.log('window', window.Auth);
    axios.patch(`http://35.240.130.253:3001/customers/${window.cusID}`, params,{
      headers: {
        'Authorization' : `${window.Auth}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(response);
      window.Name = response.data.Name;
    });
    //console.log(Auth);
    setValue('');
    setName('');
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
                <Field name="Name" 
                        type="text" 
                        id="detail" 
                        // value={postscript}
                        // onChange={(e:any) => setPostscript(e.target.value)}
                        value={value}
                        onChange={(e:any) => {
                              setName(e.target.name);
                              window.Name = e.target.value;
                              setValue(e.target.value);
                        }}
                        className={`form-control ${touched.detail ? touched.detail ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
              </FormGroup>
            </Col>
            <div className='cenbutton'>
              <Button
                className='submitbut2'
                type='submit'
                value='submit'
                onClick={() => {handleChange(); handleClick(); setModal(!modal);}}
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
