import React from "react";
import { Todo } from "./todo.jsx";

export const ToDoList = ({ todos, deleteTodo }) => {
	return todos.map((todo, index) => {
		return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
	});
};
