import { useState } from "react"
import { ListTask } from "./ListTask"


export const TodoApp = () => {

  const [newTask,setNewTask]= useState<string>('')
  const [listTask,setListTask] =useState<string[]>([])

  
  const handleAddTask =()=>{

    if(newTask.trim()==='')return
    setListTask(previousTask=> [...previousTask,newTask])
    setNewTask('')
  }

  const handleDeleteTask=(index : number)=>{

    setListTask(task => task.filter((_, i)=>i !== index))
  }
  return (
    <div>
        <h1>Lista de Tareas</h1>
    <div>
        <input 
            type="text" 
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            onKeyDown={(e)=>{
              if (e.key === 'Enter'){
                handleAddTask();
              }
            }}
            placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
    
    <ListTask listTask={listTask} deletetask={handleDeleteTask}></ListTask>
    </div>
  )
}