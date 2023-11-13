import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

function Signup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/signup", {
                name,
                email,
                password,
                age,
                gender
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                router.push({
                    pathname: "/home",
                    query: { id: email, username: name },
                  });
                  
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }

    return (
        <div className="bg-bgLogin h-screen flex flex-col items-center justify-center">
            <img src="/logo.png" className="h-52 -mt-20" alt="Logo" />

            <div className="bg-white border-4 border-white rounded-lg p-9 flex flex-col justify-center items-center">
                <input type="text" onChange={(e) => setName(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-3" placeholder="Name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10" placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10" placeholder="Password" />
                <input type="number" onChange={(e) => setAge(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10" placeholder="Age" />
                <input type="text" onChange={(e) => setGender(e.target.value)} className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10" placeholder="Gender" />
                <button onClick={submit} className="h-12 w-80 text-white bg-sky-600 hover:bg-sky-700 mt-10 rounded-lg">Submit</button>
            </div>
        </div>
    );
}

export default Signup;
