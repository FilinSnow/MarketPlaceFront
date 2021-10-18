import shirt from '../public/img/shirt.jpg';
import shoes from '../public/img/shoes.jpg';
import jeans from '../public/img/jeans.jpg';
import socks from '../public/img/socks.png';
import watch from '../public/img/watch.jpg';

export const responsive = {
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
const cloth = [
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
]
export const clothes = {

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
 
  ],
  jeans: [
    {
      id: 0,
      img: jeans,
      title: 'Kasfer',
      description: 'Description...',
      price: '1000$',
      brand: 'Nasd'
    },
    {
      id: 1,
      img: jeans,
      title: 'Alavetro',
      description: 'Description...',
      price: '150$',
      brand: 'Oas'
    },
    {
      id: 2,
      img: jeans,
      title: 'Motion',
      description: 'Description...',
      price: '2000$',
      brand: 'Tobn'
    },
    {
      id: 3,
      img: jeans,
      title: 'Bimo',
      description: 'Description...',
      price: '30$',
      brand: 'Lok'
    },
    {
      id: 4,
      img: jeans,
      title: 'Zamu',
      description: 'Description...',
      price: '45$',
      brand: 'Adidas'
    },
    {
      id: 5,
      img: jeans,
      title: 'Qwerty',
      description: 'Description...',
      price: '10$',
      brand: 'Kan'
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