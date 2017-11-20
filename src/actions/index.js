import {API_BASE_URL} from '../config';

const GET_ALBUM = 'GET_ALBUM';
export function getAlbum(data) {
  return {
    type: GET_ALBUM,
    data
  };
}

const APPROVE = 'APPROVE';
export function approve(image) {
  fetch(`${API_BASE_URL}/images/${image._id}/approve`, {
    method: 'PUT'
  })
  return {
    type: APPROVE,
    image
  };
}

const DISPROVE = 'DISPROVE';
export function disprove(image) {
  fetch(`${API_BASE_URL}/images/${image._id}/disprove`, {
    method: 'PUT'
  })
  return {
    type: DISPROVE,
    image
  };
}

//const authToken = getState().auth.authToken;

export const savePhoto = (uploaded, currentUser) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/photos/${currentUser}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'/*, 
        'Authorization' : `Bearer ${authToken}`*/
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