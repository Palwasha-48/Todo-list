"use client"

import { useState } from "react"


const File = () => {
    const [task,setTask] = useState("")
    const [maintask,setMaintask] = useState<{ task: string }[]>([])

const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setMaintask([...maintask , { task }])

    console.log(maintask)

    setTask("")
} 

const deleteHandler = (i: number) => {
 const copyTask = [...maintask]
 copyTask.splice(i,1)
 setMaintask(copyTask)
}


const renderTask = maintask.map((t, i) =>(
        <li key={i}>
        <div>
            <h3>{t.task}</h3>
        </div>

        <button onClick = {() => {
            deleteHandler(i)
        }}
            className="text-xs bg-rose-950 w-12 h-6 text-white">
            Delete
        </button>
        </li>
    
    ))

return (
    <>
        <div className= "text-6xl pt-20 font-serif text-center text-pink-950">
            TO-DO LIST
        </div>

        <div className="pt-8">
            <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className= "pl-4 rounded-xl bg-pink-200 w-96 h-12 "/>
            </form>

        </div>

        <div className= "pt-8"> 
            <button type="submit"
            className= "bg-amber-800 hover:bg-amber-600 rounded-full w-28 h-12 text-2xl font-serif shadow-2xl">
                Click
            </button>
        </div>

        <div className="text-amber-900 pt-10 font-serif text-4xl text-left pl-72">
            <ul>
                {renderTask}
            </ul>
        </div>  

        <footer className="pb-9 pt-9 align-text-bottom text-pink-950">
            Created by PALWASHA
        </footer>
    </>
  )
}

export default File

