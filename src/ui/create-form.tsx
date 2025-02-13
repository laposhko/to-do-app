"use client";
import { useState } from "react";
import { createToDo } from "@/lib/actions";
import { toDoType } from "@/lib/definitions";
import { generateNumericId } from "@/lib/utils";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoCreateOutline } from "react-icons/io5";

export default function CreateForm() {
  const [input, setInput] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createToDo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (oldTodos: toDoType[]) => [
        newTodo,
        ...oldTodos,
      ]);

      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
      toast.error("Failed to add task. Please try again.");
    },
  });
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    if (!title.trim()) return;
    const newToDo: toDoType = {
      id: Number(generateNumericId()),
      userId: Number(generateNumericId()),
      title,
      completed: false,
    };
    mutation.mutate(newToDo);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-6 mt-6">
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
        className="p-3 disabled:text-amber-300 hover:scale-110 cursor-pointer"
      >
        <IoCreateOutline
          color={input.trim().length === 0 ? "gray" : "black"}
          size="40px"
        ></IoCreateOutline>
      </button>
    </form>
  );
}
