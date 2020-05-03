import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    color: 'white',
  },
});

export default function CartIcon() {
  const classes = useStyles();
  const totalItems = useSelector((state) =>
    Object.keys(state.cart).reduce(
      (acc, itemId) => acc + state.cart[itemId].count,
      0
    )
  );

  return (
    <Link to='/cart' className={classes.root}>
      <IconButton color='inherit'>
        {totalItems ? (
          <Badge badgeContent={totalItems} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
        ) : (
          <ShoppingCartIcon />
        )}
      </IconButton>
    </Link>
  );
}
