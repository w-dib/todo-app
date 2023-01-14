// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ["latin"] });

import ToDoCard from "@/components/ToDoCard";
import ToDoEntry from "@/components/ToDoEntry";

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-4xl ">
        ✏️ Welcome to{" "}
        <span className="underline decoration-blue-500/30">
          Walid&apos;s to-do list!
        </span>
      </h1>
      <div className="mx-auto">
        <ToDoEntry />
        <ToDoCard />
      </div>
    </>
  );
}
