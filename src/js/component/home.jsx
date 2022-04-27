import React, { useState, useRef } from "react";
import { ToDoInput } from "./todoinput.jsx";
import { ToDoList } from "./todolist.jsx";
import { v4 as uuidv4 } from "uuid";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const toDoNameRef = useRef();
	const handleAddToDo = (e) => {
		const name = toDoNameRef.current.value;
		if (name == "") return;
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{ id: uuidv4(), name: name, complete: false },
			];
		});

		toDoNameRef.current.value = null;
		console.log(todos);
	};
	const deleteTodo = (id) => {
		const removeItem = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(removeItem);
	};
	return (
		<>
			<h1 className="text-center">To Do List!</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="listContainer px-5 ">
							<input
								ref={toDoNameRef}
								type="text"
								name=""
								id=""
								placeholder="Add a To Do"
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										handleAddToDo();
									}
								}}
							/>

							<ToDoList todos={todos} deleteTodo={deleteTodo} />
							<div className="itemsLeft">
								{todos.length} items left
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
