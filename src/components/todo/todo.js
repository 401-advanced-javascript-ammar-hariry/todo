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

  useEffect(() => {

    let lists = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setList([...lists]);    
  }, []);

  const _addItem = (items) => {

    items._id = Math.random();
    items.complete = false;
    items && setList([...list, items]);
//     console.log([...list, items]);
  };
 
 const _handleDelete = id =>{

	habdleDelete(id);
	window.location.reload(false);
 }
 const _updateStatus = (status,_id) =>{

	handelUpdate(status,_id);
	handleGet();
 }
  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let lists = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList([...lists]);
    }

  };

  useEffect(() => {

    setCount(Object.keys(toDoData).filter(item => !toDoData[item].complete).length);
    document.title = `${count} completed Tasks`;
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
                   <TodoList list={data} handleDelete={_handleDelete} updateStatus={_updateStatus} />
              </div>
          </section>
      </Container>
    </>
  );
}



export default ToDo;