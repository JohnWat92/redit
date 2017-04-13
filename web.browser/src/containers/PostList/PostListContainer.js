import React, { Component } from 'react';

import {data} from '../../mock-data';

import PostList from './PostList';

class PostListContainer extends Component {
  constructor(){
    super();
    this.updateVote = this.updateVote.bind(this);

    this.state = {
      posts:data.posts,
      orderby: 'newest'
    }
  }
  
  updateVote(){
    console.log('updated');
  }
  render() {
    return (
      <PostList 
        posts={this.state.post}
        updateVote={this.updateVote}
      />
    )
  }
}

export default PostListContainer;