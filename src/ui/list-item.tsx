import { toDoType } from "@/lib/definitions";
type ListItemProps = {
  item: toDoType;
  handleDelete: (id: number) => void;
  toggleComplete: (id: number) => void;
};
export default function ListItem({
  item,
  handleDelete,
  toggleComplete,
}: ListItemProps) {
  return (
    <li
      key={item.id}
      className="flex w-sm sm:w-xl lg:w-3xl items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200"
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
      />
      <p
        className={`text-sm he sm:text-lg lg:text-2xl p-2   ${
          item.completed ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {item.title}
      </p>
      <button
        className="text-sm sm:text-lg lg:text-2xl  px-3 py-1 text-white bg-red-600 hover:bg-red-700 rounded-md"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
}
