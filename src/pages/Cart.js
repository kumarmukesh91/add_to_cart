import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getItems } from '../store/actions/itemActions';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import PriceDetails from '../components/PriceDetails';

export default function Cart(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12} sm={8} style={{ padding: 20 }}>
        <Grid container spacing={2} direction='column'>
          {Object.keys(cartItems).map((itemId) => (
            <Grid item>
              <CartItem
                data={items.find((item) => item.id === itemId)}
                key={itemId}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} style={{ padding: 20 }}>
        <PriceDetails />
      </Grid>
    </Grid>
  );
}
