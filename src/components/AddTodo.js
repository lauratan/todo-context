import React, { useState } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const AddTodo = () => {
  return (
    <div className="mb-2">
      <InputGroup>
        <FormControl
          placeholder="New todo task"
        />
      </InputGroup>
    </div>
  )
}

export default AddTodo;