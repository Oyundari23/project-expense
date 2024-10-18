"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(categories)
        setCategories(data);
      });
  }
  useEffect(()=>{
    loadList();
  },[]);

  return (
    <div className="">
      <main className="">
        {categories.map((category) => (
        <div key={category.id} className="flex gap-4 mt-4"> 
          {category.name} 
        </div>
      ))}
      </main>

    </div>
  );
}


