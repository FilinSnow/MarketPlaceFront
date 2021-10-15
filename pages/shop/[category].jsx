import React, { useEffect, useState } from 'react'
import { clothes } from '../../data/mockData';
import ImgMediaCard from '../../components/ImgMediaCard';
import MainContainer from '../../components/MainContainer';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FilterAndSortData from '../../components/FilterAndSortData';

const useStyles = makeStyles({
  root: {
    color: 'white',
    background: 'black',
    '&:hover': {
      background: 'black',
    },
  },
});

export default function (props) {
  const classes = useStyles();
  const numCards = 3;
  const [count, setCount] = useState(1);
  const [cards, setCards] = useState(props.cards);
  const hiddenBtnShowMore = count * numCards > cards.length ? false : true;
  
  useEffect(() => {
    setCards(props.cards);
  }, [props.cards])

  return (
    <MainContainer>
      <div className='container__filter-sort'>
        <FilterAndSortData cards={cards} setCards={setCards}/>
      </div>
      <div className="shop-mini">
        {cards.slice(0, numCards * count).map(elem => {
          return (
            <ImgMediaCard
              key={elem.id}
              title={elem.title}
              description={elem.description}
              img={elem.img}
              price={elem.price}
              brand={elem.brand}
            />
          )
        })}
      </div>
      <div className='container__show-more'>
       {hiddenBtnShowMore && <Button className={classes.root} onClick={() => setCount(count + 1)} variant="contained">Show more</Button>} 
      </div>
    </MainContainer>
  )
}


export async function getStaticProps({ params }) {
  let cards;
  for (const iterator in clothes) {
    if (iterator === params.category) {
      cards = clothes[iterator];
    }
  }
  return { props: { cards } }
}

export async function getStaticPaths() {
  const paths = []
  for (const iterator in clothes) {
    paths.push({ params: { category: iterator.toString() } })
  }

  return {
    paths,
    fallback: false
  };
}