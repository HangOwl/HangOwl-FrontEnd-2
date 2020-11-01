import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Signupcus.css';
import './Loginn.css'
import * as Yup from 'yup'
import Home from  '../../pages/Home';


const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Password is Required'),
});

interface Value2{
    email: string,
  password: string
}

function Loginn2({barID}: {barID:any}){
  var Auth = window.Auth;
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal(false);
  const closeBtn = <button className="close" onClick={() => {toggle(); handleClick();}} >&times;</button>;
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const setTime = () => {
    setTimeout(() => {
      setUsername('');
    }, 500);

  }

  const handleClick = () => {
    console.log('Role handleClick: ', window.Role);
    
    if(window.Role === 0){
      history.push(`/CustomerBarDetail/${barID}`);
    }

  }

  const handleChange = () =>{
    //setOpen(false);
    const param = JSON.stringify(
      {
          username: username,
          password: password    
      }

  )            
  //{console.log(param)}
  console.log(username);
  console.log(password);
  axios.post("http://35.240.130.253:3001/auth/login", param,{
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      }
  })
  .then((response) => {
      console.log(response);
      Auth = response.data.Authorization;
      window.Auth = Auth;
      window.Role = response.data.Role;
      window.ID = response.data.id;

      console.log('Role: ', window.Role);
      handleClick();
    
    axios.get(`http://35.240.130.253:3001/customers/${window.ID}`, {
        headers: {
            'Authorization': `${window.Auth}`
        }
    }).then((response) => {
        console.log(response);
        window.Name=response.data.Name;
        window.Email = response.data.Email;
    });

  }).catch(error => {
      console.log(error);
  });      

    // useEffect(() => {
    //     axios.get(`http://35.240.130.253:3001/customers/${window.cusID}`, {
    //             headers: {
    //                 'Authorization': `${window.Auth}`
    //             }
    //         }).then((response) => {
    //             console.log(response);
    //             window.Name=response.data.Name;
    //             window.Email = response.data.Email;
    //         });
    // }, [])
  

  };

  return(
    <div>
      <Button className='rsbutton' onClick={toggle2}>
        <p className='rstext'> Login </p>
      </Button>
      <Modal isOpen={!modal} fade={false} toggle={toggle} className='loginbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <b className='logintext'>Log in</b>
        </ModalHeader>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(
              values: Value2,
              { setSubmitting }: FormikHelpers<Value2>
            ) => {
              setTimeout(() => {
                {/*alert(JSON.stringify(values, null, 2));*/}
                history.push('/')
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={RegisterSchema}
          >
          {({ errors, touched }) => (
            <Form>
            <br/>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="email">E-mail*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="email" 
                        type="email" 
                        id="email" 
                        value={username} 
                        onChange={(e:any) => setUsername(e.target.value)}
                        //className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="xxxx@email.com"/>
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="password">Password*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="password" 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e:any) => setPassword(e.target.value)}
                        //className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="password"/>
                <ErrorMessage component="div" name="password" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <br/>
            <div className='cenbutton'>
              <Button 
                className='submitbut3'
                type='submit'
                value='submit'
                onClick={() => {handleChange(); setModal(!modal);}}
              >
                <p className='submittext3'>Login</p>
              </Button>
            </div>
            <br/> 
            <div className='cenbutton'>
              <NavLink to='/Forgotpw'>
                <p className='forgottextt'>Forgot your password?</p>
              </NavLink>
            </div>  
            <br/>     
            </Form>
          )}  
          </Formik>
      </Modal>
    </div>
  )
}

export default Loginn2;
