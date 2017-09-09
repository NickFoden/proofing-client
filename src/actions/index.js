const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

const GET_ALBUM = 'GET_ALBUM'
const getAlbum = (album) => ({
  type: GET_ALBUM,
  album
})

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
    .then(response => dispatch(receiveAlbum(json)))
    .catch(err => console.log(err))
  }
}
