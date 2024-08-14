import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './jockSlice'
import { loder } from './loder'

const Jock = () => {
    const [userInput, setUserInput] = useState("")
    
   
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()

   
    const omClicks = (e) => {
        dispatch(fetchData(userInput))
       
     
        setUserInput("")
    

    }
    

    const available = [
        "animal",
        "career",
        "celebrity",
        "dev",
        "explicit",
        "fashion",
        "food",
        "history",
        "money",
        "movie",
        "music",
        "political",
        "religion",
        "science",
        "sport",
        "travel"
    ]


    return (
        <div className="total w-[100vw] h-[100vh] px-4 py-2 bg-gray-200   flex flex-col items-center">

            <h1 className='font-bold text-[32px] '>Random Jokes </h1>

            <div className='jock w-full flex rounded overflow-hidden max-w-[500px] mt-3   '>

                <input className='user-input w-full px-2 py-2 focus:outline-none ' value={userInput} onChange={(e) => setUserInput(e.target.value.toLocaleLowerCase())} type="text" placeholder='Enter Category' />

                <input type="submit" onClick={omClicks} className='btn bg-blue-500 px-2 py-2' value={`Get From ${userInput}`} />

            </div>



            {selector.jockes.lodding ?loder : <p className={`para mt-3   text-center font-semibold ${selector.jockes.catogory ? "text-red-500 " : "text-black "} ${selector.jockes.result?"text-[24px]" : "text-[16px]"}  `}>{selector.jockes.joke}</p>}

            <div className={`font-medium ${selector.jockes.lodding?"hidden":"flex"} ${selector.jockes.catogory ? "flex" : "hidden"} text-center   flex-wrap justify-center mt-1 text-[19px] text-blue-700`}>

                <p className=' font-semibold mr-2 text-black    text-center'>{`Available Lists are `} </p>

                {available.map((e, i) => (
                    <p onClick={()=>setUserInput(e)} className='text-[19px] cursor-pointer  ' key={i}>{available.length-1===i?`${e}.`:`${e},`}</p>

                ))}


            </div>

        </div>
    )
}

export default Jock