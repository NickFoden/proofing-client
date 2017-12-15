import {API_BASE_URL} from '../config';
import axios from 'axios';

const MAP_ALBUM = 'MAP_ALBUM';
export function mapAlbum(data) {
  return {
    type: MAP_ALBUM,
    data
  };
}

const ADD_ALBUM = 'ADD_ALBUM';
export function addAlbum(data) {
  return {
    type: ADD_ALBUM,
    data
  };
}

const SET_CURRENT_ALBUM = 'SET_CURRENT_ALBUM';
export function setCurrentAlbum(data) {
  return {
    type: SET_CURRENT_ALBUM,
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

export const sortApproved = (username, authToken) => (dispatch) => { 
  axios.get(`${API_BASE_URL}/photos/sort/${username}`, {
    headers : {
      // 'Content-Type' : 'application/json', 
      "Authorization" : `Bearer ${authToken}` 
    }
  })
  .then(result => {
      dispatch(mapAlbum(result.data))
    })
  .catch(error => console.log(error));
}

export const loadPhotos = (username, authToken) => (dispatch) => {
  axios.get(`${API_BASE_URL}/photos/${username}`, {
    headers : {
        "Authorization" : `Bearer ${authToken}` 
    }
  })
    .then(result => {
        dispatch(mapAlbum(result.data));
    })
    .catch(error => console.log(error));
}

export const loadAlbums = (username, authToken) => (dispatch) => {
  axios.get(`${API_BASE_URL}/albums/${username}`, {
    headers : {
        "Authorization" : `Bearer ${authToken}` 
    }
  })
    .then(result => {
      dispatch(addAlbum(result.data));
    })
    .catch(error => console.log(error));
}

//Axios version returns unauthorized
//TODO Look at more axios examples for post

// export const saveAlbum = (username, authToken, images) => (dispatch) => { 
//   axios.post(`${API_BASE_URL}/albums/${username}`, {
//     headers : {
//       // 'Content-Type' : 'application/json', 
//       "Authorization" : `Bearer ${authToken}` 
//     },
//     data : {
//       username,
//       images
//     }
//   })
//   .then(result => {
//     console.log('result from api ' + result)
//       // dispatch(mapAlbum(result)
//     })
//   .catch(error => console.log(error));
// }

export const savePhoto = (uploaded, currentUser, authToken) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/photos/${currentUser}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json', 
        'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify({
        uploaded
      })
    })
    .then((response) => response.json())
    .then((photos) => {
      dispatch(mapAlbum(photos));
    })
    .catch(err => console.log(err))
  }
}

// export const getAlbums = (username, authToken) => (dispatch) => {
//   axios.get(`${API_BASE_URL}/albums/${username}`, {
//     headers : {
//         "Authorization" : `Bearer ${authToken}` 
//     }
//   })
//     .then((result) => {
//         dispatch(addAlbums(result.data));
//     })
//     .catch(error => console.log(error));
//   }

export const saveAlbum = (title, username, authToken, images) => dispatch => { 
  fetch(`${API_BASE_URL}/albums/${title}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json', 
      "Authorization" : `Bearer ${authToken}` 
    },
    body: JSON.stringify({
      images
    })
  })
  .then((response) => response.json())
  .then((album) => {
    dispatch(addAlbum(album))
  })
  .catch(error => console.log(error));
}

export const removeApproved = (username, authToken, images) => dispatch => { 
  fetch(`${API_BASE_URL}/images/remove/${username}`, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json', 
      "Authorization" : `Bearer ${authToken}` 
    },
    body: JSON.stringify({
      images
    })
  })
  .then((response) => {
    dispatch(loadPhotos(username, authToken))
  })
  .catch(error => console.log(error));
}