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
    <nav className="bg-blue-500">
      <div className="flex p-4 justify-center">
        {user ? (
          <div className="flex">
            <div className="flex items-center mr-3 text-white">
              {user ? "Welcome, " + user.displayName : ""}
            </div>
            <button
              className="flex bg-white text-blue-500 font-medium p-2 rounded-lg justify-items-center hover:bg-blue-800 hover:text-white transition-left duration-500 ease-in-out"
              onClick={handleLogout}
            >
              <p className="mr-1">Logout</p>{" "}
              <FaSignOutAlt className="my-auto" />
            </button>
          </div>
        ) : (
          <button
            className="flex bg-white text-blue-500 font-medium p-2 rounded-lg justify-items-center hover:bg-blue-800 hover:text-white transition-left duration-500 ease-in-out"
            onClick={handleNavbarLogin}
          >
            <p className="mr-1">Login with</p> <FaGoogle className="my-auto" />
          </button>
        )}
      </div>
    </nav>
  );
}
