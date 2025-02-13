import { generateNumericId } from "./utils";
import axios from "axios";
import { toDoType } from "./definitions";
export async function createToDo(data: { title: string }) {
  const newToDo: toDoType = {
    id: Number(generateNumericId()),
    title: data.title,
    userId: Number(generateNumericId()),
    completed: false,
  };
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", newToDo);
    return { success: true, data: newToDo };
  } catch (error) {
    return { success: false, error: `Error creating todo: ${error}` };
  }
}

export async function deleteToDo(id: number) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: `Error deleting todo: ${error}` };
  }
}
