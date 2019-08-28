import {createContext} from 'react';

const todoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {}
})

export default todoContext;