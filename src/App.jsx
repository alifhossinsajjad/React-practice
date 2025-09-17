import { useState } from 'react'

import './App.css'
import Counter from './counter'


function App() {


  function handleClick() {
    alert("i am click")
  }

  function handlePressMe () {
    alert('i am press')
  }

  const handleAdd = (num) => {
    const number = num + 1;
    alert(number);
  }

  return (
    <>

      <h1 className='flex justify-center items-center text-6xl text-red-500 font-bold mt-21'>Vite + React</h1>

      <div className='flex justify-center items-center gap-20 rounded-xl border-gray-600  shadow-2xl w-8/12 mx-auto mt-20 h-30'>
        <button onClick={handleClick} className='bg-gray-600 p-4 rounded-3xl text-white hover:bg-blue-500 transform-3d cursor-pointer'>Click Me</button>
        <button onClick={handlePressMe} className='bg-red-600 p-4 rounded-3xl text-white hover:bg-blue-500 transform-3d cursor-pointer'>Press Me</button>
        <button onClick={() => {handleAdd(5)}}  className='bg-green-600 p-4 rounded-3xl text-white hover:bg-blue-500 transform-3d cursor-pointer'>Add Me</button>

      </div>

      
        
    </>
  )
}

export default App
