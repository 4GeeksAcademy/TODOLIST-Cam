import React from "react";
import TodoList from "./Todolist";
import "../../styles/style.css"


//create your first component
const Home = () => {
	return (

		
		<div className="text-center"><h1 className="text-center danger">
				ToDoList
			</h1>
			<TodoList
			/>
        
			

		</div>
	);
};

export default Home;
