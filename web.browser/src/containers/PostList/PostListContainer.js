import React, { Component } from 'react';

import { data } from '../../mock-data';

import PostList from './PostList';
import PostToolBar from '../../components/PostToolBar';

class PostListContainer extends Component {
  constructor() {
    super();
    this.updateVote = this.updateVote.bind(this);
    this.sortPopular = this.sortPopular.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
    
    this.state = {
      posts: data.posts,
      orderby: 'newest'
    };
  }
  updateVote(postID){
    console.log('updated');
    console.log(posts);
    this.state.posts.map((post) => postID === post.id && (
      post.votes += 1
    ));
    this.forceUpdate();
    // var votes = posts.votes;
    // votes += votes + 1;
    // console.log(votes);
    // return votes;
  }
  sortPopular(posts) {
    console.log('sorting post by popularity');
    const sortedPosts = posts.sort((a, b) => b.votes - a.votes);
    this.setState({
      orderby: 'popular',
      posts: sortedPosts
    });
  }
  sortNewest(posts) {
    console.log('sorting post by newest');
    const sortedPosts = posts.sort((a, b) => b.id - a.id);
    this.setState({
      orderby: 'newest',
      posts: sortedPosts
    });
  }
  render() {
    return (
      <div>
        <PostToolBar
          sortPopular={() => this.sortPopular(this.state.posts)}
          sortNewest={this.sortNewest.bind(this, this.state.posts)}
        />
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

