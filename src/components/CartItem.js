import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddToCartBtn from './AddToCartBtn';
import { Grid, Button } from '@material-ui/core';
import { removeFromCart } from '../store/actions/cartActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: '100%',
    height: 140,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundOrigin: 'content-box',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  displayPrice: {
    fontWeight: 'bold',
  },
  actualPrice: {
    textDecoration: 'line-through',
    fontWeight: 'bold',
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
  },
}));

export default function CartItem({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container direction='row' justify='flex-start' alignItems='center'>
      <Grid
        item
        xs={4}
        className={classes.cover}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {/* <img src={data.image} alt='' width='100%' height='100%' /> */}
      </Grid>
      <Grid item xs={8}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant='h5' component='h2' noWrap>
              {data.name}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.price}
            >
              <span>&#8377;{data.price.display}</span>
              <span className={classes.actualPrice}>
                &#8377;{data.price.actual}
              </span>
              <span className={classes.discount}>{data.discount}% off</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <AddToCartBtn id={data.id} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button onClick={() => dispatch(removeFromCart(data.id))}>
              Remove
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
