import React, {useReducer } from 'react';
import {Container} from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoContext from './context/todoContext';
import todoReducer from './context/todoReducer';
import {ADD_TODO} from './context/types';

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
  
  const [state, dispatch] = useReducer(todoReducer, initialState);


  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo
      }}
    >
      <Container className="m-3">
        <AddTodo/>
        <TodoList />
      </Container>
    </TodoContext.Provider>
  )
}

export default App;