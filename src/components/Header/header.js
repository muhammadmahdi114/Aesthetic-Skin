import React from 'react';
import ChatBot from '../Chatbot/chatbot';

export default function Header({ ProdRef, AiRef, BlogRef, AboutRef, active, setActive }) {

  const scrollToProduct = (ref, Product) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(Product)
  };

  const scrollToAi = (ref, Ai) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(Ai)
  };

  const scrollToBlog = (ref, Blog) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(Blog)
  };

  const scrollToAbout = (ref, About) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(About)
  };

 




  return (
    <div className="bg-white overflow-hidden header fixed h-full w-36 flex flex-col justify-start px-2 gap-y-6">
      <div className="">
        <img
          src="/logo.png"
          alt="Logo"
          className="mb-2 mt-2"
        />
      </div>
      <div className="flex flex-col gap-y-24 text-black font-bold font-cursive">
        <button
          onClick={() => scrollToProduct(ProdRef, "Product")}
          className={`p-1 mt-2 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90 ${active === "Product" ? "bg-white text-black" : ""
            }`}
        >
          PRODUCTS
        </button>
        <button
          onClick={() => scrollToAi(AiRef, "Ai")}
          className={`p-1 mt-2 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90 ${active === "AI" ? "bg-white text-black" : ""
            }`}
        >
          AI RECOGNITION
        </button>
        <button
          onClick={() => scrollToBlog(BlogRef, "Blog")}
          className={`p-1 mt-2 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90 ${active === "Blog" ? "bg-white text-black" : ""
            }`}
        >
          BLOG
        </button>
        <button
          onClick={() => scrollToAbout(AboutRef, "About")}
          className={`p-1 mt-2 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90 ${active === "About" ? "bg-white text-black" : ""
            }`}
        >
          ABOUT US
        </button>
      </div>
      <ChatBot/>
    </div>
  );
}
