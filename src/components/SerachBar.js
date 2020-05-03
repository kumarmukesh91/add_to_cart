import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { APPLY_FILTER } from '../store/types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    color: 'inherit',
  },
}));

export default function SerachBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let debouncedSearch;

  const onChange = (event) => {
    event.persist();

    if (!debouncedSearch) {
      debouncedSearch = debounce(() => {
        let searchString = event.target.value;
        dispatch({
          type: APPLY_FILTER,
          payload: { search: searchString.toLowerCase() },
        });
      }, 300);
    }

    debouncedSearch();
  };

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search...'
        color='primary'
        onChange={onChange}
      />
      <IconButton type='submit' aria-label='search' color='inherit'>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
