import "./styles.css"
import {Todo}from "../../todo/index";

export const AllTodosPage = () =>{
    const todos=[
        {text: "walk my dog,", date: "10/10/2021", color:"blue", isComplete: false},
        {text: "workout,", date: "10/10/2021", color:"blue", isComplete: false},
        {text: "assignment,", date: "10/10/2021", color:"blue", isComplete: false},

    ]
    return (
        <div className="todos-container">
          {todos.map((todo)=><Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>)}
        </div>
    )
}