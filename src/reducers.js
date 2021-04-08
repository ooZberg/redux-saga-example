import * as types from "./types";

export const initialState = {
  todos: [],
  isFetching: false,
};

export const rootReducer = (state, action) => {
  switch (action.type) {
  case types.TODOS_FETCH_REQUESTED:
    return {
      ...state,
      isFetching: true
    };
  case types.TODOS_FETCH_RECEIVED:
    return {
      ...state,
      todos: action.payload,
      isFetching: false
    };
  case types.TODOS_FETCH_FAILED:
    return {
      ...state,
      todos: [],
      isFetching: false
    };
  case types.COMPLETE_TODO: {
    let updatedTodos = state.todos;
    for (let i = 0; i < updatedTodos.length; i++) {
      if (updatedTodos[i].id == action.id) {
        // this the one
        updatedTodos[i].completed = true;
      }
    }
    return {
      ...state,
      todos: [...updatedTodos]
    }
  }
  default:
    return state;
  }
}