import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "./actionTypes";
import todoJson from "../apis/data";

//crud actions
export const fetchPosts = () => {
  return dispatch => dispatch({ type: FETCH_POSTS, payload: todoJson });
};

export const createTodo = postData => {
  return dispatch => dispatch({ type: CREATE_POST, payload: postData });
};

export const deleteTodo = id => {
  return dispatch => dispatch({ type: DELETE_POST, payload: id });
};
