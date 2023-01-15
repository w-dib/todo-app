"use client";
import ToDoEntry from "@/components/ToDoEntry";
import ToDoCard from "@/components/ToDoCard";
import Navbar from "@/components/Navbar";

import { useState } from "react";
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Navbar setLoggedIn={setLoggedIn} setUser={setUser} />
      {loading ? (
        <div>Loading...</div>
      ) : loggedIn ? (
        <>
          <ToDoEntry handleSubmit={handleSubmit} />
          {/* {tasks.map((task) => (
            <ToDoCard key={id} task={task} />
          ))} */}
        </>
      ) : (
        <div className="flex flex-col items-center justify-top h-screen mt-10">
          <h1 className="text-center text-4xl font-medium">
            ✏️ Welcome to{" "}
            <span className="underline decoration-blue-500/30">
              Walid&apos;s to-do list!
            </span>{" "}
          </h1>
          <p className="mt-3 font-medium py-2 px-4">
            Please login to continue.
          </p>
        </div>
      )}
    </div>
  );
}
