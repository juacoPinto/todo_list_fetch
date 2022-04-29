import React from "react";

export const Todo = ({ todo, deleteTodo, index, handleDelete, label, id }) => {
	return (
		<div className="d-flex justify-content-between todo animate__animated animate__bounceInRight ">
			{todo.label}
			<button
				type="button"
				className="btn-close float-right my-auto "
				aria-label="Close"
				onClick={() => {
					deleteTodo(id);
				}}></button>
		</div>
	);
};
