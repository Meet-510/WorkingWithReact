import React from "react";
import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "To do message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const TodoProvider = Todocontext.Provider;
