"use client";
import { useState } from "react";
import { toDoType } from "@/lib/definitions";
import { deleteToDo } from "@/lib/actions";
import CreateForm from "./create-form";
import ListItem from "./list-item";
import { toast } from "react-toastify";
export default function List({ list }: { list: toDoType[] }) {
  const [todos, setTodos] = useState(list);

  async function handleDelete(id: number) {
    const prevTodos = todos;
    setTodos(todos.filter((todo) => todo.id !== id));
    const result = await deleteToDo(id);
    if (!result.success) {
      setTodos(prevTodos);
      toast.error("Failed to delete task. Please try again.");
    }
  }
  function toggleComplete(id: number) {
    console.log("toggle");
    console.log(todos);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <>
      <CreateForm setToDos={setTodos}></CreateForm>
      <ul className="mx-auto mt-10 space-y-4">
        {todos.length > 0 ? (
          todos.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              toggleComplete={toggleComplete}
            ></ListItem>
          ))
        ) : (
          <p>No To Dos</p>
        )}
      </ul>
    </>
  );
}
