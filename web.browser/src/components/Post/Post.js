import React from 'react';
import { connect } from 'react-redux';


import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';
import { updateVote } from '../../redux/actions';



const Post = ({ post, votes, dispatch }) => {
  return (
    <div className={styles.postCard}>
      <Card>
        <a className={styles.title} href={post.link}>
          <CardTitle title={post.title} />
        </a>
        <CardText>
          {post.description}
        </CardText>
        <CardActions>
          <div className={styles.postBottom}>
            <FlatButton onClick={() => dispatch(updateVote(post.id))}>
              <span className={styles.voteButton}>
                <svg className={styles.upArrow} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 6l-4 4h8z" /></svg> Vote {votes}
              </span>
            </FlatButton>
            <Chip>
              {post.categories}
            </Chip>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};



export default connect()(Post);

