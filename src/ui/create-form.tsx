"use client";
import { createToDo } from "@/lib/data";

export default function CreateForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    createToDo({ title });
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-2">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        className="peer block w-full rounded-md border border-gray-200 p-3 text-sm outline-2"
      />
      <button type="submit">Create To Do</button>
    </form>
  );
}
