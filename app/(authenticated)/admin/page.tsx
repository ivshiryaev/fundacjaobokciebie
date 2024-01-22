import React from 'react'
import Link from 'next/link'

import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[[...nextauth]]/options'

import { getAllTheZbiorki } from '@/lib/actions/zbiorka.actions'



export default async function Admin() {
	const session = await getServerSession(authOptions)

	/**	The best solution to implement role-based-authentication 😂 
	*	P.S. just a quick fix, i'll fix this later i promise
	* 	Created at: 22.01.2024
	*/
	if(session?.user?.email !== 'ivshiryaev1999@gmail.com'){
		return <p>Wygląda na to iż nie jesteś upoważniony do odwiedzania tej strony</p>
	}

	const response = await getAllTheZbiorki()
	const data = JSON.parse(response)

	return (
		<div className='flex flex-col gap-4'>
			<p>Admin page</p>
			<p>{JSON.stringify(session,null,2)}</p>
			<ul className='flex flex-col gap-2'>
				{data.map((zbiorka: any) => (
					<li key={zbiorka?._id}>
						<Link className='p-4 rounded-2xl shadow-lg bg-white block' href={`/admin/zbiorka/${zbiorka.href}`}>{zbiorka?.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}