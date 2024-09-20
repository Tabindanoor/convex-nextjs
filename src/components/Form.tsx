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
    <div>
        

        <div >
        <form onSubmit={submitForm}>
          <label htmlFor="title">Title</label>
          <input  
              type="text"
              placeholder="Enter title"
             onChange={e=>setTitle(e.target.value)} 
             value={title}/>
          <label htmlFor="description">Description</label>
          <input type="text"
           placeholder="Enter description"
          onChange={e=>setDescription(e.target.value)}
            value={description} />
          <button type="submit">Add Todo</button>
        </form>
      </div>

    </div>
  )
}

export default Form