

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ListingCard = ({ title, location, price, imageUrl }) => {
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
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                        <p className="text-gray-700 mb-4">{location}</p>
                        <p className="text-black font-semibold text-xl mt-2 text-gray-">Pkr : {price} </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Product = React.forwardRef((props, ref) => {
    const listings = [
        {
            id: 1,
            title: 'Glutathione injections Miracle White',
            price: 21000,
            imageUrl: '/miracle.jpeg',
        },
        {
            id: 2,
            title: 'Glutathione injections Glutax 75GX',


            price: 25000,
            imageUrl: '/glutax75.jpeg',
        },
        {
            id: 3,
            title: 'Glutathione injections Tationil',


            price: 18000,
            imageUrl: '/tationilinj.jpeg',
        },
        {
            id: 4,
            title: 'Profhilo Injection',

            price: 45000,
            imageUrl: '/profilho.jpeg',
        },
        {
            id: 5,
            title: 'Permanent Tattoo Charment Pen',
            price: 17000,
            imageUrl: '/charment.jpeg',
        },
        {
            id: 6,
            title: 'Glutathione injections Glutax 2000',

            price: 23000,
            imageUrl: '/glutax2000.jpeg',
        },
        {
            id: 7,
            title: 'MesoGun',

            price: 20000,
            imageUrl: '/meso.jpeg',
        },
        {
            id: 8,
            title: 'J cain Numbing Jar',

            price: 10000,
            imageUrl: '/jcain.jpeg',
        },
        {
            id: 9,
            title: 'Korean Hydrafacial serums',

            price: 7000,
            imageUrl: './hydraserum.jpeg',
        },
        {
            id: 10,
            title: 'Korean Botox Botulax',

            price: 12000,
            imageUrl: 'botulax.jpeg',
        },
        {
            id: 11,
            title: 'Dr Pen A6',

            price: 16000,
            imageUrl: '/a6pen.jpeg',
        },
    ];
    const handleSignupClick = () => {
        window.location.href = 'http://localhost:3003/signup'
    };
    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3003';
    };

    const loginSucParam = router.query.loginSuc;
    const emailParam = router.query.email;
    console.log("Login:", loginSucParam)
    console.log("Email:", emailParam)

    return (
        <div className="font-cursive flex flex-col bg-bgprod bg-no-repeat bg-cover">
            <div className="h-screen bg-bgprod bg-no-repeat w-screen bg-cover p-4 ">
                <div className='flex'>
                    <div className="flex justify-center opacity-80 pl-72 w-screen gap-x-6">
                        <div className="relative mt-4 text-black">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 rounded border-white bg-white pl-12 w-40"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <img
                                    src="/search.svg"
                                    alt="Search Icon"
                                    className="w-8 h-6 border-r-2 pr-2 border-black"
                                />
                            </div>
                        </div>
                        <div className="relative mt-4 ">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <img
                                    src="/sort.png"
                                    alt="Sort Icon"
                                    className="w-6 h-6 border-r-2 pr-2 border-black"
                                />
                            </div>
                            <select
                                className="p-2 rounded border-white text-black bg-white pl-10"
                            >
                                <option value="relevance">Sort by Relevance</option>
                                <option value="date">Sort by Date</option>
                                <option value="popularity">Sort by Popularity</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-3 bg-white w-56 h-10 justify-center items-center mt-4 opacity-80 rounded-2xl'>
                        {loginSucParam === 'true' ? (
                            <div>
                                <span className='text-black'>{emailParam}</span>
                            </div>
                        ) : (
                            <div className='flex'>
                                <div className='text-black flex items-end pr-6'>
                                    <button type='/' className='flex items-center' onClick={handleLoginClick}>
                                        <img
                                            src="/login.png"
                                            alt="Login Icon"
                                            className="w-6 h-6 border-black"
                                        />
                                        &nbsp;Login
                                    </button>
                                </div>
                                <div className='text-black gap-x-2 flex items-end'>
                                    <button type='/' className='flex items-center' onClick={handleSignupClick}>
                                        <img
                                            src="/signup.png"
                                            alt="Signup Icon"
                                            className="w-6 h-6 border-black"
                                        />
                                        &nbsp;Signup
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="text-center text-5xl text-white font-bold font-cursive mt-10 pl-32">
                    Aesthetic Skin <br />
                </div>
            </div>

            <div ref={ref} className="bg-slate-200 justify-end pl-40 pr-5">
                <div>
                    <h1 className="font-cursive text-6xl text-center text-black font-extrabold mt-5 pl-5 mb-3 bg-slate-200">Products</h1>
                </div>
                <div className="container py-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                        {listings.map((listing) => (
                            <ListingCard key={listing.id} {...listing} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
