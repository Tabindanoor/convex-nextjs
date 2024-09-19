import React, { useState } from 'react'

type todoProps= {
    title:string;
    description:string;
    completed:boolean;
  }

const Form = ({onCreate}:todoProps) => {
    // const  [todo, setTodo] = useState<todoProps[]>([
    //     { title: "Task 1", description: "This is task 1", completed:false}
    //   ])
    
        const [title,setTitle] = useState<string>("")
        const [description,setDescription] = useState<string>("")
      
        const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setTodo([...todo, {title, description, completed: false}])
          setTitle("")
          setDescription("")
        }
    
  return (
    <div>
        <form action=""  onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input type="text"   value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter title"/>
            <label htmlFor="description">Description</label>
            <input type="text"  value={description} onChange={e=>setDescription(e.target.value)} placeholder="Enter description"/>
            <button type="submit">Submit</button>

          </form>
    </div>
  )
}

export default Form