import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Notification from '../Notification/notification';
import ListingCard from '../ListingCard/listingcard';

const Product = React.forwardRef((props, ref) => {
    const [comp, setComp] = useState(false);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [showWishlist, setShowWishlist] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('');
    const [showNotification, setShowNotification] = useState(false);

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

    const addToWishlist = (product) => {
        if (!wishlist.some(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
            setNotificationMessage(`${product.title} has been added to the wishlist.`);
            setNotificationType('Green')
            setShowNotification(true);
        }
        setShowNotification(true);
    };

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart([...cart, { ...product, imageUrl: product.imageUrl }]);
            setNotificationMessage(`${product.title} has been added to the cart.`);
            setNotificationType('Green')
        }
        setShowNotification(true);
    };

    const hideNotification = () => {
        setShowNotification(false);
    };

    React.useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => hideNotification(), 3000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const handleCompare = () => {
        setComp(true);
        if (comp) {
            setComp(false);
        }
    }

    const handleProductSelect1 = (event) => {
        const selectedValue = event.target.value;
        setSelectedProduct1(selectedValue);
    };

    const handleProductSelect2 = (event) => {
        const selectedValue = event.target.value;
        setSelectedProduct2(selectedValue);
    };

    const removeProduct = (productId, productTitle, list) => {
        const updatedList = list.filter((product) => product.id !== productId);
        if (list === wishlist) {
            setWishlist(updatedList);
            setNotificationMessage(`${productTitle} has been removed from the Wishlist.`);
            setNotificationType('Red')
        } else if (list === cart) {
            setCart(updatedList);
            setNotificationMessage(`${productTitle} has been removed from the Cart.`);
            setNotificationType('Red')
        }
        setShowNotification(true);
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Cart is empty. Add items to the cart first.")
        } else {
            console.log("Checkout Pressed");
            router.push('/checkout');
        }
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3000'
    }

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
        if (!featuresData1) return null;
        const { id, title, features, price, imageUrl } = featuresData1;
        return (
            <div>
                <img src={imageUrl} className='w-60 h-60' alt={title} />
                <ol>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ol>
                <p>{price}</p>
                <p>{title}</p>
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
        if (!featuresData2) return null;
        const { id, title, features, price, imageUrl } = featuresData2;
        return (
            <div>
                <img src={imageUrl} className='w-60 h-60' alt={title} />
                <ol>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ol>
                <p>{price}</p>
                <p>{title}</p>
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
                            <div className='text-black flex gap-x-5'>
                                <span>{emailParam}</span>
                                <svg onClick={handleLogout} class="w-6 h-6white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                                </svg>
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
                        <button onClick={() => setShowWishlist(true)} className="p-2 rounded text-center border-white mt-4 bg-white w-60">
                            Wishlist
                        </button>
                        <button onClick={() => setShowCart(true)} className="p-2 rounded text-center border-white mt-4 bg-white w-60">
                            Cart
                        </button>
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
                {showCart && (
                    <div className="fixed inset-0 bg-white text-black bg-opacity-50 z-10">
                        <div className="bg-white p-4 rounded-md shadow-md w-1/3 mx-auto mt-20">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">Cart</h2>
                                <svg onClick={() => setShowCart(false)} className="bg-red-500 text-white p-1 rounded h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div className='flex justify-between w-full'>
                                <h3 className="text-lg font-semibold mb-2">Product</h3>
                                <div className="text-lg font-semibold mb-2 mr-12 flex items-center justify-end">
                                    Price
                                </div>
                            </div>
                            <ul>
                                {cart.map((product) => (
                                    <li key={product.id} className="flex justify-between items-center mt-2 text-black">
                                        <span>{product.title}</span>
                                        <div className="flex items-center justify-end">
                                            <span className='mr-4'>{product.price}</span>
                                            <button onClick={() => removeProduct(product.id, product.title, cart)} className="bg-red-500 text-white p-1 rounded h-7 w-6 ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link href={{
                                pathname: '/checkout',
                                query: { cart: JSON.stringify(cart) }
                            }}>
                                <button className='bg-blue-500 text-white w-full mt-5 h-10 rounded-lg'>Go to Checkout</button>
                            </Link>                           
                        </div>
                    </div>
                )}
                {showWishlist && (
                    <div className="fixed inset-0 bg-white text-black bg-opacity-50 z-10">
                        <div className="bg-white p-4 rounded-md shadow-md w-1/3 mx-auto mt-20">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">Wishlist</h2>
                                <svg onClick={() => setShowWishlist(false)} className="bg-red-500 text-white p-1 rounded h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div className='flex justify-between w-full'>
                                <h3 className="text-lg font-semibold mb-2">Product</h3>
                                <div className="text-lg font-semibold mb-2 mr-12 flex items-center justify-end">
                                    Price
                                </div>
                            </div>
                            <ul>
                                {wishlist.map((product) => (
                                    <li key={product.id} className="flex justify-between items-center mt-2 text-black">
                                        <span>{product.title}</span>
                                        <div className="flex items-center justify-end">
                                            <span className='mr-4'>{product.price}</span>
                                            <button onClick={() => removeProduct(product.id, product.title, wishlist)} className="bg-red-500 text-white p-1 rounded h-7 w-6 ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
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
                                    <h2 className="text-xl font-semibold  mb-3">Features:</h2>
                                    {renderFeatures1()}
                                </div>
                            )}
                        </div>
                        <div className='ml-16'>
                            <a className='text-3xl ml-20'>Product 2</a>
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
                                    <h2 className="text-xl font-semibold mb-3">Features:</h2>
                                    {renderFeatures2()}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="container mt-6 py-2">
                        {showNotification && (
                            <Notification message={notificationMessage} type={notificationType} />
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                            {listings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    id={listing.id}
                                    title={listing.title}
                                    location={listing.location}
                                    price={listing.price}
                                    imageUrl={listing.imageUrl}
                                    addToWishlist={addToWishlist}
                                    addToCart={addToCart}
                                    removeProduct={removeProduct}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
})
export default Product;     