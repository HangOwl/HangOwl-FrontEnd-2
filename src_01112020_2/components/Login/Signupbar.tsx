import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FormGroup, Label, Col, Button, Modal, ModalHeader }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import 'bootstrap/dist/css/bootstrap.css';
import './Signupcus.css';
import './Signupbar.css';
import * as Yup from 'yup'



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
  lineid: Yup.string()
    .required('LINE ID is Required'),
  opentime: Yup.string()
    .required('Open Time is Required'),
  closetime: Yup.string()
    .required('Close Time is Required'),
  address: Yup.string()
    .required('Address is Required'),
  bardes: Yup.string()
    .required("Bar's Description is Required"),
  barrule: Yup.string()
    .required("Bar's Rule is Required"),
});

interface Value2{
  username: string,
  password: string,
  confirmPassword: string,
  email: string,
  lineid: string,
  opentime: string,
  closetime: string,
  address: string,
  bardes: string,
  barrule: string,
}

function Signup(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  let history = useHistory();

  return(
    <div>
      <Button className='bar1' onClick={toggle}>
        <p className='bar2'> BAR's </p>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='signupbarbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <b className='subartext'>Sign Up as BAR's</b>
        </ModalHeader>
          <Formik
            initialValues={{
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              lineid: '',
              opentime: '',
              closetime: '',
              address: '',
              bardes: '',
              barrule: '',
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
                <Label for="username">BAR's Name*&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="username" 
                        type="text" 
                        id="username" 
                        className={`form-control ${touched.username ? errors.username ? 'is-invalid' : 'is-valid' : ''}`}
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
                        className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="password"/>
                <ErrorMessage component="div" name="password" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="confirmPassword">Re-Password*</Label>
                <Field name="confirmPassword" 
                        type="password" 
                        id="confirmPassword" 
                        className={`form-control ${touched.confirmPassword ? errors.confirmPassword ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="confirm your password"/>
                <ErrorMessage component="div" name="confirmPassword" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="email">E-mail*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="email" 
                        type="email" 
                        id="email" 
                        className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="xxxx@email.com"/>
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="lineid">LINE ID*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="lineid" 
                        type="text" 
                        id="lineid" 
                        className={`form-control ${touched.lineid ? errors.lineid ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="LINE ID"/>
                <ErrorMessage component="div" name="lineid" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="opentime">Open Time*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="opentime" 
                        type="text" 
                        id="opentime" 
                        className={`form-control ${touched.opentime ? touched.opentime ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="opentime" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="closetime">Close Time*&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="closetime" 
                        type="text" 
                        id="closetime" 
                        className={`form-control ${touched.closetime ? touched.closetime ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="closetime" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <div role="group" aria-labelledby="checkbox-group">
                <label className='cbtext'>Close On&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label>
                  <Field type="checkbox" name="checked" value="Monday" />&nbsp;
                  <label className='cbtext'>Monday</label>&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Tuesday" />&nbsp;
                  <label className='cbtext'>Tuesday</label>&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Wednesday" />&nbsp;
                  <label className='cbtext'>Wednesday</label>&nbsp;&nbsp;
                </label>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  <Field type="checkbox" name="checked" value="Thursday" />&nbsp;
                  <label className='cbtext'>Thursday</label>&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Friday" />&nbsp;
                  <label className='cbtext'>Friday</label>&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Saturday" />&nbsp;
                  <label className='cbtext'>Saturday</label>&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Sunday" />&nbsp;
                  <label className='cbtext'>Sunday</label>&nbsp;&nbsp;
                </label>
              </div>
            </Col>
            <Col>
              <FormGroup>
                <Label for="address" className='cbtext'>Address*</Label>
                <Field name="address" 
                        type="text" 
                        id="address" 
                        className={`form-control ${touched.address ? touched.address ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="address" className="invalid-feedback" />
              </FormGroup>
              <FormGroup>
                <Label for="bardes" className='cbtext'>Bar's Description*</Label>
                <Field name="bardes" 
                        type="text" 
                        id="bardes" 
                        className={`form-control ${touched.bardes ? touched.bardes ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="bardes" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="barrule" className='cbtext'>Bar's Rule*</Label>
                <Field name="barrule" 
                        type="text" 
                        id="barrule" 
                        className={`form-control ${touched.barrule ? touched.barrule ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="barrule" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <br/>
            <div className='cenbutton'>
              <Button 
                className='submitbut1'
                type='submit'
                value='submit'
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
