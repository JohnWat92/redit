import React from 'react';
import Post from '../../components/Post';
import { connect } from 'react-redux';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          votes={post.votes}
        />
      ))}
    </div>
  );
};

export default connect()(PostList);
