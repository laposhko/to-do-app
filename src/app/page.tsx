import List from "@/ui/list";
import { fetchToDos } from "@/lib/data";
import CreateButton from "@/ui/create-btn";
export default async function Home() {
  const list = await fetchToDos();
  console.log(list);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>To-Do App</h1>
        <CreateButton></CreateButton>
        <List list={list}></List>
      </main>
    </div>
  );
}
