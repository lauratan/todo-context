import React, { useState, useReducer } from 'react';
import {Container} from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = {
    todos: [
      {
        id: 1,
        task: 'Walk dog',
        completed: false
      },
      {
        id: 2,
        task: 'Cook dinner',
        completed: true
      }
    ]
  };

  const [todos, setTodo] = useState(initialState.todos);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  }

  const updateTodo = (id) => {
    todos.map(todo => {
      if (todo.id === id) todo.completed = true;
    })
  }

  return (
    <Container className="m-3">
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} taskCount={todos.length} updateTod={updateTodo}/>
    </Container>
  )
}

export default App;