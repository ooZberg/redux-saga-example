import * as types from "./types";

export const fetchTodos = () => ({
  type: types.TODOS_FETCH_REQUESTED,
  url: "https://jsonplaceholder.typicode.com/todos"
  // this url will return data that looks like this:
  // [
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": false
  //   },
  // ...
});

export const completeTodo = (id) => ({
  type: types.COMPLETE_TODO,
  id: id
});

// TODO: add more actions here