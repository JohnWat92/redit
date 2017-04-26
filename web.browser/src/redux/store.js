import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';

import { PostsReducer, WeeksReducer } from './reducer';

export default createStore(
  combineReducers({
    posts: PostsReducer,
    weeks: WeeksReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxLogger)
);
