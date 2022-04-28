import React, { useState, useRef, useEffect } from "react";
import { ToDoInput } from "./todoinput.jsx";
import { ToDoList } from "./todolist.jsx";
import { v4 as uuidv4 } from "uuid";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	console.log(todos);
	const [todo, setTodo] = useState("");
	const toDoNameRef = useRef();
	const URL =
		"https://assets.breatheco.de/apis/fake/todos/user/santiagodeaguirre";
	useEffect(() => {
		getTodos();
	}, [todo]);

	const createUser = () => {
		fetch(URL, {
			method: "POST",
			body: JSON.stringify({
				// id: uuidv4(),
				// name: toDoNameRef.current.value,
				// complete: false,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	const sendTodos = async (result) => {
		const response = await fetch(URL, {
			method: "PUT",
			body: JSON.stringify(result),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
	};

	const getTodos = async () => {
		const response = await fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setTodos(data);
	};

	const addTodo = (e) => {
		if (todo === "") {
			return;
		}
		if (e.key === "Enter") {
			const task = {
				label: toDoNameRef.current.value,
				done: false,
			};
			sendTodos([...todos, task]);
			setTodo("");
			toDoNameRef.current.value = "";
		}
	};

	const deleteTodo = (i) => {
		const removeItem = todos.filter((todo, index) => {
			return index !== i;
		});
		setTodos(removeItem);
		sendTodos(removeItem);
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
								onChange={(e) => {}}
								placeholder="Add a To Do"
								onKeyPress={(e) => {
									addTodo(e);
									setTodo(e.target.value);
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
