import React from "react";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../app/fbconfig";
import { signInWithPopup } from "firebase/auth";
export default function Navbar() {
  const handleClick = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-start p-4">
        <button
          className="flex bg-white text-blue-500 font-medium p-2 rounded-lg 
        justify-items-center hover:bg-blue-800 hover:text-white transition-left 
        duration-500 ease-in-out"
          onClick={handleClick}
        >
          <p className="mr-1">Login with</p> <FaGoogle className="my-auto" />
        </button>
      </div>
    </nav>
  );
}
