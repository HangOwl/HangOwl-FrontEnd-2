import React, { useEffect, useState, useRef } from 'react'
import { Button, Form, Segment, Modal } from 'semantic-ui-react'
import axios from 'axios';


const  MyModal = ({items, mystate}) => {
  const [open, setOpen] = React.useState(mystate)
  const ref = React.useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userID, setUserID] = useState('');
  const [auth, setAuth] = useState('');

  const handleChange = () =>{
    //setOpen(false);
    const param = JSON.stringify(
      {
          username: username,
          password: password    
      }

  )            
  //{console.log(param)}
  axios.post("http://35.240.130.253:3000/auth/login", param,{
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      }
  })
  .then((response) => {
      console.log(response);
      setUserID(response.data.id);
      setAuth(response.data.access_token);
  }).catch(error => {
      console.log(error);
  });
  };
  const handleChange2 = () =>{
    setOpen(true);
    console.log('Modal Open');
  };
  //const [click, setClick] = useState(mystate);  
  useEffect( () => {
    setOpen(mystate)


  } , [mystate] );




  // const Login2 = () => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [userID, setUserID] = useState('');
  //   const [auth, setAuth] = useState('');

  //   const handleChange = () => {
  //       setUsername(username);
  //       setPassword(password);
  //   }

  //   const handleSubmit = () => {
  //       // const { username,password} = this.state;

  //       //console.log(username);
  //       const param = JSON.stringify(
  //           {
  //               username: username,
  //               password: password    
  //           }

  //       )            
  //       //{console.log(param)}
  //       axios.post("http://35.240.130.253:3000/auth/login", param,{
  //           headers: {
  //               'Access-Control-Allow-Origin': '*',
  //               'Content-Type': 'application/json',
  //           }
  //       })
  //       .then((response) => {
  //           console.log(response);
  //           setUserID(response.data.id);
  //           setAuth(response.data.access_token);
  //       }).catch(error => {
  //           console.log(error);
  //       });
        
  //   }
  //   return (
  //       <div>
  //               <form>
  //                   <input 
  //                       type="username"  
  //                       placeholder="username" 
  //                       value={username}
  //                       onChange={e => setUsername(e.target.value)} 
  //                       required
  //                   />
  //                   <input 
  //                       type="password" 
  //                       name="password" 
  //                       placeholder={password}
  //                       onChange={e => setPassword(e.target.value)}
  //                       required 
  //                   />

  //               </form>

  //                   <button onClick={handleSubmit}>
  //                       Submit                    
  //                       <Link to={{pathname:`/login/${userID}`, state:{ auth:auth}}} >link</Link>
  //                       {/* <Link to={`/login/${userID}`}>{auth}</Link> */}
  //                   </button>
  //           </div>
  //   );
  // };



  if(items=== '/login'){
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<div>Trigeer</div>}
      >
        <Modal.Header onClick={handleChange2}>Login</Modal.Header>
        <Modal.Content>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' type="username" value={username} onChange={e => setUsername(e.target.value)} iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              iconPosition='left'
              placeholder='Password'
              // type='password'
            />

        <Modal.Actions>
            <Button color='teal' fluid size='large' onClick={() => {handleChange(); setOpen(false);}}>
              Login
            </Button>
        </Modal.Actions>

            <center><a href='/'>Forgot Your Password?</a></center>
          </Segment>
        </Form>
        </Modal.Content>
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
          <Modal.Header  onClick={handleChange2}>Sign up</Modal.Header>
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

            <Button color='teal' fluid size='large' onClick={() => setOpen(false)}>
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