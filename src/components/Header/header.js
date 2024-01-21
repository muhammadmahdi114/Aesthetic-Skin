import React, { useRef, useEffect } from 'react';

export default function Header() {
  const product = useRef(null);
  const ai = useRef(null);
  const blog = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    // Add logic here if needed after components mount
  }, []);

  const scrollToProduct = (prodRef) => {
    window.scrollTo({
      top: prodRef.current,
      behavior: 'smooth',
    });
  };

  const scrollToAi = (AiRef) => {
    window.scrollTo({
      top: AiRef.current,
      behavior: 'smooth',
    });
  };

  const scrollToBlog = (BlogRef) => {
    window.scrollTo({
      top: BlogRef.current,
      behavior: 'smooth',
    });
  };

  const scrollToAbout = (AboutRef) => {
    window.scrollTo({
      top: AboutRef.current,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white overflow-hidden header fixed h-full w-36 flex flex-col justify-start px-2 gap-y-12">
      <div className="">
        <img
          src="/logo.png"  // Ensure this path is correct
          alt="Logo"
          className="mb-2 mt-2"
        />
      </div>
      <div className="flex flex-col gap-y-24 text-black font-bold font-cursive">
        <button onClick={() => scrollToProduct(product)} className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-5px] transition-all transform -rotate-90">
          PRODUCTS
        </button>
        <button onClick={() => scrollToAi(ai)} className="p-1 mt-2 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90">
          AI RECOGNITION
        </button>
        <button onClick={() => scrollToBlog(blog)} className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-md hover:translate-y-[-2px] transition-all transform -rotate-90">
          BLOG
        </button>
        <button onClick={() => scrollToAbout(about)} className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-5px] transition-all transform -rotate-90">
          ABOUT US
        </button>
      </div>
    </div>
  );
}
