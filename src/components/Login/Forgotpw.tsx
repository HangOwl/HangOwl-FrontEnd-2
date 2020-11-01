import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik';
import axios from 'axios';
import Home from  '../../pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import './Forgotpw.css';
import * as Yup from 'yup'
import { ImportsNotUsedAsValues } from 'typescript';


const RegisterSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Email is Required'),
  email2: Yup.string()
  .email('Invalid email')
  .required('Email is Required')
  .test('E-mail Match!', 'E-mail Not Match!', function (value) {
    return this.parent.email === value;
  }),
});

interface Value2{
  email: string,
  email2: string,
}

function Forgotpw(){
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  let history = useHistory();
  const [email,setEmail] = useState('');

  const handleSubmit = () => {
    // const { username,password} = this.state;

    //console.log(username);
    const param = JSON.stringify(
        {
            Email: email
        }

    )            
    //{console.log(param)}
    axios.post("http://35.240.130.253:3001/auth/change_password", param,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        console.log(response);
        // setUserID(response.data.id);
        // setAuth(response.data.access_token);
        // window.$Auth = auth;
        // console.log('hello ',window.$Auth);
    }).catch(error => {
        console.log(error);
    });
    history.push('/ConfirmLink');
  }
    

  return(
    <div>
      <Home/>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='loginbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <b className='forgottext2'>May I ask for your Email?</b>
        </ModalHeader>
          <Formik
            initialValues={{
              email: '',
              email2: '',
            }}
            onSubmit={(
              values: Value2,
              { setSubmitting }: FormikHelpers<Value2>
            ) => {
              setTimeout(() => {
                {/*alert(JSON.stringify(values, null, 2));*/}
                history.push('/ConfirmLink')
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
                <Label for="email">E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="email" 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e:any) => setEmail(e.target.value)}
                        //className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="email2">Re E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="email2" 
                        type="email" 
                        id="email2" 
                        //className={`form-control ${touched.email2 ? errors.email2 ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="email2" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <br/>
            <div className='cenbutton'>
              <Button 
                className='submitbut3'
                type='submit'
                value='submit'
                onClick={handleSubmit}
              >
                <p className='submittext3'>Send</p>
              </Button>
            </div>     
            <br/>    
            </Form>
          )}  
          </Formik>
      </Modal>
    </div>
  )
}

export default Forgotpw;
