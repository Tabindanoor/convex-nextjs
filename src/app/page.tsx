"use client"
import Form from '@/components/Form'
import { title } from 'process'
import  { useState } from 'react'

type  myProps= {
  title : string,
  description : string,
  completed:boolean 
}
const Home = () => {
    const [todo, setTodo] = useState<myProps[]>([
      {title: 'Task 1', description: 'Description 1', completed: false},
    ])

  return (
    <div>
      {todo.map(({title, description, completed},index)=>{
        return (
          <div key={index} >
            <h1>{title}</h1>
            <p>{description}</p>
            <input  type="checkbox" checked={completed}
              onChange={(e)=>setTodo( todo.map((item, i) => i === index ? {...item, completed: e.target.checked} : item)

              )}
            />
           
                  <span>{completed? "Yes":"NO"} </span>

                  {/* delete button for todo  */}
                  <button onClick={()=>setTodo(todo.filter((item, i) => i !== index))}>delete</button>
          </div>
        )
      })}

                    <Form  onCreate={(title,description)=>{
                      setTodo([...todo, {title, description, completed: false}])
                    }} />

     

    </div>
  )
}

export default Home