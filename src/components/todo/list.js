import React, { useState, useContext } from 'react';
import { ListGroup ,Button , Toast,ToastHeader} from 'react-bootstrap';
import Auth from '../auth'

import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsContext } from '../../context/pagination'
var arr;
function TodoList(props) {


  const siteContext = useContext(SettingsContext);

  const [btnIdx, setBtnIdx] = useState(0);

  const handelPages = (pgNumber) => {
    let newArr = props.list.filter(element => {
      return !siteContext.show ? true : !element.complete;
    });
    let btns = Math.floor(newArr.length / pgNumber + (newArr.length % pgNumber > 0 ? 1 : 0));
    arr = new Array(btns).fill(0);
  };

  handelPages(siteContext.itemsPerPage);

const btnHandler =(idx)=>{
	setBtnIdx(idx)
}

  return (
    <>
      <ul>
        {props.list.sort((a,b) =>  a.difficulty-b.difficulty )
          .filter(val => !siteContext.show ? true : !val.complete)
          .slice(btnIdx * siteContext.itemsPerPage, btnIdx * siteContext.itemsPerPage + siteContext.itemsPerPage)
          .map((val, idx) => { 
		let status;
		let complete;
		!val.complete ? status = 'danger' : status = 'success'; 
		!val.complete ? complete='uncomplete'  : complete='completed' ;
	  
	         return <Toast key={val._id} >
	         <ToastHeader closeButton={false} >
	         <Auth capability="update">
		  <Button className='complete' onClick={()=>props.updateStatus({val: val.item,
					  assignee: val.assignee,
					  difficulty: val.difficulty,
					  complete: !val.complete,},val._id)  }
					  variant={`${status}`}>{complete}</Button>{' '}
		  </Auth>
		 <strong className="mr-auto assign" >{val.assignee}</strong>
		 <Auth capability="delete">
	         <Button className='closedel' variant="outline-dark"  onClick={()=>{ props.handleDelete(val._id) }}>X </Button>
		 </Auth>
	         </ToastHeader>
	         <Toast.Body className='assign'>{val.item}</Toast.Body>
	         <small className='difficult'>Difficulty: {val.difficulty}</small>
	       </Toast>
	       
	      }
          )
        }
	  <div>
	    {arr.map((val, idx) => (<Button className='closedel'  key={idx} onClick={() => {btnHandler(idx)}}  >{idx}</Button>))}
	  </div>
      </ul>

    </>
  )
}

export default TodoList;