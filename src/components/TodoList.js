import React from 'react';
import TodoCounter from './TodoCounter';

const TodoList = (props) => {
  let list = props.todos.map((todo, i) => {
    return (
      <li key={i}>
        <input className="mr-2" type="checkbox" checked={todo.completed}/> {todo.task}
      </li>
    )
  })
  return (
    <div>
      <div className="todo-heading">
        <h2>Todo List: </h2>
        <TodoCounter taskCount={props.taskCount} todos={props.todos}/>
      </div>
      <hr />
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default TodoList;