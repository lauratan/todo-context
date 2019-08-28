import {createContext} from 'react';

const todoContext = createContext({
  todos: [],
  addTodo: (todo) => {}
})

export default todoContext;