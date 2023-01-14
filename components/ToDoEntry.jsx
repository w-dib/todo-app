import React from "react";
import { FaPaperPlane } from "react-icons/fa";
export default function ToDoCard() {
  return (
    <div className="flex mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <div className="flex-1">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Enter task here"
        />
      </div>
      <div className="flex items-center justify-end ml-3">
        <FaPaperPlane className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
}
