import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddToCartBtn from './AddToCartBtn';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  displayPrice: {
    textDecoration: 'line-through',
    fontWeight: 'bold',
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
  },

  media: {
    height: 140,
    backgroundSize: 'contain',
  },

  actionBtn: {
    justifyContent: 'space-around',
  },
});

export default function Item({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' noWrap>
            {data.name}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.price}
          >
            <span>&#8377;{data.price.actual}</span>
            <span className={classes.displayPrice}>
              &#8377;{data.price.display}
            </span>
            <span className={classes.discount}>{data.discount}% off</span>
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actionBtn}>
        <AddToCartBtn id={data.id} />
      </CardActions>
    </Card>
  );
}
