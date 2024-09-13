"use client"

import { time } from "console";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./components/header";

interface Data {
  id: number;
  title: string;
  body: string;
}

export default function Home() {

  const [data, setData] = useState<Data[]>([]);
  const [firstName, setFirstName] = useState<string>("Guy");
  const [lastName, setLastName] = useState<string>("Pstc");

  const myPlusFunction = (num1: number, num2: number) => {

  }

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch(error) {
        console.error("Error fetchData data: ", error);
      }
    }

    fetchData();
  }, [])



  return (
    <main>
      <Header title="Next.js + TypeScript"/>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
