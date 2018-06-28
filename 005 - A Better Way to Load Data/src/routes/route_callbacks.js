import store from '../store';
import { fetchPhotos } from '../actions';

export function onPhotosEnter() {
  store.dispatch(fetchPhotos());
}
