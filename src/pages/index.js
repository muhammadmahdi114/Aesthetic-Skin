import Baselayout from '@/components/Baselayout';
import React, { useRef, useState, useEffect } from 'react';
import Product from '@/components/Products/product';
import AI from '@/components/AI/ai';
import Blog from '@/components/Blog/blog';
import About from '@/components/About/about';

export default function Index() {

  useEffect(() => {
    document.title = 'Aesthetic Skin';
  }, []);
  const ProdRef = useRef(null);
  const AiRef = useRef(null);
  const BlogRef = useRef(null);
  const AboutRef = useRef(null);

  // Define state variables if needed
  const [active, setActive] = useState(null);

  // Create an array of objects with names and corresponding refs
  const refs = [
    { name: 'Products', ref: ProdRef },
    { name: 'Ai', ref: AiRef },
    { name: 'Blog', ref: BlogRef },
    { name: 'About', ref: AboutRef },
  ];

  return (
    <Baselayout
      active={active}
      setActive={setActive}
      ProdRef={ProdRef}
      AIRef={AiRef}
      BlogRef={BlogRef}
      AboutRef={AboutRef}
    >
      {/* Pass the refs to the respective components */}
      <Product ref={ProdRef} />
      <AI ref={AiRef} />
      <Blog ref={BlogRef} />
      <About ref={AboutRef} />
    </Baselayout>
  );
}
