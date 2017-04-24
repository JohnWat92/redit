import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
// import CategoriesHeaderBar from './components/CategoriesHeaderBar';
import Categories from './containers/Categories';
import Post from './components/Post';
// import ToolBar from './components/PostToolbar';

import Welcome from './containers/Welcome';
import PostList from './containers/PostList';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';
import { data } from './mock-data.js';

// import './containers/App/index.js';
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <MainLayout>
        <App>
          <Categories />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/posts" component={PostList} />
          </Switch>
        </App>
      </MainLayout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
