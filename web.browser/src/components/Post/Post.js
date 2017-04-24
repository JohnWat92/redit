import React from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

// import PostListContainer from '../../containers/PostList/PostListContainer';

// post post categories?
  // console.log(post);

const Post = ({post, updateVote}) => (
  <div className={styles.postCard}>
    <Card>
      <a href={post.link}>
        <CardTitle title={post.title} />
      </a>
      <CardText>
        {post.description}
      </CardText>
      <CardActions>
        <div className={styles.postBottom}>
          <FlatButton label="Vote" onClick={updateVote} />
          <Chip >
              {post.categories}
          </Chip>
        </div>
      </CardActions>
    </Card>
  </div>
);

export default Post;