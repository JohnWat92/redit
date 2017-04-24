import React from 'react';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const PostToolBar = ({ sortPopular, sortNewest }) => (
  <div>
    <Toolbar>
      <ToolbarTitle text="Posts" />
      <div>
        <ToolbarTitle text="Sort: " />
        <FlatButton label="Newest" onClick={sortNewest} />
        <FlatButton label="Popular" onClick={sortPopular} />
      </div>
    </Toolbar>
  </div>
);
export default PostToolBar;