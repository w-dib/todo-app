"use client";
import ToDoEntry from "@/components/ToDoEntry";
import ToDoCard from "@/components/ToDoCard";
import Navbar from "@/components/Navbar";
import { db } from "../app/fbconfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  //FIX EVERYTHING BELOW
  // const fetchTasks = async () => {
  //   await getDocs(collection(db, "tasks"));
  //   fetchTasks.forEach((doc) => {
  //     setTasks([...tasks, task.data()]);
  //   });
  // };

  // useEffect(() => {
  //   async () => {
  //     const fetchTasks = await getDocs(collection(db, "tasks"));
  //     const docs = fetchTasks.docs.map((doc) => doc.data());
  //     console.log(docs);
  //   };
  // }, []);

  //FIX EVERYTHING ABOVE

  return (
    <div>
      <Navbar setLoggedIn={setLoggedIn} setUser={setUser} />
      {loggedIn ? (
        <>
          <ToDoEntry />
          {tasks.map((task) => (
            <ToDoCard key={task.timestamp} task={task} />
          ))}
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
