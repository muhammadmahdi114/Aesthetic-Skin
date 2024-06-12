import React, { useState } from 'react';

const FAQ = React.forwardRef((props, ref) => {
    const [faqs] = useState([
        {
            question: 'How Can I Pay For My Order On Aesthetic Skin?',
            answer: 'At Aesthetic Skin, you can either pay COD or you can use Bank Transfer.'
        },
        {
            question: 'What Are The Delivery Charges Of Aesthetic Skin?',
            answer: 'The delivery is free for orders over PKR 3000/-, otherwise it ise PKR 150/-.'
        },
        {
            question: 'Do You Ship Orders Nationwide From Aesthetic Skin?',
            answer: 'Yes, Aesthetic Skin ships orders nationwide.'
        },
        {
            question: 'How Can I Replace A Product From Aesthetic Skin?',
            answer: 'You can reach us at our Whatsapp that is mentioned in the website.'
        },
        {
            question: 'Do I Have To Pay Shipping Charges When Replacing A Product From Aesthetic Skin?',
            answer: 'That depends on why you want to replace a product. Aesthetic Skin representative can guide you better.'
        },
        {
            question: 'Can I Return A Product After 7 Days To Aesthetic Skin?',
            answer: 'The return policy states that the product should be returned within 7 days of the delivery date.'
        },
        {
            question: 'How Long Does Aesthetic Skin Take To Deliver An Order?',
            answer: 'It takes 3-5 business days to deliver an order from Aesthetic Skin.'
        },
        {
            question: 'What If My Item Arrives Damaged Or Defective?',
            answer: 'You can reach Aesthetic Skin at our Whatsapp.'
        },
        {
            question: 'How Do We Know That The Products On Aesthetic Skin Are Original?',
            answer: 'Aesthetic Skin only deals in original and guranteed products.'
        },
        {
            question: 'In Which Circumstances Are Customers Asked For An Advance?',
            answer: 'If the order placed is over PKR 20,000/- and the payment method selected is COD'
        },
    ]);
    const [isOpen, setIsOpen] = useState(new Array(faqs.length).fill(false));
    const toggleDropdown = (index) => {
        setIsOpen((prevOpen) => prevOpen.map((open, i) => i === index ? !open : open));
    };

    return (
        <div ref={ref} className=' pl-36 bg-bgfaq bg-no-repear overflow-hidden bg-cover  w-full h-screen '>
            <div className="font-cursive container mx-auto py-12 text-black">
                <h2 className="text-4xl text-center text-white font-bold">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 gap-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white opacity-75 rounded-lg shadow-md overflow-hidden">
                            <div
                                className="px-4 py-5 flex justify-between cursor-pointer hover:bg-gray-300"
                                onClick={() => toggleDropdown(index)}
                            >
                                <h2 className="font-bold text-lg mb-1">{faq.question}</h2>
                                <span className="text-gray-600">
                                    {isOpen[index] ? '–' : '+'}
                                </span>
                            </div>
                            {isOpen[index] && (
                                <div className="px-4 py-3 bg-gray-100">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default FAQ;

