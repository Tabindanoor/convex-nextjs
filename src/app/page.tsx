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
              <TodoItem 
                    key={index}
                    title={title}
                    description={description} 
                    completed={completed}
                    onChangeCompleted={(newValue)=>{
                      setTodo(todo.map((item, i) => i === index? {...item, completed: newValue} : item))
                    }}

                    onRemove={()=>{
                      setTodo(todo.filter((item, i) => i!== index))
                    }}  

                />
            )
          })}

          <Form  
          onCreate={(title,description)=>{setTodo([...todo, {title, description, completed: false}]) }}
           />

     

    </div>
  )
}

export default Home


export const TodoItem=({title, description,completed, onChangeCompleted,onRemove}:
  {
    title: string,
    description: string,
    completed: boolean,
    onChangeCompleted: (newValue:boolean) => void,
    onRemove : () => void
  })=>{
    return (
      <div>
     
     <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <input  type="checkbox" checked={completed}
              onChange={e=>onChangeCompleted(e.target.checked)}
            />
           
                  <span>{completed? "Yes":"NO"} </span>

                  {/* delete button for todo  */}
                  <button onClick={()=>onRemove()}>delete</button>
          </div>
      </div>
    )
}