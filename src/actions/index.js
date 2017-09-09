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
