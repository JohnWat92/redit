import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVote, sortPopular, sortNewest } from '../../redux/actions';
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
  updateVote(id) {
    console.log('updated');
    this.props.dispatch(updateVote(id));
    // this.state.posts.map(post => postID === post.id && (post.votes += 1));
    // this.forceUpdate();
  }
  sortPopular() {
    console.log('sorting post by popularity');
    console.log('THIS IS THE PROPS',this.props);
    this.props.dispatch(sortPopular());
    // const sortedPosts = posts.sort((a, b) => b.votes - a.votes);
    // this.setState({
    //   orderby: 'popular',
    //   posts: sortedPosts
    // });
  }
  sortNewest() {
    console.log('sorting post by newest');
    this.props.dispatch(sortNewest());
    // const sortedPosts = posts.sort((a, b) => b.id - a.id);
    // this.setState({
    //   orderby: 'newest',
    //   posts: sortedPosts
    // });
  }
  render() {
    return (
      <div>
        <PostToolBar
          sortNewest={this.props.sortNewest}
          sortPopular={this.props.sortPopular}
        />
        <PostList
          updateVote={this.props.updateVote}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ( { posts: state.posts });
export default connect(mapStateToProps)(PostListContainer);

