import React, { useRef, useState, useEffect } from 'react';
import Baselayout from '@/components/Baselayout';
import Product from '@/components/Products/product';
import AI from '@/components/AI/ai';
import Blog from '@/components/Blog/blog';
import About from '@/components/About/about';



export default function Index() {
  const [active, setActive] = useState();
  const ProdRef = useRef(null);
  const AiRef = useRef(null);
  const BlogRef = useRef(null);
  const AboutRef = useRef(null);

  const refs = [
    { name: 'Product', ref: ProdRef },
    { name: 'AI', ref: AiRef },
    { name: 'Blog', ref: BlogRef },
    { name: 'About', ref: AboutRef },
  ];
  
  

  return (
    <Baselayout
    
      active={active}
      setActive={setActive}
      ProdRef={ProdRef}
      Airef={AiRef}
      BlogRef={BlogRef}
      Aboutref={AboutRef}
     
    >
      <Product ref={ProdRef}  />
      <AI ref={AiRef} />
      <Blog ref={BlogRef} />
      <About ref={AboutRef} />
      
      
    </Baselayout>
  );
}
