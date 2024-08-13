import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './jockSlice'

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
               
                <input className='user-input w-full px-2 py-2 focus:outline-none ' value={userInput} onChange={(e) => setUserInput(e.target.value.toLocaleLowerCase())} type="text" placeholder='Enter categoty' />
                <input type="submit" onClick={omClicks} className='btn bg-blue-500 px-2 py-2' value={`Get From ${userInput}`} />
            </div>
            <p className="para mt-3 text-[24px] text-center font-semibold ">{selector.jockes.joke}</p>
            <div className={`font-medium ${selector.jockes.catogory? "flex":"hidden"} text-center   flex-wrap justify-center mt-2 text-[19px] text-blue-700`}>
                <p className=' font-semibold mr-2 text-black    text-center'>{`Try This Category `} </p>
                {available.map((e,i)=>(
                    <p className='text-[19px] ' key={i}>{e},</p>

                ))}

           
            </div>
        </div>
    )
}

export default Jock