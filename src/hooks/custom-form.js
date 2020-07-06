import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'https://api401-todo.herokuapp.com/todo';

const useForm = (callback) => {
    const [toDoData, setToDoData] = useState({});

    const handleGet = () => {
        axios.get(apiUrl)
            .then(res => {
                let tempData = Object.assign({}, toDoData);
                tempData = {};
                setToDoData(tempData);

                let oneMore = Object.assign({}, toDoData);

                Object.assign(oneMore, ...[res.data]);

                setToDoData(oneMore);
            });
    }
    const habdlePost = (data) => {
        axios.post(apiUrl, {
                item: data.item,
                assignee: data.assignee,
                difficulty: data.difficulty,
                complete: data.complete,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);

            });
    }
    const handelUpdate = (data, _id) => {
        axios.put(`${apiUrl}/${_id}`, {
                item: data.item,
                assignee: data.assignee,
                difficulty: data.difficulty,
                complete: data.complete,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);

	  });
	  handleGet();
    }
    const habdleDelete = (_id) => {

        axios.delete(`${apiUrl}/${_id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
	  })
	handleGet();
    }
    return [toDoData, handleGet, habdlePost, habdleDelete, handelUpdate];
}

export default useForm;