import React, { Component } from 'react';

import { data } from '../../mock-data';

import PostList from './PostList';
import PostToolBar from '../../components/PostToolBar';

class PostListContainer extends Component {
  constructor() {
    super();
    this.updateVote = this.updateVote.bind(this);
    this.state = {
      posts: data.posts,
      orderby: 'newest'
    };
  }
  updateVote(){
    console.log('updated');
  }
  sortPopular(posts) {
    const sortedPosts = posts.sort((a, b) => b.votes - a.votes);
    this.setState({
      orderby: 'popular',
      posts: sortedPosts
    });
  }
  sortNewest(posts) {
    const sortedPosts = posts.sort((a, b) => b.id - a.id);
    this.setState({
      orderby: 'newest',
      posts: sortedPosts
    });
  }
  render() {
    return (
      <div>
        <PostToolBar />
        <PostList
          posts={this.state.posts}
          updateVote={this.updateVote}
          sortPopular={() => this.sortPopular(this.state.posts)}
          sortNewest={this.sortNewest.bind(this, this.state.posts)}
        />
      </div>
    );
  }
}

export default PostListContainer;

