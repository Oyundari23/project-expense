"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  useEffect(() => {
    loadList();
  }, []);

  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  return (
    <main>
      {categories.map((category) => (
        <div key={category.age}>{category.name}</div>
      ))}

      <button onClick={createNew} className="bg-blue-200 rounded-lg h-7 px-1 ">add new</button>
    </main>
  );
}
