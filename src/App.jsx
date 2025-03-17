import { useState } from 'react'
import './App.css'
import ParkForm from './components/ParkForm'
import { Navbar } from 'flowbite-react'


function App() {
  return (
    <div>
      <Navbar />
    <div className='flex items-center justify-center min-h-screen '>
     
      <div>
        <h1 className='py-10 text-center text-[40px] font-bold'>Ticket Information</h1>
        <div className='w-[500px] bg-gray-200 p-8 rounded-[10px]'>
          <ParkForm />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
