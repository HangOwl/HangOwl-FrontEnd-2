import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react';

class  ModalExampleModal extends component{
    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h1>React Modal</h1>
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </main>
      );
    }
  }
  export default ModalExampleModal