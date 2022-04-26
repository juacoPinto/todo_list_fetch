import React from "react";

export const Todo = ({ todo }) => {
	return (
		<div className="d-flex justify-content-between">
			{todo.name}{" "}
			<button
				type="button"
				className="btn-close float-right my-auto"
				aria-label="Close"></button>
		</div>
	);
};
