import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userName = "YourUserName"; // Replace with the actual user name

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000", {
                email,
                password
            });

            if (res.data === "exist") {
                router.push("/", undefined, { shallow: true, state: { id: email, name: userName } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }

    return (
        <div className="bg-bgLogin h-screen flex flex-col items-center justify-center">
            <img src="/logo.png" className="h-52" alt="Logo" />

            <div className="bg-white border-4 border-white rounded-lg p-9 h-96 flex flex-col justify-center items-center">
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-3" placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10" placeholder="Password" />
                <div className="text-blue-400 mt-6 items-start justify-start underline">
                    <a className=" text-[14px]">Forgot Password</a>
                </div>
                <div className="text-blue-400 mt-2 items-start justify-start underline">
                        <a href="/signup/signup" className=" cursor-pointer  text-[14px] mt-2">Signup</a>
                </div>
                <button onClick={submit} className="h-12 w-80 text-white bg-sky-600 hover:bg-sky-700 mt-10 rounded-lg">LOGIN</button>
            </div>
        </div>
    );
}
