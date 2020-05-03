import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { APPLY_FILTER } from '../store/types';

export default function Filters() {
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.item.filters.priceRange);
  const marks = [
    {
      value: 100,
      label: '100',
    },
    {
      value: 100000,
      label: '100000',
    },
  ];

  function onChange(e, priceRange) {
    dispatch({
      type: APPLY_FILTER,
      payload: {
        priceRange,
      },
    });
  }

  return (
    <>
      <Typography gutterBottom>Filters</Typography>
      <Slider
        aria-labelledby='track-inverted-slider'
        onChange={onChange}
        marks={marks}
        value={priceRange}
        max={100000}
        min={100}
      />
    </>
  );
}
