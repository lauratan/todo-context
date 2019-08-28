import React, { useState } from 'react';

const TodoCounter = (props) => {
  return <p className="counter m-1">{props.taskCount} Tasks</p>
}

export default TodoCounter;