import React from 'react';
//IMPORT THE TOOLBAR HERE
// import PostToolBar from '../../components/PostToolBar';
import Post from '../../components/Post';

// import styles from './styles.css';



const PostList = ({ posts, updateVote, sortPopular, sortNewest }) => {
  return (
    <div>
      {posts.map((post) => (
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
