import React from 'react';
import Post from '../../components/Post';

const PostList = ({ posts, updateVote, sortPopular, sortNewest }) => {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          updateVote={updateVote}
          sortPopular={sortPopular}
          sortNewest={sortNewest}
        />
      ))}
    </div>
  );
};

export default PostList;
