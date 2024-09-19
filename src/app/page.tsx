"use client"
import Form from "@/components/Form";
import { useState } from "react";

type todoProps= {
  title:string;
  description:string;
  completed:boolean;
}
export default function Home() {
  const  [todo, setTodo] = useState<todoProps[]>([
    { title: "Task 1", description: "This is task 1", completed:false}
  ])

  //   const [title,setTitle] = useState<string>("")
  //   const [description,setDescription] = useState<string>("")
  
  //   const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     setTodo([...todo, {title, description, completed: false}])
  //     setTitle("")
  //     setDescription("")
  //   }

  return (
   <div>
        <div>
         { todo.map(({ title, description, completed},index)=>{
           return (
            <div key={index}>
              <span>{title} </span>
              <span>{description}</span>
              <input type="checkbox"
               checked={completed} 
              //  onChange={e=>setTodo(prev=> {
              //    return [...prev.slice(0,index), {...prev[index], completed:!prev[index].completed},...prev.slice(index+1)]
              //   })
              //  }
        
               onChange={()=>setTodo(todo.map((t,i)=>i===index?
                {...t, completed:!t.completed}:t ))} 
                />  
                completed: {completed? "Yes" : "No"}  
                
                <button onClick={()=>setTodo(todo.filter((_,i)=>i!==index))}>
                  Delete</button>
                    <br/>  <hr/>
              
            </div>
           )
         }) 

         }
        </div>


        {/* building the form  */}

         <div>
          <Form/>

          {/* <form action=""  onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input type="text"   value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter title"/>
            <label htmlFor="description">Description</label>
            <input type="text"  value={description} onChange={e=>setDescription(e.target.value)} placeholder="Enter description"/>
            <button type="submit">Submit</button>

          </form> */}
         </div>

   </div>
  );
}
