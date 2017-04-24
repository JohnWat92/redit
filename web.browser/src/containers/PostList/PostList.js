import React from 'react';
//IMPORT THE TOOLBAR HERE
import Post from '../../components/Post';

import styles from './styles.css';



const PostList = ({posts, updateVote}) => {
  return (
    <div>
    {/*<p>Post List </p>*/}
       {posts.map((post) => (
         <Post
           key={post.id}
           post={post}
           updateVote={updateVote}
           />
       ))}
    </div>
  )
}

export default PostList;