import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function FilterBar() {
  return (
    <ButtonGroup
      variant='contained'
      aria-label='contained primary button group'
      fullWidth
    >
      <Button variant='contained' startIcon={<SortIcon />}>
        Sort By
      </Button>
      <Button variant='contained' startIcon={<FilterListIcon />}>
        Filter
      </Button>
    </ButtonGroup>
  );
}
