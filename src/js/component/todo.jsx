import React from "react";

export const Todo = ({ todo, deleteTodo }) => {
	return (
		<div className="d-flex justify-content-between todo animate__animated animate__bounceInRight ">
			{todo.name}
			<button
				type="button"
				className="btn-close float-right my-auto "
				aria-label="Close"
				onClick={() => {
					deleteTodo(todo.id);
				}}></button>
		</div>
	);
};
