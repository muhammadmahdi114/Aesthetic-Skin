import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';


export default function Baselayout({ children,}) {
  return (
    <div className='min-w-screen min-h-screen flex flex-col overflow-x-hidden'>
      <Header/>
      {children}
      <Footer />
    </div>
  );
}
