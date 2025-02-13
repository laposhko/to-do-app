"use client";
import { ThreeDots } from "react-loader-spinner";
import { toDoType } from "@/lib/definitions";
import { deleteToDo } from "@/lib/actions";
import CreateForm from "./create-form";
import ListItem from "./list-item";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { fetchToDos } from "@/lib/data";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
export default function List() {
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchToDos,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteToDo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (oldTodos: toDoType[]) =>
        oldTodos.filter((todo) => todo.id !== id)
      );
      return { previousTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
      toast.error("Failed to delete task. Please try again.");
    },
  });
  const toggleComplete = (id: number) => {
    queryClient.setQueryData(
      ["todos"],
      todos.map((todo: toDoType) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  if (error) return <p>Error loading todos</p>;
  return (
    <>
      <CreateForm></CreateForm>
      {isLoading ? (
        <div className="mt-5">
          <ThreeDots color="#2196F3"></ThreeDots>
        </div>
      ) : (
        <ul className="mx-auto mt-10 space-y-4">
          {todos && todos.length > 0 ? (
            todos.map((item: toDoType) => (
              <ListItem
                key={item.id}
                item={item}
                handleDelete={() => deleteMutation.mutate(item.id)}
                toggleComplete={toggleComplete}
              ></ListItem>
            ))
          ) : (
            <p>No Tasks</p>
          )}
        </ul>
      )}
    </>
  );
}
