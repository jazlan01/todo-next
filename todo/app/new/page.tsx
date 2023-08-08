'use client';
import { Context } from "@/common/context";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function NewItem() {

  const router = useRouter();

  const { addItem } = useContext(Context);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onClickHandler = () => {
    console.log(title, description);
    addItem(title, description);
    router.push('/');
  }

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="p-8 pt-8 pb-24 dark:text-white dark:bg-black text-black w-screen h-screen overflow-scroll">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl lg:text-4xl">Add a new task</h1>
          <Link href="/" className="text-md lg:text-lg border-2 border-black dark:border-slate-400 rounded-2xl px-4 py-2 hover:bg-cyan-600 dark:drop-shadow-2xl dark:shadow-slate-400">Go Back</Link>
        </header>
        <main className="flex flex-col justify-between h-full pt-6">
          <form className="flex flex-col h-fit items-center">
            <span className="text-2xl mr-4 mb-2">Title</span> <input type="text" name="title" id="title" className="w-fit lg:w-96 border-2 border-black rounded-2xl h-12 mb-6 p-4 dark:border-white dark:bg-black" onChange={onTitleChange} /> <br />
            <span className="text-2xl mr-4 mb-2 align-top">Description</span> <textarea name="description" id="description" className="w-max lg:w-5/12 border-2 border-black rounded-2xl h-24 p-4 dark:bg-black dark:border-white" onChange={onDescriptionChange} /> <br />
            <button type="button" className="h-14 w-36 border-2 border-black rounded-3xl text-xl hover:bg-slate-300 dark:bg-white dark:text-black" onClick={onClickHandler}>Add</button>
          </form>
        </main>
      </div>
    </>
  );
}
