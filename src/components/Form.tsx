import React, { useState } from 'react'
type myProps={
    onCreate : (title:string,description:string) => void

}

const Form = ({onCreate}:myProps) => {
    const [title, setTitle] =  useState('')
    const [description, setDescription] = useState('')

    const submitForm=(e:React.FormEvent)=>{
        e.preventDefault()
        if(title && description){
          onCreate(title, description)
          setTitle("")
          setDescription("")
        }else{
          alert("Please fill all fields")
        }
      }


  return (
   
        

        <form onSubmit={submitForm}>
        <div      className='mt-3 max-w-lg mx-auto flex flex-col gap-2'    >
          <label className=' font-semibold ' htmlFor="title">Title</label>
          <input  
            className='p-1 w-full border-gray-300 border-2 rounded-lg'
            type="text"
            placeholder="Enter title"
            onChange={e=>setTitle(e.target.value)} 
            value={title}/>

          <label className='font-semibold'  htmlFor="description">Description</label>
          <input type="text"
                className='p-1 w-full border-gray-300 border-2 rounded-lg'
                placeholder="Enter description"
                onChange={e=>setDescription(e.target.value)}
                value={description} />
          <button 
                type="submit" 
                className='w-full font-bold text-gray-200 bg-blue-500 rounded-lg mt-2 p-1 border-2 border-gray-300'>
                  Add Todo
          </button>
          </div>

        </form>

  )
}

export default Form