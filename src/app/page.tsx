"use client"

import Image from "next/image";

import {useState} from 'react'

const page = () => {
    const[task,settask] = useState("")
    const[addnewtask,setaddnewtask] = useState("")
    const[maintask,setmaintask] = useState([])

const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setmaintask([...maintask,{task}])

    console.log(maintask)

    settask("")
} 

const deleteHandler = (i: string) => {
 let copytask = [...maintask]
 copytask.splice(i,1)
 setmaintask(copytask)
}

let rendertask = <h2></h2>


    rendertask = maintask.map((t, i) =>{
    return(
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
    )
})

  return (
    <>
        <div className= "text-6xl pt-20 font-serif text-center text-pink-950">
            TO-DO LIST
        </div>

        <div className="pt-8">
            <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add a new task" value={task} onChange={(e) => { settask(e.target.value)
                   }}
                   className= "pl-4 rounded-xl bg-pink-200 w-96 h-12 "/>
            </form>

        </div>

        <div className= "pt-8"> 
            <button 
            onClick={() =>{
                submitHandler(e)
            }}
            className= "bg-amber-800 hover:bg-amber-600 rounded-full w-28 h-12 text-2xl font-serif shadow-2xl">
                Click
            </button>
        </div>

        <div className="text-amber-900 pt-10 font-serif text-4xl text-left pl-72">
            <ul>
                {rendertask}
            </ul>
        </div>  

        <footer className="pb-9 pt-9 align-text-bottom text-pink-950 align-text-bottom">
            Created by PALWASHA
        </footer>
    </>
  )
}

export default page

