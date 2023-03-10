import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/fbconfig";

export default function ToDoEntry({user}) {
  const [taskText, setTaskText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        text: taskText,
        timestamp: new Date(),
        isChecked: false,
        userId:user.uid
      });
      console.log("Document written with ID: ", docRef.id);
      setTaskText("");
      setShowAlert(true)

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleDismiss = () => {
    setShowAlert(false);
  };

  return (
    <div className="relative flex mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <div className="flex-1">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Enter task here"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>
      <div className="flex items-center justify-end ml-3">
        <FaPaperPlane
          className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
      {showAlert && (
        <div className="bg-green-500 text-white p-3 rounded-lg absolute top-16 right-3 z-40">
          Task successfully submitted!
          <button
            className="ml-2 text-white text-sm font-medium"
            onClick={handleDismiss}
          >
            <span className="underline cursor-pointer">Dismiss</span>
          </button>
        </div>
      )}
    </div>
  );
}
