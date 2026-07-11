import * as React from "react";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const Todo = () => {
  return <TodoList data={TODOS} />;
};

const TodoList = ({ data }) => {};
