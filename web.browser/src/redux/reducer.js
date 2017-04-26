import { UPDATE_VOTE, SORT_NEWEST, SORT_POPULAR } from './actions';
import { data } from '../mock-data';



export const PostsReducer = (state = data.posts, action) => {
  switch (action.type) {
    case UPDATE_VOTE:
      const newPostList = state.map((post) => {
        // console.log(action.id);
        if (action.id === post.id) {
          post.votes = post.votes + 1;
        }
        return post;
      });
      return newPostList;
    case SORT_NEWEST:
      console.log(' sorting newest', state);
      console.log('state', state); // gives me the right thing
      console.log('this', this); //undefined
      // console.log('this.state', this.state);
      const newestPosts = state.sort((a, b) => b.id - a.id);
      return newestPosts;
    case SORT_POPULAR:
      console.log(' sorting popular', state);
      const popularPosts = state.sort((a, b) => b.votes - a.votes);
      return popularPosts;
    default:
      return state;
  }
}

export const WeeksReducer = (state = data.weeks, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
