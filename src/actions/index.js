
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
        console.log(response);
        dispatch(getAlbum(response));
      })
    )
    .catch(err => console.log(err))
  }
}