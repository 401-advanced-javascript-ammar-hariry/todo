import React from 'react';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
      <>
          <Navbar bg="primary" variant="dark">
             <Navbar.Brand >Home</Navbar.Brand>
          </Navbar>
          <ToDo />
     </>
  );

};
export default App;