import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/dist/client/router';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
  },
});

const BasicMenu = (props) => {
  const classes = useStyles();
  const { title, listmenu } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();
  const handleClose = (url) => {
    if (url === '/exit') {
      localStorage.removeItem('user');
      props.setUser('');
      setAnchorEl(null);
      return 1;
    }
    setAnchorEl(null);
    router.push(url);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.root}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {listmenu.map(elem => {
          return (
            <MenuItem
              key={elem.id}
              data-name={elem.url}
              onClick={(e) => handleClose(e.target.dataset.name)}
            >
              {elem.name}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}

export default BasicMenu;