import { use, useState } from "react";
import './ToDo.css'

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const taskList = tasks.map((task, index) => {
        return (
            <>
            <div className="task-item">
                <li className="li-item" key={index}>{task}</li>
                <button className="delete-btn" onClick={() => deleteHandler(index)}>Delete</button>
                <br />
            </div>
            </>
        )
    })

    const newTaskHandler = (e) => {
        setNewTask(n => e.target.value);
    }

    const addTask = () => {
        if(newTask.trim()=="") return;
        setTasks(t => [newTask, ...t]);
        setNewTask("");
    }

    const deleteHandler = (index) => {
        setTasks(t => t.filter((_,i) => {
            return i!== index;
        }))
    }

    return(
        <>
        <div className="container">
            <h2>To Do App</h2>
            <div className="input-container">
                <input className="taskInput" type="text" placeholder="Enter task..."
                onChange={(e) => newTaskHandler(e)} value={newTask}/>
            <button className="addTask-btn" onClick={addTask}>Add Task</button>
            </div>
            <h3 className="tasks-heading">Tasks</h3>
            {tasks.length===0 ? <p><b>Your task list is empty</b></p> : 
            <ul>{taskList}</ul>}
        </div>
        </>
    )
}
export default ToDo;