"use client";
import { useState } from "react";
import { createToDo } from "@/lib/actions";
import { toDoType } from "@/lib/definitions";
import { generateNumericId } from "@/lib/utils";
import { toast } from "react-toastify";

type CreateFormProps = {
  setToDos: React.Dispatch<React.SetStateAction<toDoType[]>>;
};
export default function CreateForm({ setToDos }: CreateFormProps) {
  const [input, setInput] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const newToDoId = Number(generateNumericId());
    if (!title.trim()) return;
    setToDos((prevState) => [
      {
        id: newToDoId,
        userId: Number(generateNumericId()),
        title,
        completed: false,
      },
      ...prevState,
    ]);
    setInput("");
    const result = await createToDo({ title });
    if (!result.success) {
      setToDos((prev) => prev.filter((todo) => todo.id !== newToDoId));
      toast.error("Failed to add task. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-6">
      <input
        type="text"
        name="title"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        disabled={input.trim().length == 0}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 "
      >
        Add
      </button>
    </form>
  );
}
