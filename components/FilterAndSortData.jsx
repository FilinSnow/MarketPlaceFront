import * as React from 'react';
import Box from '@mui/material/Box';
import { clothes } from '../data/mockData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/dist/client/router';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    background: 'black',
    '&:hover': {
      background: 'black',
    },
  },
});

export default function FilterAndSortData(props) {
  const router = useRouter();
  const classes = useStyles();
  const { category } = router.query
  const mainCards = (category) => {
    let cards;
    for (const iterator in clothes) {
      if (iterator === category) {
        cards = clothes[iterator];
      }
    }

    return cards;
  }
  const cardsWithServer = mainCards(category);
  console.log(cardsWithServer)
  const [sort, setSort] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [showAscDesc, setShowAscDesc] = React.useState(false);
  const [sortAscDesc, setSortAscDesc] = React.useState('');
  const [showRangePrice, setShowRangePrice] = React.useState(false);
  const [rangePriceInput, setRangePriceInput] = React.useState({
    from: '',
    to: ''
  })
  const brands = cardsWithServer.map(elem => elem.brand);
  const [showBrandsMenu, setShowBrandsMenu] = React.useState(false);
  const [brandInput, setBrandInput] = React.useState('');

  const handleChangeSort = (event) => {
    switch (event.target.value) {
      case 'None':
        setSort('');
        setFilter('')
        setShowAscDesc(false);
        setSortAscDesc('');
        props.setCards(cardsWithServer);
        break;
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

  const handleChangeFilter = (event) => {
    switch (event.target.value) {
      case 'None': {
        setFilter('');
        setShowRangePrice(false);
        setShowBrandsMenu(false)
        setRangePriceInput({
          ...rangePriceInput,
          from: '',
          to: ''
        })
        props.setCards(cardsWithServer);
        break;
      }
      case 'Price ranges': {
        setShowRangePrice(true);
        setShowBrandsMenu(false);
        break;
      }
      case 'Brand': {
        setShowBrandsMenu(true);
        setShowRangePrice(false);
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

  const changePrice = (value, nameInput) => {
    switch (nameInput) {
      case 'priceFrom': {
        setRangePriceInput({
          ...rangePriceInput,
          from: value
        })
        break;
      }
      case 'priceTo': {
        setRangePriceInput({
          ...rangePriceInput,
          to: value
        })
        break;
      }
      default:
        break;
    }
  }
  const addFilter = () => {
    if (rangePriceInput.from > rangePriceInput.to) {
      setRangePriceInput({
        ...rangePriceInput,
        from: rangePriceInput.to,
        to: rangePriceInput.from
      })
    }

    if (rangePriceInput.from && rangePriceInput.to) {
      const filterArr = props.cards.filter(elem => Number(elem.price.split('$')[0]) >= rangePriceInput.from && Number(elem.price.split('$')[0]) <= rangePriceInput.to);
      props.setCards(filterArr);
    } else if (rangePriceInput.from) {
      const filterArr = props.cards.filter(elem => Number(elem.price.split('$')[0]) >= rangePriceInput.from);
      props.setCards(filterArr);
    } else if (rangePriceInput.to) {
      const filterArr = props.cards.filter(elem => Number(elem.price.split('$')[0]) <= rangePriceInput.to);
      props.setCards(filterArr);
    }
  }
  const changeBrandFilter = (nameBrand) => {
    setBrandInput(nameBrand);
    if (nameBrand === 'None') {
     return props.setCards(cardsWithServer);
    }
    const filterArr = cardsWithServer.filter(elem => elem.brand === nameBrand);
    props.setCards(filterArr);
  }

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
      {showBrandsMenu
        && <Box sx={{ width: 150 }}>
          <Typography sx={{ opacity: 0 }}>Filter</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brandInput}
              onChange={(e) => changeBrandFilter(e.target.value)}
            >
              <MenuItem value='None'>None</MenuItem>
              {
                brands.map((elem, id) => <MenuItem key={id} value={elem}>{elem}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Box>
      }
      {showRangePrice
        && <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: 100 }}>
            <Typography>Price from</Typography>
            <TextField
              name='priceFrom'
              id="outlined-basic"
              variant="outlined"
              value={rangePriceInput.from}
              onChange={(e) => changePrice(e.target.value, e.target.name)}
            />
          </Box>
          <Box sx={{ width: 100, margin: '0 15px' }}>
            <Typography>Price to</Typography>
            <TextField
              name='priceTo'
              id="outlined-basic"
              variant="outlined"
              value={rangePriceInput.to}
              onChange={(e) => changePrice(e.target.value, e.target.name)}
            />
          </Box>
          <Box sx={{ width: 150, alignSelf: 'center' }}>
            <Typography sx={{ opacity: 0 }}>a</Typography>
            <Button onClick={addFilter} className={classes.root} variant="contained">Add filter</Button>
          </Box>
        </Box>
      }
    </div>
  );
}


