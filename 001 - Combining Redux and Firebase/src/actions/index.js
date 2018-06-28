import Firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST
} from './types';

const Posts = new Firebase('https://fbredux.firebaseio.com/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
