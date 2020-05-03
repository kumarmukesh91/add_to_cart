import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import SerachBar from './SerachBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
  cart: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' className={classes.title}>
            <Typography variant='h6'>Adobe</Typography>
          </Link>
          <SerachBar />
          <div className={classes.cart}>
            <CartIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
