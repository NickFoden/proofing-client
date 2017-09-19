
const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

const GET_ALBUM = 'GET_ALBUM';
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
    .then(
      fetch('http://localhost:8080')
      .then(response => response.json())
      .then((response) => {
        console.log(response),
        dispatch(getAlbum(response));
      })
    )
    /*.then(response => dispatch(receiveAlbum()))*/
    .catch(err => console.log(err))
  }
}



/*export const saveAction = (...images) => {
  return dispatch => {
    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        ...images
      })
    })
    .then(response => response.json())
    .then(response => dispatch(receiveAlbum()))
    .catch(err => console.log(err))
  }
}*/