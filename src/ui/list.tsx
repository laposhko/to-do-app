"use client";
import { toDoType } from "@/lib/definitions";
import { MdDoneOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { deleteToDo } from "@/lib/data";
export default function List({ list }: { list: toDoType[] }) {
  function handleDelete(id: number) {
    console.log(id);
    deleteToDo(id);
  }
  return (
    <ul className="flex flex-col gap-3">
      {list &&
        list.map((item) => (
          <li
            key={item.id}
            className="flex justify-between gap-2 items-center border-2 p-2"
          >
            <p>{item.title}</p>
            <div>
              <span>
                {item.completed ? (
                  <MdDoneOutline color="green" />
                ) : (
                  <GrInProgress color="red" />
                )}
              </span>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}
