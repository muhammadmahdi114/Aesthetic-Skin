import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Login() {
  useEffect(() => {
    document.title = 'Aesthetic Skin | Login';
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientName, setClientName] = useState("")

  const loginSuccessful = () => {
    const url = new URL("http://localhost:3000");
    url.searchParams.set("name", clientName);
    window.location.href = url.toString();
  };

  useEffect(() => {
    if (clientName) {
      loginSuccessful();
    }
  }, [clientName]);

  async function submit(e) {
    e.preventDefault();

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      console.log(response.data)

      if (response.data.success) {
        const nameFromResponse = response.data.username;
        setClientName(nameFromResponse);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error occurred while logging in");
      console.log(error);
    }
  }


  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("some-element");
      if (element) {
        element.focus();
      }
    }
  }, []);

  return (
    <div className="bg-bgLogin h-screen flex flex-col items-center">
      <Link href={{ pathname: '/' }}>
        <img src="/logo.png" className="h-52 mt-10" alt="Logo" />
      </Link>

      <div className="bg-white border-4 border-white rounded-lg p-9 flex flex-col justify-center items-center text-black">
        <h1 className="text-[30px]">Login</h1>
        <form onSubmit={submit}>
          <div className="w-80 mt-10">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="h-8 border-b-2 border-gray-200 pl-5 w-full" />
          </div>
          <div className="w-80 mt-10">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="h-8 border-b-2 border-gray-200 pl-5 w-full" />
          </div>
          <div className="w-80 mt-10">
            <button type="submit" className="h-12 w-full text-white bg-gray-600 hover:bg-green-700 rounded-lg">Submit</button>
          </div>
        </form>
        <span className="mt-3">Don't have an account? <Link href={{ pathname: '/Signup/signup' }}><span className="underline text-blue-700">Sign up!</span></Link></span>
      </div>
    </div>
  );
}