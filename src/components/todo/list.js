import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TodoList = (props) => {

      return (props.list.map(toDO => {
        let status;
        !toDO.complete ? status = 'success' : status = 'danger';
      return <ListGroup.Item as="li"
        className={`complete-${toDO.complete.toString()}`}
        key={toDO._id} onClick={() => props.handleComplete(toDO._id)}
        variant={`${status}`}
      >
        {`${toDO.text} Assign to "${toDO.assignee}"`}
      </ListGroup.Item>
    }));
}

export default TodoList;