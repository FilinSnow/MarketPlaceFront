import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    color: 'black',
    '&:hover': {
      background: 'none',
    },
    padding: 0,
    lineHeight: 0,
    verticalAlign: 'baseline',
  },
});

const categories = [
  {id: 0, text: 'Shirt', url: 'shirt'},
  {id: 1, text: 'Shoes', url: 'shoes'},
  {id: 2, text: 'Jeans', url: 'jeans'},
]

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map(category => (
          <ListItem button key={category.id}>
            <Link href={`/shop/${category.url}`}>
              <a>{category.text}</a>
            </Link>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.root} onClick={toggleDrawer(anchor, true)}>Shop</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}