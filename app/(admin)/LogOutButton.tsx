import React from 'react'
import { IoLogOutOutline } from "react-icons/io5"
import Link from 'next/link'

function LogOutButton() {
	return (
		<Link href='/api/auth/signout' className='hover:shadow-xl hover:bg-white hover:text-primary transition p-4 rounded-2xl text-white bg-primary w-fit text-[1.25rem] flex justify-center items-center'><IoLogOutOutline size={24}/></Link>
	)
}

export default LogOutButton