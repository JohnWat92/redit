import React from 'react';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import CategoriesHeaderBar from '../../components/CategoriesHeaderBar';
import Week from '../../components/Weeks';
// import {data} from '../../mock-data';

export default class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <CategoriesHeaderBar />
          <Week />
        </Drawer>
      </div>
    );
  }
}
