import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'vision',
    text:
      'Our vision is to be a leading international furniture manufacturerfering innovative and superior quality products.'
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'mission',
    text:
      'Our mission is to create Value for our customers through Reliability and Flexibility.We want our customers to experience the warmth and comfort through Respect and Trust.'
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We created this company to give everyone access to awesome furniture without any hassles. Plus, the complete freedom to use it for as long as they want or change it as per their needs.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
