const initialState = {
    albumArray: [],
    currentAblum: {}
  }

  const photoAlbumReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ALBUM':
            return {
            ...state,
            albumArray: action.data
            }
        case 'SET_CURRENT_ALBUM':
            return {
            currentAlbum: action.data
            }   
        default:
            return state
    }
  }

  export default photoAlbumReducer;

