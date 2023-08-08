import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/common/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do App",
  description:
    "An app for maintaining a list of tasks to do. All done locally on your system.",
};

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} container w-screen h-screen text-white dark:text-black`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
