import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {
    const router = useRouter();
    const cartFromUrl = router.query.cart;
    const parsedCart = cartFromUrl ? JSON.parse(cartFromUrl) : [];
    const [totalAmount, setTotalAmount] = useState(0);
    const [checkoutBtn, setCheckoutBtn] = useState(false);
    const [confirmPayment, setConfirmPayment] = useState(false);

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

    const makePayment = async () => {

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
                                            <span className='w-[200px]'>PKR: {item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </li>
                        </ul>
                        <div className='w-full flex justify-end'>
                            <span className="mr-60">Total Amount: <b>PKR {totalAmount}</b></span>
                        </div>

                        <div className='w-full flex justify-end mt-7'>
                            <button onClick={() => setCheckoutBtn(true)} className='mr-60 w-36 h-10 bg-blue-500 text-white rounded-xl'>Checkout</button>
                        </div>
                        {checkoutBtn && (
                            <div className="fixed inset-0 bg-white text-black bg-opacity-70 z-10">
                                <div className="bg-white p-4 rounded-md shadow-md w-1/3 mx-auto mt-28">
                                    <div className='flex justify-between items-center mb-2'>
                                        <h2>Enter your Card Details</h2>
                                        <svg onClick={() => setCheckoutBtn(false)} className="bg-red-500 text-white p-1 rounded h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <input placeholder='Enter Full Name' required type='text' className='w-full h-8 pl-3 mt-7' />
                                    <input placeholder='Enter Credit Card Number' required type='number' className='w-full h-8 pl-3 mt-5' />
                                    <input placeholder='Enter CVC' type='number' required className='w-full h-8 pl-3 mt-5' />
                                    <input placeholder='Enter complete Address (optional)' type='number' className='w-full h-8 pl-3 mt-5 mb-5' />
                                    <span className='ml-3'>The total payable amount is {totalAmount}</span>
                                    <button onClick={() => setConfirmPayment(true)} className='w-full h-10 mt-5 bg-green-500 text-white rounded-xl'>Make Payment</button>
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
