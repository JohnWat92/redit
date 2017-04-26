import React from 'react';
import Post from '../../components/Post';
import { connect } from 'react-redux';
// import { sortNewest, sortPopular } from '../../redux/actions';

const PostList = ({ posts, sortPopular, sortNewest }) => {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ( { posts: state.posts });
export default connect(mapStateToProps)(PostList);
