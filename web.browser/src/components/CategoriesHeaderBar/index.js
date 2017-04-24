import React from 'react';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import ContactsIcon from 'material-ui/svg-icons/communication/import-contacts';

const CategoriesHeaderBar = () => (
  <AppBar
    title="RED it"
    iconElementLeft={<IconButton><ContactsIcon /></IconButton>}
  />
);

export default CategoriesHeaderBar;