import React from 'react';
import TodoCounter from './TodoCounter';

const TodoList = ({todos, taskCount}) => {
  const onChange = (id) => {
    console.log(id);
  }
  
  let list = todos.map((todo, i) => {
    console.log('???', todo);
    return (
      <li key={i}>
        <input className="mr-2" type="checkbox" checked={todo.completed} onChange={()=> onChange(todo.id)}/> {todo.task}
      </li>
    )
  })
  return (
    <div>
      <div className="todo-heading">
        <h2>Todo List: </h2>
        <TodoCounter taskCount={taskCount} todos={todos}/>
      </div>
      <hr />
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default TodoList;