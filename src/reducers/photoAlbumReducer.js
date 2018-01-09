const initialState = {
  albumArray: [],
  currentAlbum: [],
  guestAlbums: [],
  currentGuestAlbum: [],
};

const photoAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALBUM':
      return {
        ...state,
        albumArray: action.data,
      };
    case 'SET_CURRENT_ALBUM':
      return {
        ...state,
        currentAlbum: action.data,
      };
    case 'ADD_GUEST_ALBUM':
      return {
        ...state,
        guestAlbums: action.data,
      };
    case 'SET_CURRENT_GUEST_ALBUM':
      return {
        ...state,
        currentGuestAlbum: action.data,
      };
    // case 'UPDATE_GUEST_ALBUM':
    //   return {
    //     ...state,
    //     currentGuestAlbum: action.data,
    //   };
    // return {
    //   ...state,
    //   currentGuestAlbum: state.currentGuestAlbum((albumData) => {
    //     if (action.album._id !== albumData._id) {
    //       return albumData;
    //     }
    //     return {
    //       ...albumData,
    //       currentGuestAlbum: action.album,
    //     };
    //   }),
    // };
    default:
      return state;
  }
};

export default photoAlbumReducer;
