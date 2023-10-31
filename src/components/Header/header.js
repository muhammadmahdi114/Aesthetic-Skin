import React from 'react';

export default function Header() {
    return (
        <div className="bg-white overflow-hidden header fixed h-full w-36 flex flex-col justify-start px-2 gap-y-12">
            <div className="">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="mb-2 mt-2"
                />
            </div>
            <div className="flex flex-col gap-y-32 mt-4 text-black font-bold  font-cursive ">
                <button className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-5px] transition-all transform -rotate-90">
                    PRODUCTS
                </button>
                <button className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-8px] transition-all transform -rotate-90">
                    AI RECOGNITION
                </button>
                <button className="p-1 hover:text-white hover:bg-[#c5c5c5] hover:shadow-xl hover:translate-y-[-5px] transition-all transform -rotate-90">
                    ABOUT US
                </button>
            </div>
        </div>
    );
}
