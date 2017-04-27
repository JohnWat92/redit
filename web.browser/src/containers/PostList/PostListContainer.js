import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVote, sortPopular, sortNewest } from '../../redux/actions';

import PostList from './PostList';
import PostToolBar from '../../components/PostToolBar';

class PostListContainer extends Component {
  constructor() {
    super();
    // this.updateVote = this.updateVote.bind(this);
    // this.sortPopular = this.sortPopular.bind(this);
    // this.sortNewest = this.sortNewest.bind(this);
  }
  updateVote(id) {
    this.props.dispatch(updateVote(id));
  }
  sortPopular() {
    this.props.dispatch(sortPopular());
  }
  sortNewest() {
    this.props.dispatch(sortNewest());
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
          posts={this.props.posts}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ posts: state.posts });
export default connect(mapStateToProps)(PostListContainer);

