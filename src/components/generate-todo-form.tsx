"use client"
import { useState } from 'react'
import { useAction } from 'convex/react'
import { api } from '../../convex/_generated/api'

const Form = () => {


    const [prompt, setPrompt] =  useState('')
   
    const [loading, setLoading] = useState(false)
    const createTodo = useAction(api.action.createTodos)

    const submitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const todo = await createTodo({prompt})
            console.log(todo)
            setPrompt("")
        } catch (error) {
            
            console.error('Error creating todo:', error)

        }
        finally{
            setLoading(false)
        }
    
      }
if(loading){
    return         <div      className='mt-3 max-w-lg mx-auto flex flex-col gap-2'    >Loading</div>

 } else {
}

  return (
     <form onSubmit={submitForm}>
        <div      className='mt-3 max-w-lg mx-auto flex flex-col gap-2' 
           >
        <p>Generate Todo with the AI 🪄</p>
          <label className=' font-semibold ' htmlFor="prompt">Prompt</label>
          <input  
            className='p-1 w-full border-gray-300 border-2 rounded-lg'
            type="text"
            placeholder="Enter prompt"
            onChange={e=>setPrompt(e.target.value)} 
            value={prompt}/>

          
          <button 
                type="submit" 
                className='w-full font-bold text-gray-200 bg-blue-500 rounded-lg mt-2 p-1 border-2 border-gray-300'>
                  Create
          </button>
          </div>

        </form>

  )
}

export default Form