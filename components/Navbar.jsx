import React, { useEffect, useState } from "react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import { auth, provider } from "../app/fbconfig";
import { signInWithPopup } from "firebase/auth";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });
  }, []);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    setLoggedIn(true);
  };

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <nav className="bg-blue-500">
      <div className="flex p-4 justify-center">
        {loggedIn ? (
          <div className="flex">
            <div className="flex items-center mr-3 text-white">
              {user ? "Welcome, " + user.displayName : ""}
            </div>
            <button
              className="flex bg-white text-blue-500 font-medium p-2 rounded-lg 
            justify-items-center hover:bg-blue-800 hover:text-white transition-left 
            duration-500 ease-in-out"
              onClick={handleLogout}
            >
              <p className="mr-1">Logout</p>{" "}
              <FaSignOutAlt className="my-auto" />
            </button>
          </div>
        ) : (
          <button
            className="flex bg-white text-blue-500 font-medium p-2 rounded-lg 
            justify-items-center hover:bg-blue-800 hover:text-white transition-left 
            duration-500 ease-in-out"
            onClick={handleLogin}
          >
            <p className="mr-1">Login with</p> <FaGoogle className="my-auto" />
          </button>
        )}
      </div>
    </nav>
  );
}
