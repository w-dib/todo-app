import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/fbconfig";

export default function ToDoEntry() {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        text: taskText,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <div className="flex-1">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Enter task here"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end ml-3">
        <FaPaperPlane
          className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
