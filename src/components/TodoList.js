import React, {useContext} from 'react';
import TodoCounter from './TodoCounter';
import TodoContext from '../context/todoContext';

const TodoList = () => {
  const context = useContext(TodoContext);
  const onChange = (id) => {
    console.log(id);
  }
  
  let list = context.todos.map((todo, i) => {
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
        <TodoCounter/>
      </div>
      <hr />
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default TodoList;