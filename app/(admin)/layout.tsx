import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[[...nextauth]]/options'
import HistoryBack from './HistoryBack'
import LogOutButton from './LogOutButton'

export default async function Layout({children} : {children: React.ReactNode}) {
	const session = await getServerSession(authOptions)
	const sessionJson = JSON.stringify(session)

	return (
		<section className='flex flex-col gap-4 min-h-screen p-4 lg:p-8'>
			<div className='flex gap-4'>
				<HistoryBack/>
				<LogOutButton/>
				<Link href='/dashboard' className='hover:shadow-xl hover:bg-white hover:text-primary transition p-4 rounded-2xl text-white bg-primary w-fit text-[1.25rem]'>Admin panel</Link>
				<div className='p-4 rounded-2xl bg-primary text-white flex items-center'><p>{session?.user?.name}</p></div>
			</div>
			<main>
				{children}
			</main>
		</section>
	)
}