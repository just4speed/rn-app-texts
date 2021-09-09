import highPressure from '../data/high-pressure';
import lowPressure from '../data/low-pressure';

const initialState = {
  pressure: highPressure,
  fillColor: "#38306b",
  outlineColor: "#fff285",
  powerlineColor: "#000",
  backgroundColor: "#000000",
  highlightColor: "#000",

  powerlines: true,
  highlights: true
}

export default function(state = initialState, action){
  switch(action.type){
    case 'CHANGE_PRESSURE': {
      return {
        ...state,
        pressure: state.pressure == highPressure ? lowPressure : highPressure
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
    case 'CHANGE_POWERLINE': {
      return {
        ...state,
        powerlineColor: action.payload
      }
    }
    case 'CHANGE_HIGHLIGHT': {
      return {
        ...state,
        highlightColor: action.payload
      }
    }

    default: {
      return state;
    }
  }
}