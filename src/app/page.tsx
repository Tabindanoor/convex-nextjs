


"use client"
import Form from '@/components/Form'
import { TodoList } from '@/components/TodoItem'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated } from 'convex/react'


const Home = () => {


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
