const initialState = {
  albumArray: [],
  currentAlbum: [],
  guestAlbums: [],
  currentGuestAlbum: []
};

const photoAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALBUM":
      return {
        ...state,
        albumArray: action.data
      };
    case "SET_CURRENT_ALBUM":
      return {
        ...state,
        currentAlbum: action.data
      };
    case "ADD_GUEST_ALBUM":
      return {
        ...state,
        guestAlbums: action.data
      };
    case "SET_CURRENT_GUEST_ALBUM":
      return {
        ...state,
        currentGuestAlbum: action.data
      };
    // case 'UPDATE_GUEST_ALBUM':
    //     return {
    //     ...state,
    //     guestAlbums: state.guestAlbums.map((albumData) => {
    //         if (action.album._id !== albumData._id) {
    //             return albumData
    //         }
    //         return {
    //             ...albumData,
    //             album : action.album.albumArray
    //         }
    //     })
    // }
    default:
      return state;
  }
};

export default photoAlbumReducer;
