import List from "@/ui/list";
import { ToastContainer } from "react-toastify";
export default async function Home() {
  return (
    <main className="flex flex-col items-center p-8">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl font-bold mb-6">To-Do App</h1>
      <List></List>
    </main>
  );
}
