import {API_BASE_URL} from '../config';
import axios from 'axios';

const GET_ALBUM = 'GET_ALBUM';
export function getAlbum(data) {
  return {
    type: GET_ALBUM,
    data
  };
}

export const sortApproved = (username, authToken) => { 
    axios.get(`${API_BASE_URL}/photos/sort/${username}`, {
      headers : {
        'Content-Type' : 'application/json', 
        "Authorization" : `Bearer ${authToken}` 
      }
    })
    .then((photos) => getAlbum(photos))
    .catch(error => console.log(error));
}

// export const sortApproved = (currentUser, authToken) => { 
//   return dispatch => {
//     fetch(`${API_BASE_URL}/photos/sort/${currentUser}`, {
//       method: 'GET',
//       headers : {
//         'Content-Type' : 'application/json', 
//         "Authorization" : `Bearer ${authToken}` 
//       }
//     })
//     .then((result) => result.json())
//     .then((result) => {
//       dispatch(getAlbum(result.data));
//     })
//     .catch(error => console.log(error));
//   }
// }

//First one sort of works after clicking another up or down


// const SORT_APPROVED = 'SORT_APPROVED';
// export function sortApproved(data){
//   let temp = data;
//   temp.sort((a,b) => {return a.approved - b.approved})
//   return{ 
//     type: SORT_APPROVED,
//     data:temp
//   };
// }

// const SORT_APPROVED = 'SORT_APPROVED';
// export function sortApproved(data){ 
//   console.log(data + ' data before')
//   let tempData = data.slice().sort((a, b) => {return a.approved - b.approved})
//   console.log(tempData + ' temp Data after')
//   return {  
//     type: SORT_APPROVED,
//     data : tempData
//   }  
// };

// const compare = (a, b)  => {
//   if (a.approved && !b.approved) {
//     return -1;
//   }
//   if (!a.approved && b.approved) {
//     return 1;
//   }
//   return 0;
// }

// const SORT_APPROVED = 'SORT_APPROVED';
// export function sortApproved(data){ 
//   console.log(data + ' data before')
//   let tempData = data.slice().sort(compare());
//   console.log(tempData + ' temp Data after')
//   return {  
//     type: SORT_APPROVED,
//     data : tempData
//   }  
// };

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
      dispatch(getAlbum(photos));
    })
    .catch(err => console.log(err))
  }
}