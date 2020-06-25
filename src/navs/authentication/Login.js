import React from 'react';
import { Button, Form, FormControl, Modal, Alert } from 'react-bootstrap'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: '',
      show: false,
      epalertshow: false,
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
      if (this.state.email && this.state.password) {
          this.setState({
              show: false
          });
          fetch('/login', {
              method: 'POST',
              body: {'email':this.state.email,
                   'password':this.state.password
                    }
          });
      } else if (!this.state.email || !this.state.password) {
         this.setState({
           epalertshow: true
         })
      }
  }

  render() {
    return (
      <div>
      <Button id="login-button" variant="primary" onClick={this.handleShow}>
      Login
      </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className="form-inline" id="chatbot-form-parent" onSubmit={this.handleSubmit}>
          <div className="chat-feed">
            <Form.Group controlId="formBasicEmail">
              <FormControl type="email" placeholder="E-mail" className="form-login" name="email" onChange={this.handleChange} value={this.state.email}/>
              <FormControl type="password" placeholder="Password" className="form-login" name="password" onChange={this.handleChange} value={this.state.password}/>
              <Alert show={this.state.epalertshow} variant="danger">
                <p class="h6"><small>E-mail or password not entered</small></p>
              </Alert>
              <div className="content">
                <Button id="right-panel-link" variant="outline-success" type="Submit" className="chatbot-button">Submit</Button>
              </div>
            </Form.Group>
          </div>
          </Form></Modal.Body>
        </Modal>
        </div>

  );
}
}

export default Login;
