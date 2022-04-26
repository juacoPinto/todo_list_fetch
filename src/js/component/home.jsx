import React, { useState } from "react";
import { ToDoInput } from "./todoinput.jsx";
import { ToDoList } from "./todolist.jsx";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([
		{ id: 1, name: "Todo 1", complete: false },
	]);
	return (
		<>
			<h1 className="text-center">To Do List!</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="listContainer px-5 ">
							<ToDoInput />
							<ToDoList todos={todos} />
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
