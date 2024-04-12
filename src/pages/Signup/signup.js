import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    document.title = 'Aesthetic Skin | SignUp';
  }, []);

  const signupSuccesful = () => {
    const url = new URL("http://localhost:3000/Login/login");
    url.searchParams.set("Signup", "true");
    window.location.href = url.toString();
    console.log(email, "EMAILLLLL")
  };

  async function submit(e) {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
        age,
        gender
      });

      if (response.data.status === "exist") {
        alert("User already exists");
      } else {
        signupSuccesful();
      }
    } catch (error) {
      alert("Error occurred while signing up");
      console.log(error);
    }
  }

  return (
    <div className="bg-bgLogin h-screen flex flex-col items-center justify-center text-black">
      <Link
        href={{ pathname: '/' }}>
        <img src="/logo.png" className="h-52 -mt-10" alt="Logo" />
      </Link>
      <div className="bg-white border-4 border-white rounded-lg p-9 flex flex-col justify-center items-center">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="h-8 w-80 border-b-2 text-black border-gray-200 mt-3"
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10"
          placeholder="Password"
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10"
          placeholder="Age"
        />
        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          className="h-8 w-80 border-b-2 text-black border-gray-200 mt-10"
          placeholder="Gender"
        />
        <button onClick={submit} className="h-12 w-80 text-white bg-gray-600 hover:bg-green-700 mt-10 rounded-lg">
          Submit
        </button>
        <span className="mt-3">Already have an account? <Link
          href={{ pathname: '/Login/login' }}>
          <span className="underline text-blue-700">Login!</span>
        </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;