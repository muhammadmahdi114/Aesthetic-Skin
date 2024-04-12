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
                            <img src="/wishlist.svg" alt="Wishlist" />
                        </button>
                        <button onClick={() => addToCart({ id, title, price })} className="bg-blue-500 text-white p-1 rounded">
                        <img src="/cart.svg" alt="cart" />
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