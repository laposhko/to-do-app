import axios from "axios";
import { toDoType } from "./definitions";
export async function createToDo(data: toDoType) {
  await axios.post("https://jsonplaceholder.typicode.com/todos", data);
}

export async function deleteToDo(id: number) {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
