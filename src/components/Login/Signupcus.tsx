import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import 'bootstrap/dist/css/bootstrap.css';
import './Signupcus.css';
import * as Yup from 'yup'
import axios from 'axios';



const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .min(4, 'Too Short!')
    .required('Password is Required')
    .test('Password Match!', 'Password Not Match!', function (value) {
      return this.parent.password === value;
    }),
  email: Yup.string()
  .email('Invalid email')
  .required('Email is Required'),
});

interface Value2{
  username: string,
  password: string,
  confirmPassword: string,
  email: string
}

function Signup(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  const history = useHistory();

  //let history = useHistory();
  
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleClick = () => history.push('/')

    const handleSubmit = () => {

        const params = JSON.stringify(
            {
                Email : email   ,     
                Password : password  ,       
                Name: name
            }
        )
        axios.post("http://35.240.130.253:3001/customers", params,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.log(response)
        })

        setEmail('');
        setPassword('');
        setName('');
    }

  return(
    <div>
      <Button className='cus1' onClick={toggle}>
        <p className='cus2'> CUSTOMER's </p>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='signupcusbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <b className='sucustext'>Sign Up as CUSTOMER's</b>
        </ModalHeader>
          <Formik
            initialValues={{
              username: '',
              password: '',
              confirmPassword: '',
              email: ''
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
                <Label for="username">Your Name*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="username" 
                        type="text" 
                        id="username" 
                        value={name}
                        onChange={(e:any) => setName(e.target.value)}
                        //className={`form-control ${touched.username ? errors.username ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="username"/>
                <ErrorMessage component="div" name="username" className="invalid-feedback" />
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
            {/* <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="confirmPassword">Re-Password*</Label>
                <Field name="confirmPassword" 
                        type="password" 
                        id="confirmPassword" 
                        value={password}
                        onChange={(e:any) => setPassword(e.target.value)}
                        //className={`form-control ${touched.confirmPassword ? errors.confirmPassword ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="confirm your password"/>
                <ErrorMessage component="div" name="confirmPassword" className="invalid-feedback" />
              </FormGroup>
            </Col> */}
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="email">E-mail*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="email" 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e:any) => setEmail(e.target.value)}
                        //className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="xxxx@email.com"/>
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <br/>
            <div className='cenbutton'>
              {/*
              <Button 
                color="secondary"
                onClick={() => setModal(false)}
              >Cancel</Button>
              */}
              <Button 
                className='submitbut'
                type='submit'
                value='submit'
                icon='checkmark'
                positive
                onClick={() => {handleSubmit(); handleClick(); setModal(!modal);}}
              >
                <p className='submittext'>Sign Up</p>
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

export default Signup;
