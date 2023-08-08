'use client';
import { useContext } from "react";
import { Context } from "@/common/context";


export default function Item(props: ItemProps) {

  const { id, title, description, completed } = props;

  const { markItemComplete, removeItem } = useContext(Context);

  const onClickHandler = (e: any) => {
    e.preventDefault();
    markItemComplete(id);
  };

  const deleteHandler = (e: any) => {
    e.preventDefault();
    removeItem(id);
  }

  return (
    <div
      key={id}
      className="w-full min-h-32 h-fit mb-4 p-4 border-black dark:border-white border-2 flex rounded-3xl drop-shadow-2xl"
      suppressHydrationWarning={true}
    >
      <div className="w-2/3 flex flex-col justify-center pr-3 break-words">
        <h1 className="text-xl text-bold mb-3">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center m-auto align-middle items-center">
        {completed ? (
          <>
            <p className="text-green-500 text-center">Completed</p>
            <button onClick={deleteHandler} className="border-0 text-red-500 text-center mt-3">Delete</button>
          </>
        ) : (
          <button
            className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl text-sm lg:text-md"
            onClick={onClickHandler}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}

export interface ItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
