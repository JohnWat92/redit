import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

import PostListContainer from '../../containers/PostList/PostListContainer';
// post post categories?
const Post = ({post, updateVote}) => (
  <div className={styles.postCard}>
    <Card>
      <CardTitle title={post.title}/>  
      <CardText>
        {post.description}
      </CardText>
      <CardActions>
        <div className={styles.postBottom}>
          <FlatButton label="Upvote Place" onClick={updateVote} />
          <Chip >
              CHIP I
          </Chip>
        </div>
      </CardActions>
    </Card>
  </div>
);

export default Post;