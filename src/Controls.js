import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormControl, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from 'jquery';

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formData: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({formData: data.get('chatbot-form')});
    fetch('/chat-submit', {
      method: 'POST',
      body: data.get('chatbot-form'),
    });
  }

  render() {

  return (
    <div className="App">
    <header className="App-title">
    <h1>Controls</h1>
    </header>

    <CardGroup className="card-style">
    <Card>
        <Card.Body><Form class="form-inline" id="chatbot-form-parent" onSubmit={this.handleSubmit}>
        <div className="chat-feed">Chat:
          <div class="form-group">
            <FormControl as="textarea" placeholder="Say Something to the Group" rows="5" className="form-control" name="chatbot-form"/>
            <div className="content">
              <Button id="right-panel-link" variant="outline-success" type="Submit" className="chatbot-button">Submit</Button>
            </div>
          </div>
        </div>
        </Form></Card.Body>
    </Card>
    <Card>
        <Card.Body><div className="chat-feed" name="data">Feed:{this.state.formData}
        </div></Card.Body>
    </Card>
    </CardGroup>
    <div className="footer"></div>
    </div>

    );
  }

}

export default Controls;
