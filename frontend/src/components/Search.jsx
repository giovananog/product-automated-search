import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate } from 'react-router-dom';

export default function SearchField() {
  const navigate = useNavigate();

  async function searchName(event) {
    var value = event.target.value;
    
    if (event.keyCode === 13) {
      const searchURL = `/search/${value}`;
      navigate(searchURL);
    } 
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, height: 80}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <LocalGroceryStoreIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '20px'  }}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'search product' }}
        onKeyDown={searchName}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ fontSize: 40 }}/>
      </IconButton>
    </Paper>
  );
}