import React from 'react';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const PostToolBar = () => (
  <div>
    <Toolbar>
      <ToolbarTitle text="Posts" />
      <div>
        <ToolbarTitle text="Sort: " />
        <FlatButton label="Newest" />
        <FlatButton label="Popular" />
      </div>
    </Toolbar>
  </div>
);
export default PostToolBar;