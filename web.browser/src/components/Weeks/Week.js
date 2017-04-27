import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { data } from '../../mock-data';

class Week extends Component {
  weekItems(category, i) { return (<ListItem primaryText={category} key={i} />); }

  createWeek(week, i) {
    return (
      <List key={i}>
        <Subheader>{week.title}</Subheader>
        <Divider />
        {week.categories.map(this.weekItems)}
      </List>
    );
  }
  render() {
    return (
      <div>
        {data.weeks.map((week, i) => this.createWeek(week, i))}
      </div>
    );
  }
}

export default Week;
