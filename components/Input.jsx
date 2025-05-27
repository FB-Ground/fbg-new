"use client"
import React from 'react'
import { HiOutlinePhotograph } from "react-icons/hi";
import { Button } from './ui/button';
function Input() {
  return (
    <div className='w-100  pt-20'>
      <textarea
        className='w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700 '
        placeholder='Whats happening' rows='2'>
      </textarea>
      <div className='flex items-center justify-between pt-2.5'>
        <HiOutlinePhotograph className='h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer' />
        <Button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 '>post</Button>
      </div>
    </div>
  )
}

export default Input