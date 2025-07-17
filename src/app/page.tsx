"use client"
import Form from '@/components/Form'
import AIForm from '@/components/generate-todo-form'
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
          <AIForm/>
          <Form />
      </Authenticated>

      <Unauthenticated>
        <SignInButton>
        {/* <div className="flex items-center justify-center mx-auto mt-[5%]">
  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95">
    Sign in to continue
  </button>
</div> */}
<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center">
  <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm w-full">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 font-sans">
      Welcome Back
    </h1>
    <p className="text-gray-500 mb-6 text-sm">
      Please sign in to continue to your dashboard
    </p>
    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95">
      Sign in to continue
    </button>
  </div>
</div>


      
        </SignInButton>
      </Unauthenticated>


      
    </div>
  )
}

export default Home
