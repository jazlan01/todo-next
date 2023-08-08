'use client';
import Router from "next/router";


export default function Item(props: ItemProps) {

  const { id, title, description, completed } = props;

  const onClickHandler = (e : any) => {
    e.preventDefault();
  };


  return (
    <div
      key={id}
      className="w-full min-h-32 h-fit mb-4 p-4 border-black dark:border-white border-2 flex rounded-3xl drop-shadow-2xl"
      suppressHydrationWarning={true}
    >
      <div className="w-2/3 flex flex-col justify-center pr-3">
        <h1 className="text-xl text-bold mb-3">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
      <div className="w-1/3 flex flex-col justify-center">
        {completed ? (
          <p className="text-green-500 text-center">Completed</p>
        ) : (
          <button
            className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl"
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
