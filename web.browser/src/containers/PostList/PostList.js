import React from 'react';
import Post from '../../components/Post';
import { connect } from 'react-redux';
// import { sortNewest, sortPopular } from '../../redux/actions';

const PostList = ({ posts, sortPopular, sortNewest }) => {
    console.log('updated', posts);

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
