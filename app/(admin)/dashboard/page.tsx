import React from 'react'
import Link from 'next/link'

import { getAllTheZbiorki } from '@/lib/actions/zbiorka.actions'

export default async function Dashboard() {
	const response = await getAllTheZbiorki()
	const data = JSON.parse(response)

	return (
		<div className='flex flex-col gap-4'>
			<p>Dashboard</p>
			<ul className='flex flex-col gap-2'>
				{data.map(zbiorka => (
					<li key={zbiorka?._id}>
						<Link className='p-4 rounded-2xl shadow-lg bg-white block' href={`/dashboard/zbiorka/${zbiorka.href}`}>{zbiorka?.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}