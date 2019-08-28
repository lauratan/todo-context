import { ADD_TODO } from './types';

const addTodo= (todo, state) => {
  const newTodos = [...state.todos, todo];
  return {
    ...state,
    todos: newTodos
  }
}

export default (state, action) => {
  switch(action.type){
    case ADD_TODO:
      return addTodo(action.payload, state);
    default:
      return state;
  }
}
