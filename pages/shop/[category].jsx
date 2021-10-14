import React from 'react'
import { clothes } from '../../data/mockData';
import ImgMediaCard from '../../components/ImgMediaCard';
import MainContainer from '../../components/MainContainer';

export default function ({ cards }) {

  return (
    <MainContainer>
      <div className="shop-mini">
        {cards.map(elem => {
          return (
            <ImgMediaCard
              key={elem.id}
              title={elem.title}
              description={elem.description}
              img={elem.img}
            />
          )
        })}
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
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}