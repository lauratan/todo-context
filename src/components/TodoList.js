import React, { useState } from 'react';

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
      <h2>Todo List: </h2>
      <hr />
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default TodoList;