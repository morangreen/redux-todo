import {createStore, combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';

const combinedReducers = combineReducers({todo: todoReducer});

export default createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());