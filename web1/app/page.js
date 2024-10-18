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
    <div className="">
      <main className="">
        <button onClick={createNew}>  Add new </button>
        {categories.map((category) => (
          <div key={category.id} className="flex gap-4 mt-4">
            {category.name}
          </div>
        ))}


      </main>

    </div>
  );
}


