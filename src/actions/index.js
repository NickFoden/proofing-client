const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
const GET_ALBUM = 'GET_ALBUM';
const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

export function getAlbum(data) {
  return {
    type: GET_ALBUM,
    data
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
    .then(response => response.json())
    .then(response => dispatch(receiveAlbum()))
    .catch(err => console.log(err))
  }
}
