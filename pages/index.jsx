import ImgMediaCard from '../components/ImgMediaCard';
import MainContainer from '../components/MainContainer';
import shirt from '../public/img/shirt.jpg';
import shoes from '../public/img/shoes.jpg';
import jeans from '../public/img/jeans.jpg';
import socks from '../public/img/socks.png';
import watch from '../public/img/watch.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const clothes = {
    shirt: [
      {
        id: 0,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
      {
        id: 1,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
      {
        id: 2,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
      {
        id: 3,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
      {
        id: 4,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
      {
        id: 5,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },
    ],
    shoes: [
      {
        id: 0,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      },
      {
        id: 1,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      },
      {
        id: 2,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      },
      {
        id: 3,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      },
      {
        id: 4,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      },
      {
        id: 5,
        img: shoes,
        title: 'Shoes...',
        description: 'Description'
      }
    ],
    jeans: [
      {
        id: 0,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 1,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 2,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 3,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 4,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 5,
        img: jeans,
        title: 'Shirt',
        description: 'Description...'
      },
    ],
    actual: [
      {
        id: 0,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 1,
        img: shoes,
        title: 'Shoes',
        description: 'Description...'
      },
      {
        id: 2,
        img: shirt,
        title: 'Shirt',
        description: 'Description...'
      },

    ],
    discount: [
      {
        id: 0,
        img: jeans,
        title: 'Jeans',
        description: 'Description...'
      },
      {
        id: 1,
        img: shoes,
        title: 'Shoes',
        description: 'Description...'
      },
      {
        id: 2,
        img: socks,
        title: 'Socks',
        description: 'Description...'
      },
      {
        id: 3,
        img: watch,
        title: 'Watch',
        description: 'Description...'
      },
    ]
  }

  return (
    <MainContainer>
      <div className='container__main'>
        <div className="main__description">
          <div className="description__title">
            <h1>Welcome</h1>
          </div>
          <div className="description__subtitle">
            <h3>Fashion that you will love</h3>
          </div>
        </div>
        <div className="main__slider"></div>

        <div className="main__shop-mini">
          <div className="container__shop-mini">
            <div className="shop-mini__title">
              <h3>Discount products</h3>
            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.discount.map(elem => {
                  if (elem.id <= 1) {
                    return (
                      <ImgMediaCard
                        key={elem.id}
                        title={elem.title}
                        description={elem.description}
                        img={elem.img}
                      />
                    )
                  }
                })}
              </Carousel>
            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.discount.map(elem => {
                  if (elem.id > 1) {
                    return (
                      <ImgMediaCard
                        key={elem.id}
                        title={elem.title}
                        description={elem.description}
                        img={elem.img}
                      />
                    )
                  }
                })}
              </Carousel>
            </div>
          </div>
          <div className="container__shop-mini">
            <div className="shop-mini__title">
              <h3>Topical products</h3>
            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.actual.map(elem => {
                  return (
                    <ImgMediaCard
                      key={elem.id}
                      title={elem.title}
                      description={elem.description}
                      img={elem.img}
                    />
                  )
                })}
              </Carousel>
            </div>
          </div>
          <div className="container__shop-mini">
            <div className="shop-mini__title">
              <h3>Products by category</h3>
            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.shirt.map(elem => {
                  return (
                    <ImgMediaCard
                      key={elem.id}
                      title={elem.title}
                      description={elem.description}
                      img={elem.img}
                    />
                  )
                })}
              </Carousel>

            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.shoes.map(elem => {
                  return (
                    <ImgMediaCard
                      key={elem.id}
                      title={elem.title}
                      description={elem.description}
                      img={elem.img}
                    />
                  )
                })}
              </Carousel>
            </div>
            <div className="shop-mini">
              <Carousel responsive={responsive}>
                {clothes.jeans.map(elem => {
                  return (
                    <ImgMediaCard
                      key={elem.id}
                      title={elem.title}
                      description={elem.description}
                      img={elem.img}
                    />
                  )
                })}
              </Carousel>
            </div>
          </div>

        </div>
        <div className="main__about"></div>
        <div className="main__contacts"></div>
      </div>
    </MainContainer>
  )
}
