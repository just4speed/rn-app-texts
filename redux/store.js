import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import main from './reducer';
import saveReducer from './saveReducer';

const rootReducer = combineReducers({
  main,
  saved: saveReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));