import React from 'react'
import { IoLogOutOutline } from "react-icons/io5"
import Link from 'next/link'

function LogOutButton() {
	return (
		<Link 
			href='/api/auth/signout' 
			className='
				hover:shadow-xl hover:bg-white hover:text-primary 
				transition 
				text-white bg-primary 
				w-[2.5rem] h-[2.5rem] rounded-full
				text-[1.25rem]
				flex justify-center items-center
			'
		>
			<IoLogOutOutline size={24}/>
		</Link>
	)
}

export default LogOutButton