import React from 'react';
import { ButtonGroup, IconButton, Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions/cartActions';

const useStyles = makeStyles({
  root: {
    border: '1px solid gray',
  },
  input: {
    textAlign: 'center',
  },
});

export default function AddToCartBtn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const onAddToCart = (count) => {
    if (count === 0) dispatch(removeFromCart(props.id));
    else dispatch(addToCart(props.id, count));
  };

  if (!cartItems[props.id]) {
    return (
      <Button
        variant='contained'
        color='primary'
        fullWidth
        size='small'
        onClick={() => onAddToCart(1)}
      >
        Add to Cart
      </Button>
    );
  }

  const itemCount = cartItems[props.id].count;

  return (
    <ButtonGroup
      disableElevation
      variant='outlined'
      size='small'
      color='primary'
      className={classes.root}
    >
      <IconButton onClick={() => onAddToCart(itemCount - 1)}>
        <RemoveIcon />
      </IconButton>
      <IconButton disabled>{itemCount}</IconButton>
      <IconButton onClick={() => onAddToCart(itemCount + 1)}>
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
}
