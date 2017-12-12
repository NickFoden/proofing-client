const initialState = {
    albumArray: [],
    currentAlbum: []
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
        ...state,
        currentAlbum: action.data
        }   
    default:
        return state
        }
    }

  export default photoAlbumReducer;

