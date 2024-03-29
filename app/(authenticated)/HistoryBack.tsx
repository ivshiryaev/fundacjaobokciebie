'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosArrowRoundBack } from "react-icons/io";

function HistoryBack() {
	const router = useRouter()

	return (
		<button 
			className='
				hover:shadow-xl hover:bg-white hover:text-primary 
				transition 
				text-white bg-primary 
				w-[2.5rem] h-[2.5rem] rounded-full
				text-[1.25rem]
				flex justify-center items-center
			' 
			onClick={()=>router.back()}>
		<IoIosArrowRoundBack size={24}/></button>
	)
}

export default HistoryBack