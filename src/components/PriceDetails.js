import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  price: {
    textAlign: 'right',
  },
}));

export default function PriceDetails() {
  const classes = useStyles();
  const items = useSelector((state) => state.item.items);
  const cartItems = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState({});

  useEffect(() => {
    const cartTotal = Object.keys(cartItems).reduce(
      (acc, itemId) => {
        const item = items.find((item) => item.id === itemId);
        const count = cartItems[itemId].count;
        return {
          items: acc.items + count,
          price: acc.price + item.price.display * count,
          discount:
            acc.discount + (item.price.display - item.price.actual) * count,
          payable: acc.payable + item.price.actual * count,
        };
      },
      {
        items: 0,
        price: 0,
        discount: 0,
        payable: 0,
      }
    );
    setCartTotal(cartTotal);
  }, [items, cartItems]);

  return (
    <List
      subheader={<ListSubheader>PRICE DETAILS</ListSubheader>}
      className={classes.root}
    >
      <ListItem>
        <ListItemText primary={`Price (${cartTotal.items} items) : `} />
        <ListItemText primary={cartTotal.price} className={classes.price} />
      </ListItem>
      <ListItem>
        <ListItemText primary='Discount : ' />
        <ListItemText primary={cartTotal.discount} className={classes.price} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary='Total Payble : ' />
        <ListItemText primary={cartTotal.payable} className={classes.price} />
      </ListItem>
    </List>
  );
}
