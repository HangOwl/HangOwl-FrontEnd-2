import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'


function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button>d</button>}
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
        {/* <link href='./home'>Forgot Password?</link> */}
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal;