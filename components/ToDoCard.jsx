"use client";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../app/fbconfig";
export default function ToDoCard({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  ///EDITING TASKS
  const handleEdit = async () => {
    const docRef = doc(db, "tasks", task.id);
    await updateDoc(docRef, {
      text: editedText,
    });
    console.log("Document updated with ID: ", docRef.id);
    stopEditing();
  };

  function stopEditing() {
    setIsEditing(false);
    console.log("Finished editing");
  }
  ///END EDITING TASKS

  ///DELETING TASKS
  const handleDelete = async () => {
    const docRef = doc(db, "tasks", task.id);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docRef.id);
  };
  ///END DELETING TASKS

  ///CHECKING TASKS
  const handleCheck = async () => {
    const docRef = doc(db, "tasks", task.id);
    await updateDoc(docRef, {
      isChecked: !isChecked,
    });
    console.log("Document checked with ID: ", docRef.id);
  };

  return (
    <div className="flex relative mt-5 shadow-md rounded-lg p-4 max-w-xl mx-auto bg-white">
      <p className="top-1 mt-1 left-12 ml-1 absolute text-sm font-light text-slate-400">
        {task.timestamp}
      </p>

      <div className="mt-3 flex items-center justify-start">
        <input
          type="checkbox"
          className="w-6 h-6 items-center"
          onChange={() => {
            setIsChecked(!isChecked);
            handleCheck();
          }}
        />
      </div>

      {isEditing ? (
        <div className="flex-1 my-auto mt-3 justify-start ml-3">
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Edit task, then hit ↵"
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
          />
        </div>
      ) : (
        <div className="flex-1 my-auto mt-3 justify-start ml-3">
          <h3
            className={`text-lg font-medium ${isChecked ? "line-through" : ""}`}
          >
            {task.text}
          </h3>
        </div>
      )}

      <div className="flex items-center mt-3 justify-end ml-3">
        <FaPen
          onClick={() => setIsEditing(!isEditing)}
          className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
        />
        <FaTrash
          onClick={() => handleDelete()}
          className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer ml-3"
        />
      </div>
    </div>
  );
}
