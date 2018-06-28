import axios from 'axios';
import {
  FETCH_POSTS,
  SELECT_POST,
  DESELECT_POST
} from './types'

export function fetchPosts() {
  const request = axios.get('http://jsonplaceholder.typicode.com/posts');

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function selectPost(id) {
  return {
    type: SELECT_POST,
    payload: id
  };
}

export function deselectPost(id) {
  return {
    type: DESELECT_POST,
    payload: id
  };
}
