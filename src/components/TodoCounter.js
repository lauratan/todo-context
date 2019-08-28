import React, {useContext} from 'react';
import TodoContext         from '../context/todoContext';

const TodoCounter = () => {
  const context = useContext(TodoContext);
  return <p className="counter m-1">{context.todos.length} Tasks</p>
}

export default TodoCounter;