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
  sortPopular(posts){
    let sortedPosts = posts.sort(function (a,b){
      return b.votes - a.votes;
    });
    this.setState({
      orderby:'popular',
      posts: sortedPosts
    })
  }
  sortNewest(posts){
    let sortedPosts = posts.sort(function (a,b){
      return b.id - a.id;
    });
    this.setState({
      orderby:'newest',
      posts: sortedPosts
    })
  }
  render() {
    return (
      <PostList 
        posts={this.state.posts}
        updateVote={this.updateVote}
        sortPopular={() => this.sortPopular(this.state.posts)}
        sortNewest={this.sortNewest.bind(this, this.state.posts)}
      />
    );
  }
}

export default PostListContainer;