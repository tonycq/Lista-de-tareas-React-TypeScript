import { Task } from "./Task"

type ListTask = {
    listTask :string []
    deletetask:(index:number)=>void
}

export const ListTask = ({listTask, deletetask}: ListTask) => {
  return (
    <div className="taskList">
        {listTask.map((task,index)=>(
            <Task key={index} task={task} deleteTask={()=>deletetask(index)}></Task>
        )
    )}
    </div>
  )
}