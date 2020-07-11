import React from 'react';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo.js';
import  LoginContext from './context/auth-context';
import LogIn from './components/login'
import Auth from './components/auth'
import Signup from './components/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsContext from './context/pagination'

class App extends React.Component {
render(){
	return (
		<SettingsContext>
		<LoginContext>
		<Navbar bg="primary" variant="dark">
		       <Navbar.Brand >Home</Navbar.Brand>
		 <LogIn />
		    </Navbar>
		<Auth>
		<ToDo />
	   	 </Auth>
		 <Signup />
		</LoginContext>
		</SettingsContext>
	      );
}

};
export default App;