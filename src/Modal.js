import React, { useEffect, useState } from 'react'
import { Button, Form, Segment, Modal } from 'semantic-ui-react'


const  MyModal = ({items, mystate}) => {
  const [open, setOpen] = React.useState(mystate)
  //const [click, setClick] = useState(mystate);  
  useEffect( () => {
    setOpen(mystate)
  } , [mystate] );


  if(items=== '/login'){
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<div>Trigeer</div>}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
            <center><a href='/'>Forgot Your Password?</a></center>
          </Segment>
        </Form>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }else if(items==='/signup'){
    return (
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={!mystate}
      >
        <Modal.Header>Sign up</Modal.Header>
        <Modal.Content>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
            <center><a href='/'>Forgot Your Password?</a></center>
          </Segment>
        </Form>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }else{
    return null;
  };
}

export default MyModal;