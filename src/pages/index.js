import React, { useRef, useState, useEffect } from 'react';
import Baselayout from '@/components/Baselayout';
import Product from '@/components/Products/product';
import AI from '@/components/AI/ai';
import Blog from '@/components/Blog/blog';
import About from '@/components/About/about';
import FAQ from '@/components/FAQ/FAQ';

export default function Index() {
  const [active, setActive] = useState();
  const ProdRef = useRef(null);
  const AiRef = useRef(null);
  const BlogRef = useRef(null);
  const AboutRef = useRef(null);
  const FAQRef = useRef(null);
  useEffect(() => {
    document.title = 'Aesthetic Skin';
  }, []);

  return (
    <Baselayout
      active={active}
      setActive={setActive}
      ProdRef={ProdRef}
      AiRef={AiRef} 
      BlogRef={BlogRef}
      AboutRef={AboutRef}
      FAQRef={FAQRef}
    >
      <Product ref={ProdRef} />
      <AI ref={AiRef} />
      <Blog ref={BlogRef} />
      <About ref={AboutRef} />
      <FAQ ref={FAQRef}/>
    </Baselayout>
  );
}
