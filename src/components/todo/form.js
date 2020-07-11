import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/custom-form'

function TodoForm(props) {

  let emptyCall ;
  const [toDoData, handleGet, habdlePost] = useForm(emptyCall);

  const _handleInputChange = (e) => {
//     setItem({ ...item, [e.target.name]: e.target.value });
  }

  const _handleSubmit = async (e) => {
	  e.preventDefault();	
	  let item = e.target.text.value;
	  let assignee = e.target.assignee.value;
	  let difficulty = e.target.difficulty.value;
	  let complete = false;
	  let postObj =  await {item ,assignee,difficulty,complete}
	  habdlePost(postObj);
	setTimeout(function refresh(){

	     window.location.reload(false);
	},500);
	  handleGet();
  };

  return (

    <>
      <Form onSubmit={_handleSubmit} >
        <Form.Group controlId="formBasicEmail" >
           <h2>Add To Do Item</h2>
             <Form.Label>To Do Item</Form.Label>
           <Form.Control type="text" name="text" placeholder="Add To Do List Item" />
        </Form.Group>

           <Form.Group controlId="formBasicPassword">
             <Form.Label>Assigned To</Form.Label>
               <Form.Control type="text" name="assignee" placeholder="Assigned To" />
             </Form.Group>
           <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
               <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" />
           </Form.Group>
              <Button variant="primary" type="submit" style={
                 {
           	 width: '100%'
         	       }
               }>
          Add Item
  </Button>
      </Form>
    </>
  );
}


export default TodoForm;