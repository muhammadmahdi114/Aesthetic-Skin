import React from 'react';

export default function About() {
  return (
    <div ref={About}>
      <section className="bg-gray-500 bg-no-repeat overflow-hidden bg-cover w-full min-h-screen flex flex-col justify-start items-center py-10">
        <h1 className="font-cursive text-6xl text-center font-extrabold pl-8 md:pl-32 lg:pl-32">ABOUT</h1>
        <div className="text-center pl-8 ml-32 text-lg mx-auto text-white font-bold font-cursive mt-28">
          In the era of globalization, increased consumer purchasing power, and a growing consciousness of hygiene and beauty,
          
          the skincare medicine industry is experiencing rapid growth. AESTHETIC SKIN, founded by Aamir Hanif in 2023,
          has become a leading player in Pakistan, offering a range <br />of skincare products and equipment, while also collaborating
          with dermatologists and doctors.
          
          The company's dedication to promoting <br /> a healthy skincare routine aligns with the industry's expanding market worth,
          estimated at USD 14.5 billion in 2020, with a projected 9.2% CAGR growth from 2021 to 2027. Advancements in cosmetic
          techniques, increasing interest in aesthetic procedures,
       
          and joint research and development <br />initiatives  are expected to drive further industry expansion and public awareness
        </div>
        <button className="bg-blue-500 ml-32 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full mt-10 lg:mt-32">
          <span>Give Review</span>
        </button>
      </section>
    </div>
  );
}
