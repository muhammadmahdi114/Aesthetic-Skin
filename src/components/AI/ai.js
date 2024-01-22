export default function AI() {
    const handleDiveInClick = () => {
        window.location.href = 'http://localhost:3002/'
    };

    return (
        <div className="pl-32">
            <section className="bg-gray-500 bg-no-repeat overflow-hidden bg-cover w-full flex flex-col justify-start items-center py-20">
                <h1 className="font-cursive text-6xl text-center text-white font-extrabold ">AI RECOGNITION</h1>
                <div className="text-center text-xl mx-auto text-white font-bold font-cursive mt-44">
                    Artificial Intelligence recognition is a technology that enables machines to identify and classify objects.<br />
                    We are using this technology to help analyze your skin and we can also recommend some products for you.
                </div>
                <button
                    onClick={handleDiveInClick}
<<<<<<< HEAD
                    className="bg-blue-500 hover:bg-blue-700 text-[#e2e8f0] font-bold py-5 px-12 rounded-full mt-32">
=======
                    className="bg-blue-500 hover:bg-blue-700 text-[#e2e8f0] font-bold py-5 px-12 rounded-full mt-32 relative"
                >
>>>>>>> parent of 1693abb47 (Three JS in same Repo)
                    Click to DIVE IN
                </button>
            </section>
        </div>
    );
}