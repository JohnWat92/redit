import React from 'react';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

const PostToolBar = ({ sortPopular, sortNewest }) => (
  <div>
    <Toolbar>
      <ToolbarTitle className={styles.text} text="Posts" />
      <div>
        <ToolbarTitle className={styles.text} text="Sort: " />
        <FlatButton label="Newest" onClick={sortNewest} />
        <FlatButton label="Popular" onClick={sortPopular} />
      </div>
    </Toolbar>
  </div>
);
export default PostToolBar;