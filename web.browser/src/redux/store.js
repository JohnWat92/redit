import { createStore, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';

Store(
  combineReducers({
    messages: MessagesReducer, 
    user: ChatUsersReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxLogger)
);