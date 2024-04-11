import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSuccessful = () => {
    const url = new URL("http://localhost:3000");
    url.searchParams.set("loginSuc", "true");
    url.searchParams.set("email", email);
    window.location.href = url.toString();
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      await axios.post("http://localhost:8000/", {
        email, password
      })
        .then(res => {
          if (res.data === "exist") {
            loginSuccessful();
          }
          else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch(e => {
          alert("Wrong details");
          console.log(e);
        });

    } catch (e) {
      console.log(e);
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
      <img src="/logo.png" className="h-52 mt-10" alt="Logo" />
      <div className="bg-white border-4 border-white rounded-lg p-9 flex flex-col justify-center items-center text-black">
        <h1 className=" text-[30px]">Login</h1>
        <form onSubmit={submit}>
          <div className="w-80 mt-10">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="h-8 border-b-2 border-gray-200 pl-5 w-full" />
          </div>
          <div className="w-80 mt-10">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="h-8 border-b-2 border-gray-200 pl-5 w-full" />
          </div>
          <div className="w-80 mt-10">
            <button onClick={submit} className="h-12 w-full text-white bg-sky-600 hover:bg-sky-700 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}