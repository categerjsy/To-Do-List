import React, { useState } from 'react'
import './ToDoList.css'

function ToDoList() {

    const [todo , setTodo] = useState("")
    const [todoList,setTodoList] = useState([])

    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    
    const AddTodo = () => {
        if(todo!=="")
        {
            const todoDetails = {
                id: Math.floor(Math.random()*1000),
                value: todo,
                isCompleted: false
            }

            setTodoList([...todoList,todoDetails])
        }
    }

    const deleteTodo = (e,id) => {
        e.preventDefault();
        setTodoList(todoList.filter((t) => t.id != id ))
    }

    const completeTodo = (e,id) => {
        e.preventDefault();
        const element = todoList.findIndex(elem => elem.id == id)
        const newTodoList =[...todoList]
        newTodoList[element]={
            ...newTodoList[element],
            isCompleted:true,
        }

        setTodoList(newTodoList)
    } 
    let counter=1;
    return (
        <div className="center">
            <div className="todoHeader">
                <h1>Your personal To-Do List</h1>
            </div>
        
            <input type="text" 
            name="text" 
            id="text"
            placeholder="Add task..."
            onChange={(e) => handleChange(e)} />
            <button className="addBtn" onClick={AddTodo}>Add</button>
            
            <div className="listContainer">
                { todoList!==[] ? 
                <ul>
                    {   todoList.map(t => 
                        <li key={t.id} className={t.isCompleted ? "holdText" : "listItem"}>
                        <div className="card">
                            <h2>{counter++}</h2>
                           <p>{t.value}</p> 
                        <div className="buttonsClass">
                        <button className="completedBtn" onClick={(e)=> completeTodo(e,t.id)}>Completed</button>
                        <button className="deleteBtn" onClick={(e)=> deleteTodo(e,t.id)}>Delete</button>
                        </div>
                        </div>
                       </li>
                    )}
                </ul>
                :null
                }
            </div>
        </div>

    )
}

export default ToDoList
