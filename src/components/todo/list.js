import React from 'react';
import { ListGroup ,Button , Toast,ToastHeader} from 'react-bootstrap';

const TodoList = (props) => {

      return (props.list.map((val, idx) => { 
        let status;
        let complete;
        !val.complete ? status = 'danger' : status = 'success';
        !val.complete ? complete='uncomplete'  : complete='completed' ;

       return <Toast key={val._id} >
       <ToastHeader closeButton={false} >
       <Button className='complete' onClick={()=>props.updateStatus({val: val.item,
			assignee: val.assignee,
			difficulty: val.difficulty,
			complete: !val.complete,},val._id)  }
         variant={`${status}`}>{complete}</Button>{' '}
         <strong className="mr-auto assign" >{val.assignee}</strong>
         <Button className='closedel' variant="outline-dark"  onClick={()=>props.handleDelete(val._id) }>X</Button>
       </ToastHeader>
       <Toast.Body className='assign'>{val.item}</Toast.Body>
       <small className='difficult'>Difficulty: {val.difficulty}</small>
     </Toast>
    }));
}

export default TodoList;