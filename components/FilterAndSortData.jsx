import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


export default function FilterAndSortData(props) {
  const [sort, setSort] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [showAscDesc, setShowAscDesc] = React.useState(false);
  const [sortAscDesc, setSortAscDesc] = React.useState('');
  const [showRangePrice, setShowRangePrice] = React.useState(false)

  const handleChangeSort = (event) => {
    switch (event.target.value) {
      case 'None':
        setSort('');
        setShowAscDesc(false);
        setSortAscDesc('')
        break;
      // Number(elem1.price.split('$')[0]) - Number(elem2.price.split('$')[0])
      case 'Price':
        let newArr = [];
        setShowAscDesc(true);
        newArr = props.cards.concat().sort((elem1, elem2) => Number(elem1.price.split('$')[0]) - Number(elem2.price.split('$')[0]));
        props.setCards(newArr);
        break;

      default:
        break;
    }
    setSort(event.target.value);
  };
  console.log(props);
  const handleChangeFilter = (event) => {
    switch (event.target.value) {
      case 'None': {
        setFilter('');
        setShowRangePrice(false);
        break;
      }
      case 'Price ranges': {
        setShowRangePrice(true);
        break;
      }
      default: {
        break;
      }
    }
    setFilter(event.target.value);
  };

  const handleChangeAscDesc = (event) => {
    switch (event.target.value) {
      case 'None':
        setSortAscDesc('');
        break;
      // Number(elem1.price.split('$')[0]) - Number(elem2.price.split('$')[0])
      case 'Asc': {
        let newArr = [];
        newArr = props.cards.concat().sort((elem1, elem2) => Number(elem1.price.split('$')[0]) - Number(elem2.price.split('$')[0]));
        props.setCards(newArr);
        break;
      }
      case 'Desc': {
        let newArr = [];
        newArr = props.cards.concat().sort((elem1, elem2) => Number(elem2.price.split('$')[0]) - Number(elem1.price.split('$')[0]));
        props.setCards(newArr);
        break;
      }
      default: {
        break;
      }
    }
    setSortAscDesc(event.target.value)
  };

  return (
    <div className='filter-sort'>
      <Box sx={{ width: 200, marginRight: '15px' }}>
        <Typography>Sort</Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            onChange={handleChangeSort}
          >
            <MenuItem value='None'>None</MenuItem>
            <MenuItem value='Price'>Price</MenuItem>
            <MenuItem value='Name'>Name</MenuItem>
            <MenuItem value='Popular'>Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {
        showAscDesc
        && <Box sx={{ width: 100, marginRight: '15px' }}>
          <Typography sx={{ opacity: 0 }}>a</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortAscDesc}
              onChange={handleChangeAscDesc}
            >
              <MenuItem value='None'>None</MenuItem>
              <MenuItem value='Asc'>Asc</MenuItem>
              <MenuItem value='Desc'>Desc</MenuItem>
            </Select>
          </FormControl>
        </Box>
      }
      <Box sx={{ width: 200, marginRight: '15px' }}>
        <Typography>Filter</Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            onChange={handleChangeFilter}
          >
            <MenuItem value='None'>None</MenuItem>
            <MenuItem value='Price ranges'>Price ranges</MenuItem>
            <MenuItem value='Brand'>Brand</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {showRangePrice
        && <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: 100 }}>
            <Typography>Price from</Typography>
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
          <Box sx={{ width: 100 }}>
            <Typography>Price to</Typography>
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </Box>
      }
    </div>
  );
}


