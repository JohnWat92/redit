//String Constants
// export const ADD_MESSAGE = 'ADD_MESSAGE';
// export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
//PostsReducer
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_POPULAR = 'SORT_POPULAR';
//WeeksReducer
export const GET_WEEK = 'GET_WEEK';



//Action Creators
// export const addMessage = (text) => ({type: ADD_MESSAGE, text});
// export const removeMessage = (id) => ({type: REMOVE_MESSAGE, id});
export const updateVote = id => ({ type: UPDATE_VOTE, id });
export const sortNewest = posts => ({ type: SORT_NEWEST, posts });
export const sortPopular = posts => ({ type: SORT_POPULAR, posts });

