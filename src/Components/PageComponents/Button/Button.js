import React from 'react';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import styles from './ButtonStyles.module.css';


function MyButton() {
  return (
    <>
      
      <Button variant="contained" color="primary" className={styles.btn}>Submit</Button>
      <Button variant="contained" color="secondary">Submit</Button>
      

    </>
  );
}

export default MyButton;