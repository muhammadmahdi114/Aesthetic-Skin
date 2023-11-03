import Baselayout from '@/components/Baselayout'
import React from 'react'
import Product from '@/components/Products/product'
import AI from '@/components/AI/ai'
import Blog from '@/components/Blog/blog'
import About from '@/components/About/about'





export default function Index() {
  return (
    <Baselayout>  
      <Product />
      <AI />
      <Blog />
      <About />
    </Baselayout>
  )
}