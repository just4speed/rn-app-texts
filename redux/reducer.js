
const initialState = {
  pressure: 'high',
  fillColor: "#38306b",
  outlineColor: "#fff285",
  backgroundColor: "#000000"
}

export default function(state = initialState, action){
  switch(action.type){
    case 'CHANGE_PRESSURE': {
      return {
        ...state,
        pressure: state.pressure == 'high' ? 'low' : 'high'
      }
    }

    case 'CHANGE_FILL': {
      return {
        ...state,
        fillColor: action.payload
      }
    }
    case 'CHANGE_OUTLINE': {
      return {
        ...state,
        outlineColor: action.payload
      }
    }
    case 'CHANGE_BACKGROUND': {
      return {
        ...state,
        backgroundColor: action.payload
      }
    }

    default: {
      return state;
    }
  }
}