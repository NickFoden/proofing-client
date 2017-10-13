const initialState = {
    imageData: []
  }

  const APPROVE = 'APPROVE';
  const DISPROVE = 'DISPROVE';

  const images = (state = initialState, action) => {
    switch(action.type) {
      
      case DISPROVE:
        return {
          ...state,
          imageData: action.imageData
        }
      default:
        return state
    }
  }

  export default images