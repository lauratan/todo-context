import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

const AddTodo = (props) => {
  console.log(props);
  const [newTodo, setNewTodo] = useState({});

  const onChange = (e) => {
    setNewTodo({
      task: e.target.value,
      completed: false
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setNewTodo({});
  }

  return (
    <div className="mb-2">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>New Todo</Form.Label>
          <Form.Control type="text" placeholder="e.g Water plants" onChange={onChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" >Add New Todo</Button>
      </Form>
    </div>
  )
}

export default AddTodo;