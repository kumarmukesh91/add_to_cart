import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  APPLY_FILTER,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  DISCOUNT,
} from '../store/types';

export default function SortBy() {
  const dispatch = useDispatch();

  const handleClick = (sortBy) => {
    dispatch({
      type: APPLY_FILTER,
      payload: {
        sortBy,
      },
    });
  };

  return (
    <Breadcrumbs separator='|' style={{ padding: '10px 0' }}>
      <Typography>Sort By: </Typography>
      <Link
        color='inherit'
        href='#'
        onClick={() => handleClick(PRICE_HIGH_TO_LOW)}
      >
        Price -- High Low
      </Link>
      <Link
        color='inherit'
        href='#'
        onClick={() => handleClick(PRICE_LOW_TO_HIGH)}
      >
        Price -- Low High
      </Link>
      <Link color='inherit' href='#' onClick={() => handleClick(DISCOUNT)}>
        Discount
      </Link>
    </Breadcrumbs>
  );
}
