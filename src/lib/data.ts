import axios from "axios";
import { nanoid } from "nanoid";
import { toDoType } from "./definitions";
//fetching functions
export async function fetchToDos() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  console.log(response.data);
  return response.data;
}

export async function deleteToDo(id: number) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log("Deleted:", response.data); // JSONPlaceholder returns an empty object {}
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return null;
  }
}

export async function createToDo(data: { title: string }) {
  const newToDo: toDoType = {
    id: Number(nanoid()),
    title: data.title,
    userId: Number(nanoid()),
    completed: false,
  };
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newToDo
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.log(error);
  }
}
