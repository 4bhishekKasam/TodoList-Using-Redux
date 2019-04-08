import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "../actions/actionTypes";

const initialState = {
  todos: [],
  todo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        todos: action.payload
      };

    case CREATE_POST:
      return {
        ...state,
        todo: action.payload
      };

    case DELETE_POST:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};
