import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, FormGroup, Label, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter }  from 'reactstrap';
import { Formik, Form, Field, ErrorMessage , FormikHelpers } from 'formik'
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup'
import './BarForm.css'
import axios from 'axios';
import { createJSDocAugmentsTag } from 'typescript';


const RegisterSchema = Yup.object().shape({
  date: Yup.string()
    .required('Required'),
  nopp: Yup.string()
    .required('Required'),
  ps: Yup.string(),
  acceptrule: Yup.bool().oneOf([true], "Please accept the Bar's Rule first!")
});

interface Value2{
  date: string,
  nopp: string,
  ps: string,
  acceptrule: false,
}

function BarForm(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal(true);
  const closeBtn = <button className="close" onClick={() => {toggle(); clearvalue();}}>&times;</button>;
  const [datereserve, setDatereserve] = useState('');
  const [numberofpeople, setNumberOfPeople]= useState('');
  const [postscript, setPostscript] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  let Auth = window.Auth;
  let history = useHistory();

  const handleClick = () => {
    setCheckbox(!checkbox);
    console.log('check box: ', checkbox);
    //handleChange();
    // history.push('/Reserveii');
  }

  const handleClick2 = () => {
    console.log('handle 2 checkbox: ',checkbox);
    console.log(datereserve);
    if(checkbox === true && datereserve !== '' && numberofpeople !== '' && postscript !== ''){
      handleChange();
      setModal(!modal);
      setDatereserve('');
      setNumberOfPeople('');
      setPostscript('');
      setCheckbox(false);
      //history.push('/Reserveii');
    }else{
      toggle2();
    }

  }

  const clearvalue = () => {
      setDatereserve('');
      setNumberOfPeople('');
      setPostscript('');
      setCheckbox(false);
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

    axios.post("http://35.240.130.253:3001/reservations", params,{
      headers: {
        'Authorization' : `${window.Auth}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(response);
      window.Reserveid = response.data.ResId;
      console.log(window.Reserveid);
      history.push('/Reserveii');

    });
  }


  return(
    <div>
      <Button className='rsbutton' onClick={toggle}>
        <p className='rstext'> Reserve </p>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className='modalbg' aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <b className='formtext'>Reservation Form</b>
        </ModalHeader>
          <Formik
            initialValues={{
              date: '',
              nopp: '',
              ps: '',
              acceptrule: false,
            }}
            onSubmit={(
              values: Value2,
              { setSubmitting }: FormikHelpers<Value2>
            ) => {
              setTimeout(() => {
                {/*alert(JSON.stringify(values, null, 2));*/}
                //history.push('/Reserveii')
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={RegisterSchema}
          >
          {({ errors, touched }) => (
            <Form>
            <br/>
            <Col>
              <FormGroup className="form-inline">
                <Label for="date">Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                <Field name="date" 
                        type="text" 
                        id="date" 
                        value={datereserve}
                        onChange={(e:any) => setDatereserve(e.target.value)}
                        //className={`form-control ${touched.date ? errors.date ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="YYYY-MM-DD"/>
                <ErrorMessage component="div" name="date" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-inline" action="/action_page.php">
                <Label for="nopp">No.People</Label>
                <Field name="nopp" 
                        type="text" 
                        id="nopp" 
                        value={numberofpeople}
                        onChange = {(e:any) => setNumberOfPeople(e.target.value)}
                        //className={`form-control ${touched.nopp ? errors.nopp ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder=""/>
                <ErrorMessage component="div" name="nopp" className="invalid-feedback" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="ps" className='cbtext'>Ps.</Label>
                <Field name="ps" 
                        type="text" 
                        id="ps" 
                        value={postscript}
                        onChange={(e:any) => setPostscript(e.target.value)}
                        className={`form-control ${touched.ps ? touched.ps ? 'is-invalid' : 'is-valid' : ''}`}
                        placeholder="Anything you want?"/>
              </FormGroup>
            </Col>
            <Col>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Field type="checkbox" 
                      name="acceptrule"
                      id="acceptrule"
                      onClick={handleClick}
                      className={'form-check-input' + (errors.acceptrule && touched.acceptrule ? ' is-invalid' : '')} />
              <Label for="acceptrule" className="accepttext">&nbsp;&nbsp;&nbsp;Do you accept the Bar's Rules?</Label>
              <ErrorMessage name="acceptrule" component="div" className="invalid-feedback" />
            </Col>
            <br/>
            <div className='cenbutton'>
              <Button
                className='submitbut2'
                type='submit'
                value='submit'
                onClick={() => {handleClick2();}}
              >
                <p className='submittext2'>Reserve Now</p>
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

export default BarForm;
