import React, { useState } from 'react';

const ListingCard = ({ id, title, location, price, imageUrl, addToWishlist, addToCart, removeProduct, list }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="relative group overflow-hidden bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="rounded overflow-hidden">
                <img src={imageUrl} alt={title} className="h-56 w-64 rounded-2xl" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
                    <p className="text-gray-500 text-base">{location}</p>
                    <p className="text-black font-semibold text-xl mt-2 text-gray-">Pkr : {price} </p>
                </div>
            </div>

            {isHovered && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center text-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-black text-2xl font-semibold mb-4">{title}</h2>
                        <p className="text-black mb-4">{location}</p>
                        <p className="text-black font-semibold text-xl mt-2 text-gray-">Pkr : {price} </p>
                        <button onClick={() => addToWishlist({ id, title, price })} className="bg-blue-500 text-white p-1 rounded mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636v1.368a4.5 4.5 0 006.364 6.364z" />
                            </svg>
                        </button>
                        <button onClick={() => addToCart({ id, title, price })} className="bg-blue-500 text-white p-1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-3 1a3 3 0 116 0 3 3 0 01-6 0z" />
                            </svg>
                        </button>
                        {list === 'wishlist' && (
                            <button onClick={() => removeProduct(id, 'wishlist')} className="bg-red-500 text-white p-1 rounded">
                                Remove from Wishlist
                            </button>
                        )}
                        {list === 'cart' && (
                            <button onClick={() => removeProduct(id, 'cart')} className="bg-red-500 text-white p-1 rounded">
                                Remove from Cart
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListingCard;