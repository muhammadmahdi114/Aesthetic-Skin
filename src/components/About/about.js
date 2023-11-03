export default function About() {
    return (
        <div>
            <section className="bg-slate-200 bg-no-repeat overflow-hidden bg-cover w-full min-h-screen flex flex-col justify-start items-center py-10">
                <h1 className="font-cursive text-6xl text-center  font-extrabold">ABOUT</h1>
                <div className="text-center pl-32 text-xl mx-auto text-black font-bold font-cursive mt-44">
                A blog is a type of website or platform where individuals or organizations regularly publish articles, posts, or content on various<br/> topics , often in a chronological order, to share information, opinions,
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full mt-32 relative">
                 
                    <span className="">Give Review</span>
                </button>

            </section>
        </div>
    );
}