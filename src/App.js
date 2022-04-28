import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import { useState } from "react";
import './style.css'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors",
      day: "feb 15th",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors",
      day: "feb 15th",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors",
      day: "feb 15th",
      reminder: true,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }

  return (
  <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title= {'Tasker'}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :('No Tasks to show')}
  </div>
  )}

export default App;
