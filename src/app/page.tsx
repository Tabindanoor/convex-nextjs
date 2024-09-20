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
      <div className='max-w-lg mx-auto rounded-md justify-center p-3 mt-2 border-2 border-gray-300'>
        <div className='flex justify-between'>
        <div className='flex gap-3'>
        <div>
        <input 
              className='mt-5'
             type="checkbox" checked={completed}
              onChange={e=>onChangeCompleted(e.target.checked)}
            />
        </div>
        <div> 
        <h1  className='font-bold text-lg'>{title}</h1>
        <p>{description}</p>
        </div>
        </div>
        
        <button onClick={()=>onRemove()}
            className='font-semibold text-red-600' >
          Delete
          </button>

        </div>
        
           
           
           
                  {/* <span>{completed? "Yes":"NO"} </span> */}

                  {/* delete button for todo  */}
          </div>
    )
}