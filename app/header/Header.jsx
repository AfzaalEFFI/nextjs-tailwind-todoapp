"use client";
import Image from "next/image";
import React, { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const ctaSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      alert("please add your task first");
    } else {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };

  const ctaRemove = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className=" flex  flex-col-reverse md:flex-row lg:flex-row">
        <div className=" flex-1">
          <form onSubmit={ctaSubmit} className=" ">
            <div className=" flex flex-col  md:mt-48  text-lg">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add your Task"
                className=" w-72 m-auto px-12 py-2  rounded-md  md:w-2/3 text-lg bg-emerald-100 outline-none border-none   "
              />

              <button
                type="submit"
                className=" mt-6  m-auto px-20 py-2  rounded-full bg-emerald-600 text-white text-lg hover:bg-green-300 hover:text-black"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className=" flex-1 items-center justify-center">
          {/* <img src={todoimg} className="w-14 h-24 " alt="list-image" /> */}
          <Image
            src="/todo.png"
            width={400}
            height={400}
            objectFit="contain"
            className=" w-72  md:w-3/4 m-auto   mt-14 "
          />
        </div>
      </div>
      <div
        className=" hr w-2/3   m-auto my-6"
        style={{ height: "0.1px" }}
      ></div>
      <div className="h-72">
        <div className="bg-gray-50 w-2/3  items-center m-auto rounded-md  h-64 shadow-lg overflow-auto">
          <ul className=" m-auto">
            {todoList.map((todo, index) => (
              <li
                className="flex flex-col md:flex-row  items-center justify-center space-x-4 mt-4"
                key={index}
              >
                <li className="w-full  bg-emerald-100 rounded-md md:mt-4 md:w-2/3 px-8 py-2 text-lg ">
                  {todo}
                </li>
                <button
                  className="px-10 py-1 space-y-5  md:px-14 mt-3  rounded-full bg-emerald-600 text-lg text-white hover:bg-green-200 hover:text-black"
                  onClick={() => ctaRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
