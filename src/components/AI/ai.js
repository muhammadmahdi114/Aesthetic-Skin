
import React from 'react';

const Ai = React.forwardRef((props, ref) => {
  const handleDiveInClick = () => {
    window.location.href = 'http://localhost:3001/'
  };
  return (
    <div ref={ref} >
      <div className="pl-36">
        <section className="bg-bgai bg-no-repeat overflow-hidden bg-cover text-white w-full h-screen flex flex-col justify-start items-center py-20">
          <h1 className="font-cursive text-6xl text-center font-extrabold ">AI Recognition</h1>
          <div className="text-center text-xl mx-auto  font-bold font-cursive mt-44">
            Artificial Intelligence recognition is a technology that enables machines to identify and classify objects.<br />
            We are using this technology to help analyze your skin and we can also recommend some products for you.
          </div>
          <button
            onClick={handleDiveInClick}
            className="p-2 rounded text-center text-black font-bold border-white mt-40 bg-gray-200 w-60 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline"
          >
            Click to Dive IN!
          </button>
        </section>
      </div>
    </div>
  );
});

export default Ai;
