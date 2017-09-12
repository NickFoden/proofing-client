const initialState = {
    data: []
  }

  const album = (state = initialState, action) => {
    switch(action.type) {
      case 'RECEIVE_ALBUM':
        return {
          ...state,
          data: action.album
        }
      case 'GET_ALBUM':
        return {
          ...state,
          data: action.data
        }
      default:
        return state
    }
  }

  export default album