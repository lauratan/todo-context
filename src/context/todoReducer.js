import { ADD_TODO, TOGGLE_TODO } from './types';

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

export default (state, action) => {
  switch(action.type){
    case ADD_TODO:
      return addTodo(action.payload, state);
    case TOGGLE_TODO:
        return toggleTodo(action.payload, state);
    default:
      return state;
  }
}
