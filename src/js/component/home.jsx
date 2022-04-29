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
		}).then((response) => response.json());
		// .then((json) => console.log(json));
	};

	const sendTodos = (result) => {
		const response = fetch(URL, {
			method: "PUT",
			body: JSON.stringify(result),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			console.log(response);
			return response.json();
		});
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
			// setTodos([...todos, task]);
			setTodo("");
			toDoNameRef.current.value = "";
		}
	};

	// const deleteTodo = (label) => {
	// 	const removeItem = todos.filter((todo) => {
	// 		return todo.label !== label;
	// 	});
	// 	if (todos.length === 1) {
	// 		console.log("almost there");
	// 		handleReset(todo);
	// 		// createUser();
	// 	}
	// 	sendTodos(removeItem);
	// 	setTodos(removeItem);
	// 	console.log(removeItem);
	// };

	const deleteTodo = (id) => {
		const removeItem = todos.filter((e, index) => index !== id);
		sendTodos(removeItem);
		setTodos(removeItem);
	};

	const resetUser = (url, options = {}) => {
		fetch(url, options).then((response) => {
			console.log(response);
			return response.json();
		});
	};
	const handleReset = (todo) => {
		let label = todo.label;
		let options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		};
		resetUser(URL, label, options);
		createUser();
	};

	return (
		<>
			<h1 className="text-center">To Do List!</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="listContainer px-5 ">
							<input
								onChange={(e) => {
									setTodo(e.target.value);
								}}
								ref={toDoNameRef}
								type="text"
								placeholder="Add a To Do"
								onKeyPress={(e) => {
									addTodo(e);
								}}
							/>
							<ToDoList
								todos={todos}
								deleteTodo={deleteTodo}
								label={todo.label}
							/>
							<div className="itemsLeft">
								{todos.length} items left
							</div>
							<button
								onClick={() => {
									handleReset(todo);
								}}>
								DELETE ALL
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
