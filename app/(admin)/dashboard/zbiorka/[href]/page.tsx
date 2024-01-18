'use client'
import React from 'react'

import { getZbiorkaByHref, updateZbiorkaById } from '@/lib/actions/zbiorka.actions'
import Button from '@/components/button/Button'

export default function Zbiorka({ params } : { params: { href: string }}) {
	const [data, setData] = React.useState({name: ''})

	const objectKeys = Object.keys(data).sort()

	React.useEffect(() => {
		async function fetchData(){
			const response = await getZbiorkaByHref(params?.href)
			const data = JSON.parse(response)
			if(!data) return null

			console.log(data)

			setData(data)
		}

		fetchData()
	},[])

	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>){
		setData({...data, name: e.target.value})
	}

	async function handleClick(){
		// updateZbiorkaById(data._id, {name: data.name})
		console.log(data)
	}

	return (
		<section className='flex flex-col gap-4'>
			<ul className='flex flex-col gap-2'>
				{objectKeys.map((objectKey: any) =>(
					// eslint-disable-next-line
					<li key={objectKey}>{objectKey}</li>
				))}
			</ul>
			<div className='flex flex-col'>
				<label htmlFor="name">Name: {data?.name}</label>
				<input className='p-2' value={data?.name} onChange={handleNameChange} name='name' type="text"/>
			</div>
			<Button className='w-fit' onClick={handleClick}>Save</Button>
		</section>
	)
}