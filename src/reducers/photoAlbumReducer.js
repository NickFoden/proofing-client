const initialState = {
    albumArray: [],
    currentAlbum: [],
    guestAlbums: [],
    currentGuestAlbum :[],
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
    case 'ADD_GUEST_ALBUM':
        return {
        ...state,
        guestAlbums: action.data
        } 
    case 'SET_CURRENT_GUEST_ALBUM':
        return {
        ...state,
        currentGuestAlbum: action.data
        } 
    case 'GUEST_APPROVE':
        return {
          ...state,
         currentGuestAlbum: state.currentGuestAlbum.albumArray.map((imageData) => {
            if (action.image._id !== imageData._id) {
              return imageData;
            }
            return {
              ...imageData,
              guests: action.data
            }
          })
        }    
    default:
        return state
        }
    }

  export default photoAlbumReducer;

