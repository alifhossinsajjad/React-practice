import { useState } from "react"


function Sports() {
    const [runs = 0 , setRuns] = useState(0)
    const [sixes , setSixes] = useState(0)
    const [four , setFour] = useState(0)

    const handleSingle = () => {
        const newRuns = runs + 1 ;
        setRuns(newRuns);
    }

    const handleSix = () => {
        const newRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(newRuns);
    }

    const handleFour = () => {
        const newRuns = runs + 4
        const updateFour = four + 1;
        setFour(updateFour);
        setRuns(newRuns);
    }
  return (
    <div className='mt-10 space-y-8'>
      <div className='flex justify-center items-center space-x-8'>
        <h2>Runs : {runs} </h2>
        <p>Six : {sixes} </p>
        <p> Four : {four} </p>

      </div>

     <div className='flex justify-center items-center space-x-8'>
                
        <button onClick={handleSingle} className='bg-gray-600 font-bold p-6 rounded-xl hover:bg-gray-700 cursor-pointer hover:text-white '>Singles</button>
        <button onClick={handleSix} className='bg-gray-600 font-bold p-6 rounded-xl hover:bg-gray-700 cursor-pointer hover:text-white '>Six</button>
        <button onClick={handleFour} className='bg-gray-600 font-bold p-6 rounded-xl hover:bg-gray-700 cursor-pointer hover:text-white '>Four</button>
            </div>
    </div>
  )
}

export default Sports