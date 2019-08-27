import React, { useReducer } from 'react';
import {Container} from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = {
    todos: [
      {
        task: 'Walk dog',
        completed: false
      },
      {
        task: 'Cook dinner',
        completed: true
      }
    ]
  };

  return (
    <Container className="m-3">
      <AddTodo />
      <TodoList todos={initialState.todos} />
    </Container>
  )
}

export default App;