import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'
import HeaderBar from '../../components/HeaderBar';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <HeaderBar />        
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
