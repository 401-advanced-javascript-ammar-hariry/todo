import React from 'react';
import { LoginContext } from '../context/auth-context';
import Show from '../show/show.js';
import {Button,Form} from 'react-bootstrap'


class Signup extends React.Component {

    static contextType = LoginContext;

    constructor(props) {
	super(props);
	this.state = {
	    body: ''
	};
      }


    signUpSubmit = e =>{
	e.preventDefault();
let password = e.target.Password.value;
let username = e.target.username.value;     
let role = e.target.role.value;  
let email = e.target.email.value;     

let body = {
	password,
	username,
	role,
	email	
}

      this.context.signup(body)
	}

    render() {
        return (
	<Show condition={!this.context.loggedIn}>
	<Form onSubmit={this.signUpSubmit}>
  <Form.Row>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter Username" name='username'/>
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='Password' />
    </Form.Group>
    <Form.Group  controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Email" name='email' />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group  controlId="formGridState">
      <Form.Label>Role</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." name='role'>
        <option >admin</option>
        <option>user</option>
        <option>guest</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Show>
        )
    }
}

export default Signup;