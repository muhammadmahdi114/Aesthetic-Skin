import React from 'react';

const AI = () => {
  return (
    <div ref={AI}>
      <section className="bg-gray-500 bg-no-repeat overflow-hidden bg-cover w-full min-h-screen flex flex-col justify-start items-center py-10">
        <h1 className="font-cursive text-6xl text-center text-white font-extrabold pl-32 mb-8">AI RECOGNITION</h1>
        <div className="text-center pl-32 text-lg mx-auto text-white font-bold font-cursive mt-20">
          AI recognition, also known as artificial intelligence recognition, is a technology that enables machines to identify and classify objects.
          <br />AI recognition is advancing rapidly, revolutionizing industries such as healthcare, automotive, and security.
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-[#e2e8f0] font-bold py-5 px-12 rounded-full mt-32 relative ml-32">
          <img src="cam.svg" className="w-10 h-6 absolute left-6 border-r-2 pr-2" alt="Icon" />
          <span className="pl-8">Scan your skin</span>
        </button>
      </section>
    </div>
  );
};

export default AI;
