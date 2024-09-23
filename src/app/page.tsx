// "use client"
// import Form from '@/components/Form'
// import  { useState } from 'react'
// import { api } from '../../convex/_generated/api'
// import { useMutation, useQuery } from 'convex/react'
// import { Id } from '../../convex/_generated/dataModel'
// import { deleteTodo } from '../../convex/functions'

// const Home = () => {
  
//     const deleteTodo= useMutation(api.functions.deleteTodo)
//     const todo = useQuery(api.functions.getTodos)
//     const updateTodo = useMutation(api.functions.updateTodo)
//   return (
//     <div>
//           {todo?.map(({_id,title, description, completed},index)=>{
//             return (
//               <TodoItem 
//                     key={_id}
//                     id={_id}
//                     title={title}
//                     description={description} 
//                     completed={completed}
//                     onChangeCompleted={(newValue)=>{
//                       updateTodo({id:_id,    completed: newValue  })
//                     }}
//                     onRemove={()=>{
//                       deleteTodo({id:_id})
//                     }}
//                     // onChangeCompleted={(newValue)=>{
//                     //   setTodo(todo.map((item, i) => i === index? {...item, completed: newValue} : item))
//                     // }}

//                     // onRemove={()=>{
//                     //   setTodo(todo.filter((item, i) => i!== index))
//                     // }}  

//                 />
//             )
//           })}

//           <Form  
//           // onCreate={(title,description)=>{setTodo([...todo, {title, description, completed: false}]) }}
//            />

//     </div>
//   )
// }

// export default Home


// export const TodoItem=({id,title, description,completed, onChangeCompleted,onRemove}:
//   {   
//     id:Id<"tasks">,
//     title: string,
//     description: string,
//     completed: boolean,
//     onChangeCompleted: (newValue:boolean) => void,
//     onRemove : () => void
//   })=>{

//     const updateTodo= useMutation(api.functions.updateTodo)
//     return (
//       <div className='max-w-lg mx-auto rounded-md justify-center p-3 mt-2 border-2 border-gray-300'>
//         <div className='flex justify-between'>
//         <div className='flex gap-3'>
//         <div>
//         <input 
//               className='mt-5'
//              type="checkbox" checked={completed}
//               // onChange={e=>updateTodo({id, completed: e.target.checked})}
//               onChange={e=>onChangeCompleted(e.target.checked)}
//             />
//         </div>
//         <div> 
//         <h1  className='font-bold text-lg'>{title}</h1>
//         <p>{description}</p>
//         </div>

//         </div>
//         <button
//          onClick={() => onRemove()} 
//         //  onClick={() => deleteTodo({id})} 
//          className="font-semibold text-red-600">
//             Delete
//           </button>
        
//         {/* <button onClick={()=>onRemove()}
//             className='font-semibold text-red-600' >
//           Delete
//           </button> */}

//         </div>
        
           
           
           
//                   {/* <span>{completed? "Yes":"NO"} </span> */}

//                   {/* delete button for todo  */}
//           </div>
//     )
// }



"use client"
import Form from '@/components/Form'
import { TodoList } from '@/components/TodoItem'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated } from 'convex/react'

// import { useMutation, useQuery } from 'convex/react'
// import { api } from '../../convex/_generated/api'
// import { TodoItem } from '@/components/TodoItem'

// const TodoList=()=>{
//   const deleteTodo = useMutation(api.functions.deleteTodo)
//   const todo = useQuery(api.functions.getTodos)
//   const updateTodo = useMutation(api.functions.updateTodo)
//   return(
//     <div>
//     {todo?.map(({ _id, title, description, completed }) => (
//       <TodoItem
//         key={_id}
//         id={_id}
//         title={title}
//         description={description}
//         completed={completed}
//         onChangeCompleted={(newValue) => updateTodo({ id: _id, completed: newValue })}
//         onRemove={() => deleteTodo({ id: _id })}
//       />
//     ))}
//     </div>
//   )
// }

const Home = () => {
  // const deleteTodo = useMutation(api.functions.deleteTodo)
  // const todo = useQuery(api.functions.getTodos)
  // const updateTodo = useMutation(api.functions.updateTodo)

  return (
    <div>
      <Authenticated> 
        <div className="flex justify-between max-w-lg mx-auto ">
            <p className='text-2xl text-zinc-900 font-semibold text-center mt-2'>Todo List</p>
            <UserButton/>
        </div> 
          <TodoList/>
          <Form />
      </Authenticated>

      <Unauthenticated>
        <SignInButton>
        <div className="flex items-center justify-center mx-auto mt-[5%]">
            <button className="bg-blue-600 font-bold font-serif text-gray-100 rounded-lg p-3 shadow-2xl border-blue-300 border-4">
              Sign in to continue
            </button>
        </div>
      
        </SignInButton>
      </Unauthenticated>


      
    </div>
  )
}

export default Home
