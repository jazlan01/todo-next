'use client';
import { useContext } from "react";
import Item, { ItemProps } from "./item";
import { Context } from "@/common/context";

export default function ItemList() {
  const { items, clearItems } = useContext(Context);

  return (
      <div className="h-full w-full flex flex-col justify-center align-middle">
        <div className="w-full h-3/4 m-auto overflow-x-scroll pr-4">
            {items.map((task: ItemProps) => {
              return <Item key={task.id} {...task} />;
            })}
        </div>
        <div className="m-5 h-12 max-w-48 text-center">
          <button
            onClick={clearItems}
            className="w-full lg:w-64 lg:text-2xl h-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-3xl"
          >
            Clear All
          </button>
          <p className="text-sm mt-2">
            All tasks are automatically deleted in 60 days
          </p>
        </div>
      </div>
  );
}
