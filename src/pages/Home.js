import React, { useEffect } from 'react';
import Item from '../components/Item';
import { Grid, Hidden } from '@material-ui/core';
import Filters from '../components/Filters';
import SortBy from '../components/SortBy';
import { getItems } from '../store/actions/itemActions';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsSelector } from '../store/reducers/selector';
import FilterBar from '../components/FilterBar';

export default function Home(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => getItemsSelector(state.item));

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Hidden smDown>
        <Grid item md={2} style={{ padding: 20 }}>
          <Filters />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={12}>
          <FilterBar />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={10} style={{ padding: 20 }}>
        <Hidden smDown>
          <SortBy />
        </Hidden>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.id}>
              <Item data={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
