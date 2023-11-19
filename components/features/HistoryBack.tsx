'use client'

import { IoIosArrowRoundBack } from "react-icons/io"
import { useRouter } from 'next/navigation'

function HistoryBack() {
	const router = useRouter()

	return (
		<button 
			className='fixed bottom-[1rem] left-[1rem] lg:hidden'
			onClick={()=>router.back()}
		>
			<span className='
				shadow-md
				lg:hidden
				text-primary
				bg-white
				w-[56px] h-[56px] 
				flex justify-center items-center 
				rounded-full
				text-[2rem]
			'>
				<IoIosArrowRoundBack/>
			</span>
		</button>
	)
}

export default HistoryBack