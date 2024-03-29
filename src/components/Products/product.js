

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
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center text-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-black text-2xl font-semibold mb-4">{title}</h2>
                        <p className="text-black mb-4">{location}</p>
                        <p className="text-black font-semibold text-xl mt-2 text-gray-">Pkr : {price} </p>
                        <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">Details</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Product = React.forwardRef((props, ref) => {
    const [comp, setComp] = useState([false]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

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
        window.location.href = 'http://localhost:3002/signup'
    };
    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3002';
    };

    const handleCompare = () => {
        setComp(true);
        if (comp) {
            setComp(false);
        }
        console.log(comp)
    }

    const handleProductSelect1 = (event) => {
        const selectedValue = event.target.value;
        setSelectedProduct1(selectedValue);
    };

    const handleProductSelect2 = (event) => {
        const selectedValue = event.target.value;
        setSelectedProduct2(selectedValue);
    };

    const renderFeatures1 = () => {
        const productFeatures1 = {
            glu_miracle: {
                features: ['Skin Lightening', 'Powerful Antioxidant', 'Detoxification Support', 'Anti-Aging Defense', 'Immune System Enhancement'],
                price: 'Price: PKR 21,000',
                imageUrl: '/miracle.jpeg'
            },
            glu_glutax75gx: {
                features: ['Advanced Skin Lightening Formula', 'Enhanced Antioxidant Defense', 'Detoxification and Cleansing', 'Anit-Aging Benefits', 'Immune System Boost'],
                price: 'Price: PKR 25,000',
                imageUrl: '/glutax75.jpeg'
            },
            glu_tationil: {
                features: ['Highly Purified Formulation', 'Rapid Skin Brightening', 'Potent Antioxidant Protection', 'Detoxification Support', 'Collagen Production Boost'],
                price: 'Price: PKR 18,000',
                imageUrl: '/tationilinj.jpeg'
            },
            prof_inj: {
                features: ['Bio-Remodeling Effect', 'Dual Action Hydration', 'Non-Crosslinked Hyaluronic Acid', 'Biocompatible and Biodegradable', 'Treatment Versatility'],
                price: 'Price: PKR 45,000',
                imageUrl: '/profilho.jpeg'
            },
            per_char: {
                features: ['Precision Application', 'Long-Lasting Results', 'Safety Sterility', 'Versatile Application', 'Comfortable Handling'],
                price: 'Price: PKR 17,000',
                imageUrl: '/charment.jpeg'
            },
            glu_glutax2000: {
                features: ['High Potency Formulation', 'Advanced Skin Rejuvenation', 'Enhanced Antioxidant Protection', 'Detoxification and Cleansing', 'Immune System Support'],
                price: 'Price: PKR 23,000',
                imageUrl: '/glutax2000.jpeg'
            },
            mesoGun: {
                features: ['Precision Microneedling', 'Enhanced Product Absorption', 'Customizable Treatment', 'Stimulates Collagen Production', 'Safe and Hygienic Design'],
                price: 'Price: PKR 20,000',
                imageUrl: '/meso.jpeg'
            },
            j_numb: {
                features: ['Topical Anesthetic Relief', 'Fast-Acting Formula', 'Long-Lasting Duration', 'Versatile Application', 'Skin-Friendly Ingredients'],
                price: 'Price: PKR 10,000',
                imageUrl: '/jcain.jpeg'
            },
            korean_hydra: {
                features: ['Hydrating Formulation', 'Multi-Step Treatment', 'Customizable Solutions', 'Gentle and Non-Irritating', 'Visible Results'],
                price: 'Price: PKR 7,000',
                imageUrl: '/hydraserum.jpeg'
            },
            korea_botox: {
                features: ['Botulinum Toxin Type A', 'Precision Injection Technique', 'Minimally Invasive Treatment', 'Temporary Results', 'Versatile Application'],
                price: 'Price: PKR 12,000',
                imageUrl: '/botulax.jpeg'
            },
            dr_a6: {
                features: ['Advanced Microneedling Technology', 'Adjustable Needle Depth', 'High-Speed Motor', 'Safety Mechanisms', 'Versatile Application'],
                price: 'Price: PKR 16,000',
                imageUrl: '/a6pen.jpeg'
            }
        };
        const featuresData1 = productFeatures1[selectedProduct1];
        if (!featuresData1) return null; // Handle case where selected product is not found

        const { features, price, imageUrl } = featuresData1;

        return (
            <div>
                <img src={imageUrl} className='w-60 h-60' alt="Product" />
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p>{price}</p>
            </div>
        );
    };

    const renderFeatures2 = () => {
        const productFeatures2 = {
            glu_miracle: {
                features: ['Skin Lightening', 'Powerful Antioxidant', 'Detoxification Support', 'Anti-Aging Defense', 'Immune System Enhancement'],
                price: 'Price: PKR 21,000',
                imageUrl: '/miracle.jpeg'
            },
            glu_glutax75gx: {
                features: ['Advanced Skin Lightening Formula', 'Enhanced Antioxidant Defense', 'Detoxification and Cleansing', 'Anit-Aging Benefits', 'Immune System Boost'],
                price: 'Price: PKR 25,000',
                imageUrl: '/glutax75.jpeg'
            },
            glu_tationil: {
                features: ['Highly Purified Formulation', 'Rapid Skin Brightening', 'Potent Antioxidant Protection', 'Detoxification Support', 'Collagen Production Boost'],
                price: 'Price: PKR 18,000',
                imageUrl: '/tationilinj.jpeg'
            },
            prof_inj: {
                features: ['Bio-Remodeling Effect', 'Dual Action Hydration', 'Non-Crosslinked Hyaluronic Acid', 'Biocompatible and Biodegradable', 'Treatment Versatility'],
                price: 'Price: PKR 45,000',
                imageUrl: '/profilho.jpeg'
            },
            per_char: {
                features: ['Precision Application', 'Long-Lasting Results', 'Safety Sterility', 'Versatile Application', 'Comfortable Handling'],
                price: 'Price: PKR 17,000',
                imageUrl: '/charment.jpeg'
            },
            glu_glutax2000: {
                features: ['High Potency Formulation', 'Advanced Skin Rejuvenation', 'Enhanced Antioxidant Protection', 'Detoxification and Cleansing', 'Immune System Support'],
                price: 'Price: PKR 23,000',
                imageUrl: '/glutax2000.jpeg'
            },
            mesoGun: {
                features: ['Precision Microneedling', 'Enhanced Product Absorption', 'Customizable Treatment', 'Stimulates Collagen Production', 'Safe and Hygienic Design'],
                price: 'Price: PKR 20,000',
                imageUrl: '/meso.jpeg'
            },
            j_numb: {
                features: ['Topical Anesthetic Relief', 'Fast-Acting Formula', 'Long-Lasting Duration', 'Versatile Application', 'Skin-Friendly Ingredients'],
                price: 'Price: PKR 10,000',
                imageUrl: '/jcain.jpeg'
            },
            korean_hydra: {
                features: ['Hydrating Formulation', 'Multi-Step Treatment', 'Customizable Solutions', 'Gentle and Non-Irritating', 'Visible Results'],
                price: 'Price: PKR 7,000',
                imageUrl: '/hydraserum.jpeg'
            },
            korea_botox: {
                features: ['Botulinum Toxin Type A', 'Precision Injection Technique', 'Minimally Invasive Treatment', 'Temporary Results', 'Versatile Application'],
                price: 'Price: PKR 12,000',
                imageUrl: '/botulax.jpeg'
            },
            dr_a6: {
                features: ['Advanced Microneedling Technology', 'Adjustable Needle Depth', 'High-Speed Motor', 'Safety Mechanisms', 'Versatile Application'],
                price: 'Price: PKR 16,000',
                imageUrl: '/a6pen.jpeg'
            }
        };
        const featuresData2 = productFeatures2[selectedProduct2];
        if (!featuresData2) return null; // Handle case where selected product is not found

        const { features, price, imageUrl } = featuresData2;

        return (
            <div>
                <img src={imageUrl} className='w-60 h-60' alt="Product" />
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p>{price}</p>
            </div>
        );
    };

    const router = useRouter();
    const loginSucParam = router.query.loginSuc;
    const emailParam = router.query.email;
    console.log("Login:", loginSucParam)
    console.log("Email:", emailParam)

    return (
        <div className="font-cursive flex flex-col bg-bgprod bg-no-repeat bg-cover">
            <div className="h-screen w-screen bg-bgprod bg-no-repeat bg-cover p-4 flex flex-col items-center ">
                <div className="text-6xl text-white font-bold font-cursive ml-40 mt-10">
                    Aesthetic Skin <br />
                </div>
                <div className='flex justify-end w-full -mt-12'>
                    <div className='flex gap-x-3 bg-white w-56 h-10 justify-center items-center opacity-80 rounded-2xl'>
                        {loginSucParam ? (
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
            </div>

            <div ref={ref} className="bg-slate-200 justify-end pl-40 pr-5">
                <div>
                    <h1 className="font-cursive text-6xl text-center text-black font-extrabold mt-5 pl-5 mb-3 bg-slate-200">Products</h1>
                </div>
                <div className="flex justify-center w-screen -ml-20">
                    <div className="flex gap-x-6 text-black">

                        <button onClick={handleCompare} className="p-2 rounded text-center border-white mt-4 bg-white w-60">Compare Products</button>

                        <div className="relative mt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 rounded border-white bg-white pl-12 w-60"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <img
                                    src="/search.svg"
                                    alt="Search Icon"
                                    className="w-8 h-6 border-r-2 pr-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {comp ? (
                    <div className='text-black mx-60 mt-10 mb-10 justify-center flex'>
                        <div>
                            <a className='text-3xl ml-20'>Product 1</a>
                            <select className="p-2 rounded mt-5 border-white text-black bg-white items-center" onChange={handleProductSelect1} value={selectedProduct1}>
                                <option value="">Select a product</option>
                                <option id='1' value="glu_miracle">Glutathione injections Miracle White</option>
                                <option id='2' value="glu_glutax75gx">Glutathione injections Glutax 75GX</option>
                                <option id='3' value="glu_tationil">Glutathione injections Tationil</option>
                                <option id='4' value="prof_inj">Profhilo Injection</option>
                                <option id='5' value="per_char">Permanent Tattoo Charment Pen</option>
                                <option id='6' value="glu_glutax2000">Glutathione injections Glutax 2000</option>
                                <option id='7' value="mesoGun">MesoGun</option>
                                <option id='8' value="j_numb">J cain Numbing Jar</option>
                                <option id='9' value="korean_hydra">Korean Hydrafacial serums</option>
                                <option id='10' value="korea_botox">Korean Botox Botulax</option>
                                <option id='11' value="dr_a6">Dr Pen A6</option>
                            </select>
                            {selectedProduct1 && (
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">Features:</h2>
                                    {renderFeatures1()}
                                </div>
                            )}
                        </div>
                        <div className='ml-16'>
                            <a className='text-3xl ml-20'>Product 1</a>
                            <select className="p-2 rounded mt-5 border-white text-black bg-white items-center" onChange={handleProductSelect2} value={selectedProduct2}>
                                <option value="">Select a product</option>
                                <option id='1' value="glu_miracle">Glutathione injections Miracle White</option>
                                <option id='2' value="glu_glutax75gx">Glutathione injections Glutax 75GX</option>
                                <option id='3' value="glu_tationil">Glutathione injections Tationil</option>
                                <option id='4' value="prof_inj">Profhilo Injection</option>
                                <option id='5' value="per_char">Permanent Tattoo Charment Pen</option>
                                <option id='6' value="glu_glutax2000">Glutathione injections Glutax 2000</option>
                                <option id='7' value="mesoGun">MesoGun</option>
                                <option id='8' value="j_numb">J cain Numbing Jar</option>
                                <option id='9' value="korean_hydra">Korean Hydrafacial serums</option>
                                <option id='10' value="korea_botox">Korean Botox Botulax</option>
                                <option id='11' value="dr_a6">Dr Pen A6</option>
                            </select>
                            {selectedProduct2 && (
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">Features:</h2>
                                    {renderFeatures2()}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="container mt-6 py-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                            {listings.map((listing) => (
                                <ListingCard key={listing.id} {...listing} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
})
export default Product;     