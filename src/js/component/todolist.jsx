import React from "react";
import { Todo } from "./todo.jsx";

export const ToDoList = ({ todos }) => {
	return todos.map((todo, index) => {
		return <Todo key={todo.id} todo={todo} />;
	});
};
