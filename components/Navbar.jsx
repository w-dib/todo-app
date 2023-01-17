import React, { useEffect, useState } from "react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import { auth } from "../app/fbconfig";
import { handleLogin } from "../app/AuthHelper";

export default function Navbar({ setLoggedIn, setUser }) {
  const [user, setAuthUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        setLoggedIn(true);
        setUser(user);
      } else {
        setAuthUser(null);
        setLoggedIn(false);
        setUser(null);
      }
    });
  }, [setLoggedIn, setUser]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setAuthUser(null);
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavbarLogin = async () => {
    const user = await handleLogin();
    if (user) {
      setAuthUser(user);
      setLoggedIn(true);
      setUser(user);
    }
  };

  return (
    <nav className="justify-center	bg-blue-500">
      <div className="flex p-4 max-w-xl mx-auto">
        {user ? (
          <div className="flex justify-between w-full">
            <div className="flex  items-center text-white">
              {user ? "Welcome, " + user.displayName : ""}
              <img
                className="ml-2 rounded-full h-10 border-1 border-blue-900"
                src={user.photoURL}
                alt={user.displayName}
              />
            </div>
            <div className="flex">
              <button
                className="flex bg-white text-blue-500 font-medium p-2 rounded-lg justify-items-center hover:bg-blue-800 hover:text-white transition-left duration-500 ease-in-out ml-4"
                onClick={handleLogout}
              >
                <p className="mr-1">Logout</p>{" "}
                <FaSignOutAlt className="my-auto" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto">
            <button
              className="flex bg-white text-blue-500 font-medium p-2 rounded-lg justify-items-center hover:bg-blue-800 hover:text-white transition-left duration-500 ease-in-out"
              onClick={handleNavbarLogin}
            >
              <p className="mr-1">Login with</p>{" "}
              <FaGoogle className="my-auto" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
