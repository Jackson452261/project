import React from 'react'
import { IoIosSearch } from "react-icons/io";
const RInput = () => {
  return (
    <div className='flex justify-center'>
        <input placeholder="搜尋租屋..." className='bg-slate-100 w-5/12 rounded-3xl h-14 border-2 border-zinc-300' > 
         
        </input>
        <IoIosSearch className='text-5xl'/>
       
    </div>
  )
}

export default RInput