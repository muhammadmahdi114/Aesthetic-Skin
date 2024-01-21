import Baselayout from '@/components/Baselayout'
import React from 'react'
import Product from '@/components/Products/product'
import AI from '@/components/AI/ai'
import Blog from '@/components/Blog/blog'
import About from '@/components/About/about'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    document.title = 'Aesthetic Skin';
  }, []);
  return (
    <Baselayout>
      <Product />
      <AI />
      <Blog />
      <About />
    </Baselayout>
  )
}