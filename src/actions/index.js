const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

export const getAlbum = () => {
  return dispatch => {
    fetch('http://localhost:8080')
    .then(response => response.json())
    .then(photos => dispatch(receiveAlbum(photos)))
  }
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
