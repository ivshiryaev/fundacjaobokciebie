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
				<div className='grid'>
					<p>Zalogowany jako: {session?.user?.name}</p>
					<p>{session?.user?.email}</p>
				</div>
			</div>
			<main>
				{children}
			</main>
		</section>
	)
}