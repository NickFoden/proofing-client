import {API_BASE_URL} from '../config';

const GET_ALBUM = 'GET_ALBUM';
export function getAlbum(data) {
  return {
    type: GET_ALBUM,
    data
  };
}

/*   Added on whim, need to check
const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export function receiveAlbum(album) {
  return {
    type: RECEIVE_ALBUM,
    album
  };
}*/

const APPROVE = 'APPROVE';
export function approve(image) {
  fetch(`${API_BASE_URL}images/${image._id}/approve`, {
    method: 'PUT'
  })
  return {
    type: APPROVE,
    image
  };
}

const DISPROVE = 'DISPROVE';
export function disprove(image) {
  fetch(`${API_BASE_URL}images/${image._id}/disprove`, {
    method: 'PUT'
  })
  return {
    type: DISPROVE,
    image
  };
}

export const savePhoto = (uploaded) => {
  return dispatch => {
    fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        uploaded
      })
    })
    .then((response) => response.json())
    .then((photos) => {
      dispatch(getAlbum(photos));
    })
    .catch(err => console.log(err))
  }
}