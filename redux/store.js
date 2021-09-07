import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import main from './reducer';
const rootReducer = combineReducers({
  main,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));