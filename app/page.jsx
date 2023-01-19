"use client";
import ToDoEntry from "@/components/ToDoEntry";
import ToDoCard from "@/components/ToDoCard";
import Navbar from "@/components/Navbar";
import { db } from "../app/fbconfig";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      setTasks(
        QuerySnapshot.docs.map((task) => ({
          ...task.data(),
          id: task.id,
          timestamp: task.data().timestamp?.toDate().toDateString(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Navbar setLoggedIn={setLoggedIn} setUser={setUser} />
      {loggedIn ? (
        <>
          <ToDoEntry user={user}/>
          {tasks.filter((task) => task.userId === user.uid).map((task) => (
            <ToDoCard key={task.id} task={task} />
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
