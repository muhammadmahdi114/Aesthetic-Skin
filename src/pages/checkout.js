import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {
    const router = useRouter();
    const cartFromUrl = router.query.cart;
    const parsedCart = cartFromUrl ? JSON.parse(cartFromUrl) : [];
    const [totalAmount, setTotalAmount] = useState(0);
    const [checkoutBtn, setCheckoutBtn] = useState(false);
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [confirmPayment, setConfirmPayment] = useState(false);
    const [fullName, setFullName] = useState(null);
    const [addr, setAddr] = useState(null);
    const [phnNum, setPhnNum] = useState(null);
    const [secPhnNum, setSecPhnNum] = useState(null);
    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardCvc, setCardCvc] = useState(null);
    const [email, setEmail] = useState(null);



    useEffect(() => {
        let total = 0;
        parsedCart.forEach(item => {
            total += item.price;
        });
        setTotalAmount(total);
    }, [parsedCart]);

    const handleHomeBtn = () => {
        window.location.href = 'http://localhost:3000';
    };

    const handleProceed = (event) => {
        event.preventDefault();

        if (!fullName) {
            alert("Please enter the name.");
        } else if (!addr) {
            alert("Please enter the address.");
        } else if (!phnNum) {
            alert("Please enter the Phone Number.");
        } else {
            setCheckoutBtn(false);
            setConfirmAddress(true);
        }
    };

    const handleMakePayment = (event) => {
        event.preventDefault();

        // if (!cardName) {
        //     alert("Please enter the name.");
        // } else if (!cardNumber) {
        //     alert("Please enter the Card Number.");
        // } else if (!cardCvc) {
        //     alert("Please enter the CVC.");
        // } else {
        //     setConfirmPayment(true);
        //     setConfirmAddress(false);

        // }
        setConfirmPayment(true);
        setConfirmAddress(false);
        setTimeout(() => {
            window.print();
        }, 1000);

    }

    const makepayment = async () => {

        if (!checkoutBtn) {
            setCheckoutBtn(true);
        }


        if (confirmPayment) {

            // const stripe = await loadStripe("");

            // const body = {
            //     products: item
            // }

            // const headers = {
            //     "Content-Type":"application/json"
            // }

            // const response = await fetch(`${apiURL}/create-checkout-session`, {
            //     method:"POST",
            //     headers:headers,
            //     body:JSON.stringify(body)
            // })

            // const session = await response.json();

            // const result = stripe.redirectToCheckout({
            //     sessionId:session.id
            // })
        }
    }

    return (
        <div className='bg-white text-black h-screen w-screen font-cursive'>
            <div className='flex'>
                <div>
                    <img
                        src='logo.png'
                        className='h-60'
                        onClick={handleHomeBtn}
                        alt='Logo'
                    />
                </div>
                <div className='mt-0 w-full'>
                    <h1 className='text-[60px] ml-80'>Your Cart</h1>
                    <div className='mt-20'>
                        <ul>
                            <li>
                                <div className='flex gap-x-[400px] justify-center mb-5'>
                                    <span className='font-bold'>Product Title</span>
                                    <span className='font-bold'>Price</span>
                                </div>
                                {parsedCart.map((item) => (
                                    <div key={item.id} className='flex items-center'>
                                        <div className='flex gap-x-40 justify-between'>
                                            <img src={item.imageUrl} alt={item.title} className='w-16 h-16 object-cover' />

                                            <span className='w-[400px]'>{item.title}</span>
                                            <span className='w-[200px] ml-16'>PKR: {item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </li>
                        </ul>
                        <div className='w-full flex justify-end'>
                            <span className="mr-72">Total Amount: <b>PKR {totalAmount}</b></span>
                        </div>

                        <div className='w-full flex justify-end mt-7'>
                            <button onClick={() => setCheckoutBtn(true)} className='mr-80 w-36 h-10 bg-blue-500 text-white rounded-xl'>Checkout</button>
                        </div>
                        {checkoutBtn && (
                            <div className="fixed inset-0 bg -white text-black bg-opacity-70 z-10">
                                <form className="bg-white p-4 rounded-md shadow-md w-1/3 mx-auto mt-28">
                                    <div className='flex justify-between items-center mb-2'>
                                        <h2>Enter your Address</h2>
                                        <svg onClick={() => setCheckoutBtn(false)} className="bg-red-500 text-white p-1 rounded h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <input
                                        onChange={(event) => setFullName(event.target.value)}
                                        placeholder="Full Name"
                                        type="text"
                                        className="w-full h-8 pl-3 mt-7"
                                        value={fullName || ""}
                                    />
                                    <input
                                        onChange={(event) => setAddr(event.target.value)}
                                        placeholder="Complete Address"
                                        type="text"
                                        className="w-full h-8 pl-3 mt-5"
                                        value={addr || ""}
                                    />
                                    <input
                                        onChange={(event) => setPhnNum(event.target.value)}
                                        placeholder="Phone Number"
                                        type="number"
                                        className="w-full h-8 pl-3 mt-5"
                                        value={phnNum || ""}
                                    />
                                    <input
                                        onChange={(event) => setSecPhnNum(event.target.value)}
                                        placeholder="Secondary Phone Number (optional)"
                                        type="number"
                                        className="w-full h-8 pl-3 mt-5"
                                        value={secPhnNum || ""}
                                    />
                                    <button onClick={handleProceed} className='w-full h-10 mt-5 bg-green-500 text-white rounded-xl'>Proceed</button>

                                </form>
                            </div>
                        )}
                        {confirmAddress && (
                            <div className="fixed inset-0 bg-white text-black bg-opacity-70 z-10">
                                <form className="bg-white p-4 rounded-md shadow-md w-1/3 mx-auto mt-28">
                                    <div className='flex justify-between items-center mb-2'>
                                        <h2>Enter your Card Details</h2>
                                        <svg onClick={() => setConfirmAddress(false)} className="bg-red-500 text-white p-1 rounded h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <input
                                        onChange={(event) => setCardName(event.target.value)}
                                        placeholder='Full Name'
                                        type='text'
                                        className='w-full h-8 pl-3 mt-7'
                                        value={cardName || ''}
                                    />
                                    <input
                                        onChange={(event) => setCardNumber(event.target.value)}
                                        placeholder='Card Number'
                                        type='number'
                                        className='w-full h-8 pl-3 mt-5'
                                        value={cardNumber || ''}
                                    />
                                    <input
                                        onChange={(event) => setCardCvc(event.target.value)}
                                        placeholder='CVC'
                                        type='number'
                                        className='w-full h-8 pl-3 mt-5'
                                        value={cardCvc || ''}
                                    />
                                    <input
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder='Email (optional)'
                                        type='text'
                                        className='w-full h-8 pl-3 mt-5 mb-5'
                                        value={email || ''}
                                    />
                                    <span className='ml-3'>The total payable amount is {totalAmount}</span>
                                    <button onClick={handleMakePayment} className='w-full h-10 mt-5 bg-green-500 text-white rounded-xl'>Make Payment</button>
                                </form>
                            </div>
                        )}
                        {confirmPayment && (
                            <div className="print-content fixed inset-0 bg-white text-black bg-opacity-100 z-10 flex flex-col items-center justify-center">
                                <img
                                    src='/logo.png'
                                    alt="Logo"
                                    className='h-60 -mt-40'
                                    onClick={handleHomeBtn}
                                />

                                <span className='-mt-8' ><b>Bank:</b> XYZ Pakistan</span>
                                <span ><b>Account Title:</b> Aesthetic Skin</span>
                                <span className='mb-10'><b>Account Number:</b> xxxx-xxxx-xxxx-xxxx</span>
                                <span className='font-bold text-4xl mb-14'>Order Details</span>

                                <ul>
                                    <li>
                                        <div className='flex gap-x-[250px] justify-center mb-5'>
                                            <span className='font-bold w-[200px]    '>Product Title</span>
                                            <span className='font-bold ml-20'>Price</span>
                                        </div>
                                        {parsedCart.map((item) => (
                                            <div key={item.id} className='flex items-center'>
                                                <div className='flex gap-x-[80px] justify-between'>
                                                    <span className='w-[400px] ml-20'>{item.title}</span>
                                                    <span className='w-[200px] ml-20'>PKR: {item.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </li>
                                </ul>
                                <div className='text-xl flex gap-x-[400px] justify-between'>
                                    <span></span>
                                    <span className='mt-10'><b>Total Amount: </b>{totalAmount}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
