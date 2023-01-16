"use client";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
export default function ToDoCard({ task }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <div className="w-10 h-10 flex items-center justify-start">
        <input
          type="checkbox"
          className="w-6 h-6"
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
      <div className="flex-1 my-auto justify-start ml-3">
        <h3
          className={`text-lg font-medium ${isChecked ? "line-through" : ""}`}
        >
          Task Title Here
        </h3>
      </div>
      <div className="flex items-center justify-end ml-3">
        <FaPen className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <FaTrash className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer ml-3" />
      </div>
    </div>
  );
}
