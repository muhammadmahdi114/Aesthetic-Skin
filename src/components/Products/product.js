import React from 'react';
import axios from "axios";
import { useRouter } from 'next/router';



const ListingCard = ({ title, location, price, imageUrl }) => {
    return (
        <div>
            <div className="rounded overflow-hidden  ">
                <img src={imageUrl} alt={title} className=" h-56 rounded-2xl" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{title}</div>
                    <p className="text-gray-400 text-base ">{location}</p>
                    <p className="text-gray-200 font-semibold text-xl mt-2 text-gray-">${price} / night</p>
                </div>
            </div>
        </div>
    );
};

export default function Product() {

    async function handleLogin(){
        return (
            <div className="App">
              <Router>
                <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/home" element={<Home/>}/>
                </Routes>
              </Router>
            </div>
          );
    }

    
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
        <div className="flex flex-col">
            <div className="bg-white p-4">
                <div className="flex justify-center gap-x-2">
                    {/* Search Bar with Image */}
                    <div className="relative mt-4">
                        <button type='/' onClick={handleLogin}> Login</button>
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
                            className="p-2 rounded border-white bg-white pl-10" // Add left padding to make space for the icon
                        >
                            <option value="relevance">Sort by Relevance</option>
                            <option value="date">Sort by Date</option>
                            <option value="popularity">Sort by Popularity</option>
                        </select>
                    </div>
                </div>

                <div className="text-center text-5xl text-black font-bold font-cursive mt-10">
                    Aesthetic Skin<br />


                </div>


            </div>
            <div className="bg-gray-500 flex justify-end pl-40 pr-5">
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
