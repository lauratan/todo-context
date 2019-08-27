import React, { useState } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const AddTodo = () => {
  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="New todo task"
        />
      </InputGroup>
    </div>
  )
}

export default AddTodo;