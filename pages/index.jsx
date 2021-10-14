import ImgMediaCard from '../components/ImgMediaCard';
import MainContainer from '../components/MainContainer';
import Carousel from 'react-multi-carousel';
import { responsive, clothes } from '../data/mockData';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {

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
