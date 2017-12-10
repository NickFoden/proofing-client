const initialState = {
    albumArray: []
  }

  const photoAlbumReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ALBUM':
            return {
            ...state,
            albumArray: action.data
            }
        default:
            return state
    }
  }

  export default photoAlbumReducer;

