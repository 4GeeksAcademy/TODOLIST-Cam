import React from "react";
import TodoList from "./Todolist";



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
