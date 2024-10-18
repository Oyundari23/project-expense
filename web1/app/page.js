"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  useEffect(()=>{
    loadList();
  },[]);

  return (
    <div className="">
      <main className="" key={categories.name}>
        {categories.map((category)=> {category.name})}
      </main>

    </div>
  );
}


