import React from 'react';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const ListingCard = ({ title, location, price, imageUrl }) => {
    return (
        <div>
            <div className="rounded overflow-hidden  ">
                <img src={imageUrl} alt={title} className=" h-56 rounded-2xl" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
                    <p className="text-gray-500 text-base ">{location}</p>
                    <p className="text-black font-semibold text-xl mt-2 text-gray-">${price} / night</p>
                </div>
            </div>
        </div>
    );
};

export default function Product() {
    const logedin = false;
    const listings = [
        {
            id: 1,
            title: "Cozy Cabin in the Woods",
            location: "Mountain View, CA",
            price: 150,
            imageUrl:
                "https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg?im_w=720",
        },
        {
            id: 2,
            title: "Suite in the Swiss Alps",
            location: "Lake View, SW",
            price: 280,
            imageUrl:
                "https://a0.muscache.com/im/pictures/e5d632ca-2e52-4cbc-8ecb-bc26fc400714.jpg?im_w=720",
        },
        {
            id: 3,
            title: "Downtown Loft with City Views",
            location: "New York, NY",
            price: 250,
            imageUrl:
                "https://a0.muscache.com/im/pictures/miso/Hosting-747983423999199197/original/b6d95d40-54c0-42fb-a800-8db1bf7acace.jpeg?im_w=720",
        },
        {
            id: 2,
            title: "Suite in the Swiss Alps",
            location: "Lake View, SW",
            price: 280,
            imageUrl:
                "https://a0.muscache.com/im/pictures/e5d632ca-2e52-4cbc-8ecb-bc26fc400714.jpg?im_w=720",
        },
        {
            id: 3,
            title: "Downtown Loft with City Views",
            location: "New York, NY",
            price: 250,
            imageUrl:
                "https://a0.muscache.com/im/pictures/miso/Hosting-747983423999199197/original/b6d95d40-54c0-42fb-a800-8db1bf7acace.jpeg?im_w=720",
        },
        {
            id: 2,
            title: "Suite in the Swiss Alps",
            location: "Lake View, SW",
            price: 280,
            imageUrl:
                "https://a0.muscache.com/im/pictures/e5d632ca-2e52-4cbc-8ecb-bc26fc400714.jpg?im_w=720",
        },
        {
            id: 3,
            title: "Downtown Loft with City Views",
            location: "New York, NY",
            price: 250,
            imageUrl:
                "https://a0.muscache.com/im/pictures/miso/Hosting-747983423999199197/original/b6d95d40-54c0-42fb-a800-8db1bf7acace.jpeg?im_w=720",
        },
        {
            id: 1,
            title: "Cozy Cabin in the Woods",
            location: "Mountain View, CA",
            price: 150,
            imageUrl:
                "https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg?im_w=720",
        },




        // Add more listings here
    ];

    return (
        <div className="font-cursive flex flex-col">

            <div className="h-screen bg-bgprod bg-no-repeat bg-cover p-4">
                <div className='flex'>
                    <div className="flex justify-center opacity-80 pl-36 w-screen gap-x-6">
                        {/* Search Bar with Image */}
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
                        {/* Sort by Dropdown */}
                        <div className="relative mt-4">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <img
                                    src="/sort.png"
                                    alt="Sort Icon"
                                    className="w-6 h-6 border-r-2 pr-2 border-black" // Add right padding to create space
                                />
                            </div>
                            <select
                                className="p-2 rounded border-white text-black bg-white pl-10" // Add left padding to make space for the icon
                            >
                                <option value="relevance">Sort by Relevance</option>
                                <option value="date">Sort by Date</option>
                                <option value="popularity">Sort by Popularity</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-3 bg-white w-64 h-10 justify-center items-center mt-4 opacity-80 rounded-2xl'>
                        <div className='text-black flex items-end pr-6'>
                            <a type='/'  className='flex items-center' href='login/login'>
                                <img
                                    src="/login.png"
                                    alt="Login Icon"
                                    className="w-6 h-6 border-black" // Add right padding to create space
                                />
                                &nbsp;Login
                            </a>
                        </div>
                        <div className='text-black gap-x-2 flex items-end'>
                            <a type='/' className='flex items-center' href='signup/signup'>
                                <img
                                    src="/signup.png"
                                    alt="Signup Icon"
                                    className="w-6 h-6 border-black" // Add right padding to create space
                                />
                                &nbsp;Signup
                            </a>
                        </div>
                    </div>


                </div>

                <div className="text-center text-5xl text-white font-bold font-cursive mt-10">
                    Aesthetic Skin<br />
                </div>


            </div>
            <div className="bg-slate-200  flex justify-end pl-40 pr-5">
                <div className="container py-4">

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
