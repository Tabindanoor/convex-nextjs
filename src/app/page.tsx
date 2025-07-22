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

          {/* simpel */}
          
  {/* <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center">
  <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm w-full">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 font-sans">
      Welcome Back
    </h1>
    <p className="text-gray-500 mb-6 text-sm">
      Please sign in to continue to your dashboard
    </p>
    <button className="w-full bg-gradient-to-r animated-button from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95">
      Sign in to continue
    </button>
  </div>
</div> */}

<div className="min-h-screen relative bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center overflow-hidden">
  {/* Decorative floating shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 opacity-30 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300 opacity-30 rounded-full filter blur-2xl animate-pulse-slower"></div>

  <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm w-full animate-fade-slide z-10">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-3 font-sans tracking-wide">
      Welcome Back
    </h1>
    <p className="text-gray-500 mb-6 text-sm">
      Please sign in to continue to your dashboard
    </p>
    <button className="animated-button w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95 flex items-center justify-center gap-2 animate-button-glow">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
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
