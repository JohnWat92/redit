import React from 'react';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import ContactsIcon from 'material-ui/svg-icons/communication/import-contacts';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';


const HeaderBar = () => (
  <AppBar
    iconElementLeft={<IconButton><ContactsIcon /></IconButton>}
    iconElementRight={
      <div className={styles.rightIconButtons}>
        <FlatButton label="Share a New Link" />
        <FlatButton label="Log Out" />
      </div>
    }
  />
);

export default HeaderBar;