import List from "@/ui/list";
import { fetchToDos } from "@/lib/data";
import { ToastContainer } from "react-toastify";
export default async function Home() {
  const list = await fetchToDos();

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="min-h-screen flex flex-col items-center p-6">
        <ToastContainer></ToastContainer>
        <h1 className="text-3xl font-bold mb-6">To-Do App</h1>
        <List list={list}></List>
      </main>
    </div>
  );
}
