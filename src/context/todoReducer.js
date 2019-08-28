import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types';

const addTodo = (todo, state) => {
  const newTodos = [...state.todos, todo];
  return {
    ...state,
    todos: newTodos
  }
}

const toggleTodo = (id, state) => {
  state.todos.filter(todo=> {
    return todo.id === id ? todo.completed = !todo.completed : todo
  })
  return {...state}
}

const deleteTodo = (id, state) => {
  const newTodos = state.todos.filter(todo=> {
    return todo.id !== id
  })
  return {...state, todos: newTodos}
}

export default (state, action) => {
  switch(action.type){
    case ADD_TODO:
      return addTodo(action.payload, state);
    case TOGGLE_TODO:
        return toggleTodo(action.payload, state);
    case DELETE_TODO:
      return deleteTodo(action.payload, state);
    default:
      return state;
  }
}
