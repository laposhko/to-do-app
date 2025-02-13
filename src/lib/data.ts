import axios from "axios";

export async function fetchToDos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching todo:", error);
  }
}
