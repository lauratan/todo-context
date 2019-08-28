import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

const AddTodo = (props) => {
  console.log(props);
  const [newTodo, setNewTodo] = useState({});

  const onChange = (e) => {
    setNewTodo({
      id: uuidv4(),
      task: e.target.value,
      completed: false
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    //TODO: check input - if empty return an error message
    if (!_.isEmpty(newTodo)) {
      props.addTodo(newTodo);
      setNewTodo({});
    }
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