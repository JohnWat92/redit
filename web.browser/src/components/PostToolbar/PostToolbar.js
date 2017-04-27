import React from 'react';
import { connect } from 'react-redux';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';
import { sortNewest, sortPopular } from '../../redux/actions';

const PostToolBar = ({ post, dispatch }) => {
  return (
    <div>
      <Toolbar>
        <ToolbarTitle className={styles.text} text="Posts" />
        <div>
          <ToolbarTitle className={styles.text} text="Sort: " />
          <FlatButton label="Newest" onClick={() => dispatch(sortNewest(post))} />
          <FlatButton label="Popular" onClick={() => dispatch(sortPopular(post))} />
        </div>
      </Toolbar>
    </div>
  );
};
export default connect()(PostToolBar);
