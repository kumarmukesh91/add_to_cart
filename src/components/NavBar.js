import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    color: 'inherit',
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
          <InputBase
            className={classes.input}
            placeholder='Search...'
            color='primary'
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='search'
            color='inherit'
          >
            <SearchIcon />
          </IconButton>
          <div className={classes.cart}>
            <CartIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
