const initialState = {
    data: []
  }

  const album = (state = initialState, action) => {
    switch(action.type) {
      case 'GET_ALBUM':
        return {
          ...state,
          data: action.data
        }
        case 'SORT_APPROVED':
          return {
            ...state,
            data: action.data
          }
      case 'APPROVE':
        return {
          ...state,
          data: state.data.map((imageData) => {
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
          data: state.data.map((imageData) => {
            if (action.image._id !== imageData._id) {
              return imageData;
            }

            return {
              ...imageData,
              approved: false
            }
          })
        }
      default:
        return state
    }
  }

  export default album