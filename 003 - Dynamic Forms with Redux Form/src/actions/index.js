import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = `?key=ab42`;

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${KEY}`,);

  return {
    type: DELETE_POST,
    payload: request
  };
}
