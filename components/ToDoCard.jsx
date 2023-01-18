"use client";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
export default function ToDoCard({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  function handleEdit(){
    setIsEditing(true)
    console.log("Started editing")
  } 

  function stopEditing(){
    setIsEditing(false)
    console.log("Finished editing")
  }
  return (
    <div className="flex relative mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <p className="top-1 mt-1 left-12 ml-1 absolute text-sm font-light text-slate-400"> {task.timestamp}</p>

      <div className="mt-3 flex items-center justify-start">
        <input
          type="checkbox"
          className="w-6 h-6 items-center "
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>



{isEditing ? (
  <div className="flex-1 my-auto mt-3 justify-start ml-3">
  <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Enter task here"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              stopEditing();
            }
          }}/>
  </div>
) :
     (<div className="flex-1 my-auto mt-3 justify-start ml-3">
        <h3
          className={`text-lg font-medium ${isChecked ? "line-through" : ""}`}
        >
          {task.text}
        </h3>
      </div>)}


      <div className="flex items-center mt-3 justify-end ml-3">
        <FaPen onClick={handleEdit} className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <FaTrash className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer ml-3" />
      </div>
    </div>
  );
}
