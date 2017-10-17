
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
  fetch('http://localhost:8080/images/' + image._id + '/approve', {
    method: 'PUT'
  })
  return {
    type: APPROVE,
    image
  };
}

const DISPROVE = 'DISPROVE';
export function disprove(image) {
  fetch('http://localhost:8080/images/' + image._id + '/disprove', {
    method: 'PUT'
  })
  return {
    type: DISPROVE,
    image
  };
}

export const savePhoto = (uploaded) => {
  return dispatch => {
    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        uploaded
      })
    })
    .then(
      fetch('http://localhost:8080')
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        dispatch(getAlbum(response));
      })
    )
    .catch(err => console.log(err))
  }
}