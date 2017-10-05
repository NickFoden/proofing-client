const initialState = {
    imageData: []
  }

  const images = (state = initialState, action) => {
    switch(action.type) {
      case 'APPROVE':
        return {
          ...state,
          imageData : action.imageData
        }
      case 'DISPROVE':
        return {
          ...state,
          imageData: action.imageData
        }
      default:
        return state
    }
  }

  export default images