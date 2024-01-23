import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';


export default function Baselayout({ children, ProdRef,Airef,BlogRef,Aboutref,active,setActive}) {

  return (
    <div className='min-w-screen min-h-screen flex flex-col overflow-x-hidden'>
      <Header active={active} setActive={setActive} ProdRef={ProdRef} AiRef={Airef}  BlogRef={BlogRef}  AboutRef={Aboutref}/>
      {children}
      <Footer />
    </div>
  );
}
