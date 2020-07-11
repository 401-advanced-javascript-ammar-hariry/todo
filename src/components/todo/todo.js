import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';

import useForm from '../../hooks/custom-form'
import './todo.scss';


let once =0;
function ToDo() {

	let temp ;
	let [toDoData, handleGet, habdlePost, habdleDelete, handelUpdate] = useForm(temp);
	let data = [];
	Object.keys(toDoData).map((val, idx) => { 
		data.push(toDoData[val])
	})
	if(once === 0){
		console.log('im here');
		handleGet();
		once++ ;
	         }

  let [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const _addItem = (items) => {

    items._id = Math.random();
    items.complete = false;
    items && setList([...list, items]);
  };
 
 const _handleDelete = id =>{
        console.log(id);
	 habdleDelete(id);
	setTimeout(function refresh(){

		window.location.reload(false);
	},500);
 }
 const _updateStatus = (status,_id) =>{

	handelUpdate(status,_id);
	handleGet();
 }

  useEffect(() => {

    setCount(Object.keys(toDoData).filter(item => !toDoData[item].complete).length);
    document.title = `${count} Uncompleted Tasks`;
  }, [count, toDoData]);

  return (
	  <>
      <Container>
        <Navbar bg="dark" variant="dark" style={{ marginTop: 2 + 'em' }}>
          <Navbar.Brand >To DO Manager ({count}) </Navbar.Brand>
        </Navbar>
          <section className="todo">
	<div className="form-border">
          <TodoForm handleSubmit={_addItem} />
	</div>
	<div className="list-group">
	<TodoList list={data} handleDelete={_handleDelete} updateStatus={_updateStatus}  />
	</div>
          </section>
      </Container>
    </>
  );
}

export default ToDo;