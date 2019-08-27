import React, { useReducer } from 'react';
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
    <div className="container">
      <AddTodo />
      <TodoList todos={initialState.todos} />
    </div>
  )
}

export default App;