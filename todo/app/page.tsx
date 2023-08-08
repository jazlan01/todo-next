import ItemList from "@/components/list";
import Link from "next/link";
import { ContextProvider } from "@/common/context";

export default function Home() {

  return (
    <>
    <div className="p-8 pt-8 pb-24 dark:text-white dark:bg-black text-black w-screen h-screen overflow-scroll">
      <header className="flex justify-between items-center mb-6 ">
        <h1 className="text-4xl">Tasks</h1>
        <Link href="/new" className="border-2 border-black dark:border-slate-400 rounded-2xl px-4 py-2 hover:bg-cyan-600 dark:drop-shadow-2xl dark:shadow-slate-400">Create New</Link>
      </header>
      <main className="flex flex-col justify-between h-full " >
        <ContextProvider>
          <ItemList />
        </ContextProvider>
      </main>
    </div>
    </>
  )
}
