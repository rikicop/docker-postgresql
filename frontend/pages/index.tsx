//import Head from "next/head";
//import Image from "next/image";
//import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";

//const inter = Inter({ subsets: ["latin"] });

import InputTodo from "@/components/InputTodo";
import ListTodos from "@/components/ListTodos";

export default function Home() {
  return (
    <>
      {/* InputTodo Container */}
      <div className="mx-auto max-w-md px-2">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}
