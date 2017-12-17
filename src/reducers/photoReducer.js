const initialState = {
    photosState: []
  }

  const photoReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'MAP_ALBUM':
        return {
          ...state,
          photosState: action.data
        }
      case 'SORT_APPROVED':
        return {
          ...state,
          photosState: action.data
        }
      case 'APPROVE':
        return {
          ...state,
          photosState: state.photosState.map((imageData) => {
            if (action.image._id !== imageData._id) {
              return imageData;
            }
            return {
              ...imageData,
              approved: true
            }
          })
        }
      case 'DISPROVE':
        return {
          ...state,
         photosState: state.photosState.map((imageData) => {
            if (action.image._id !== imageData._id) {
              return imageData;
            }
            return {
              ...imageData,
              approved: false
            }
          })
        }
      case 'GUEST_APPROVE':
        return {
          ...state,
          photosState: state.photosState.map((imageData) => {
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

  export default photoReducer