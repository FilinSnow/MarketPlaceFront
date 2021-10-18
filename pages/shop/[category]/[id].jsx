import { Box } from '@mui/system';
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import MainContainer from '../../../components/MainContainer';
import { clothes } from '../../../data/mockData';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
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
 
export default function () {
  const classes = useStyles();
  const routes = useRouter();
  const [cards, setCards] = useState();

  const { id, category } = routes?.query;

  useEffect(() => {
    let copyCards = [];
    for (const i in clothes) {
      if (i === category) {
        copyCards = clothes[i];
      }
    }
    setCards(copyCards);
  }, [id, category])

  return (
    <MainContainer>
      {
        cards && cards?.map(elem => {
          if (elem.id === Number(id)) {
            return (
              <Box sx={{
                maxWidth: '600px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <Image src={elem.img} />
                <Typography gutterBottom variant="h5" component="div">
                  Name: {elem.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Description: {elem.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Brand: {elem.brand}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Price: {elem.price}
                </Typography>
                <Typography>
                  <Button className={classes.root} size="small">Add basket</Button>
                </Typography>
              </Box>

            )
          }
        })
      }
    </MainContainer>
  )
}
