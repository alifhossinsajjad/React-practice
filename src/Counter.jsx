import React, { useState } from 'react'

export default function Counter() {
  const [count , setCount] = useState(0)

    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
  return (
    <div className='flex  gap-5 justify-center items-center mt-22'>
        <h3>Count : {count} </h3>
        <button onClick={handleCount} className='bg-gray-600 p-5 rounded-xl cursor-pointer hover:text-white'>Count</button>
    </div>
  )
}
