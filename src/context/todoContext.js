import {createContext} from 'react';

const todoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  toggleTodo: (id) => {}
})

export default todoContext;