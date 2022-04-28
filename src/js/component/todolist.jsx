import React from "react";
import { Todo } from "./todo.jsx";

export const ToDoList = ({ todos, deleteTodo, index, handleDelete, label }) => {
	return todos.map((todo, index) => {
		return (
			<Todo
				key={index}
				todo={todo}
				deleteTodo={deleteTodo}
				index={index}
				label={label}
			/>
		);
	});
};
