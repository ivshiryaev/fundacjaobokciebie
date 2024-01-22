'use client'
import React from 'react'

import { getZbiorkaByHref, updateZbiorkaById } from '@/lib/actions/zbiorka.actions'
import Button from '@/components/button/Button'
import styles from './styles.module.css'

const initialData = {
	_id: '',
	name: '',
	age: '',
	city: '',
	nazwaChoroby: '',
	celZbiorki: '',
	href: '',
	paymentLinkId: '',
	paymentLinkUrl: '',
	totalGoal: '',
	isFinished: false,
	opisChoroby: '',
	isHidden: false,
};

export default function Zbiorka({ params } : { params: { href: string }}) {
	const [data, setData] = React.useState(initialData)

	React.useEffect(() => {
		async function fetchData(){
			const response = await getZbiorkaByHref(params?.href)
			const data = JSON.parse(response)
			if(!data) return null

			console.log(data)

			setData(data)
		}

		fetchData()
	},[params?.href])

	function handleDataChange(property: string, value: string | number | boolean, ){
		setData({...data, [property]: value})
	}

	async function handleClick(){
		if(!data?._id) return null
		updateZbiorkaById(data?._id, data)
		console.log(data)
	}

	return (
		<section className={styles.container}>
			<ul>
				{/*Name*/}
				<li>
					<label htmlFor='name'>Name: {data?.name}</label>
					<input 
						value={data?.name} 
						onChange={(e) => handleDataChange('name', e.target.value)} 
						name='name' 
						type='text'
					/>
				</li>
				{/*Age*/}
				<li>
					<label htmlFor='age'>Age: {data?.age}</label>
					<input 
						value={data?.age} 
						onChange={(e) => handleDataChange('age', e.target.value)} 
						name='age' 
						type='number'
					/>
				</li>
				{/* City */}
				<li>
				  <label htmlFor='city'>City: {data?.city}</label>
				  <input 
					value={data?.city} 
					onChange={(e) => handleDataChange('city', e.target.value)} 
					name='city' 
					type='text'
				  />
				</li>
				{/* Nazwa choroby */}
				<li>
				  <label htmlFor='nazwaChoroby'>Nazwa choroby: {data?.nazwaChoroby}</label>
				  <input 
				    value={data?.nazwaChoroby} 
				    onChange={(e) => handleDataChange('nazwaChoroby', e.target.value)} 
				    name='nazwaChoroby' 
				    type='text'
				  />
				</li>

				{/* Cel zbiorki */}
				<li>
				  <label htmlFor='celZbiorki'>Cel zbiorki: {data?.celZbiorki}</label>
				  <input 
				    value={data?.celZbiorki} 
				    onChange={(e) => handleDataChange('celZbiorki', e.target.value)} 
				    name='celZbiorki' 
				    type='text'
				  />
				</li>

				{/* Href */}
				<li>
				  <label htmlFor='href'>Href: {data?.href}</label>
				  <input 
				    value={data?.href} 
				    onChange={(e) => handleDataChange('href', e.target.value)} 
				    name='href' 
				    type='text'
				  />
				</li>

				{/* PaymentLinkId */}
				<li>
				  <label htmlFor='paymentLinkId'>PaymentLinkId: {data?.paymentLinkId}</label>
				  <input 
				    value={data?.paymentLinkId} 
				    onChange={(e) => handleDataChange('paymentLinkId', e.target.value)} 
				    name='paymentLinkId' 
				    type='text'
				  />
				</li>

				{/* PaymentLinkUrl */}
				<li>
				  <label htmlFor='paymentLinkUrl'>PaymentLinkUrl: {data?.paymentLinkUrl}</label>
				  <input 
				    value={data?.paymentLinkUrl} 
				    onChange={(e) => handleDataChange('paymentLinkUrl', e.target.value)} 
				    name='paymentLinkUrl' 
				    type='text'
				  />
				</li>

				{/* Total goal */}
				<li>
				  <label htmlFor='totalGoal'>Total goal: {data?.totalGoal}</label>
				  <input 
				    value={data?.totalGoal} 
				    onChange={(e) => handleDataChange('totalGoal', e.target.value)} 
				    name='totalGoal' 
				    type='number'
				  />
				</li>

				{/* isFinished */}
				<li>
				  <label htmlFor='isFinished'>isFinished: {data?.isFinished ? 'true' : 'false'}</label>
				  <select 
				    value={data?.isFinished ? 'true' : 'false'} 
				    onChange={(e) => handleDataChange('isFinished', e.target.value === 'true')} 
				    name='isFinished'
				  >
				    <option value='true'>True</option>
				    <option value='false'>False</option>
				  </select>
				</li>

				{/* isHidden */}
				<li>
				  <label htmlFor='isHidden'>isHidden: {data?.isHidden ? 'true' : 'false'}</label>
				  <select 
				    value={data?.isHidden ? 'true' : 'false'} 
				    onChange={(e) => handleDataChange('isHidden', e.target.value === 'true')} 
				    name='isHidden'
				  >
				    <option value='true'>True</option>
				    <option value='false'>False</option>
				  </select>
				</li>

				{/* opisChoroby */}
				<li>
				  <label htmlFor='opisChoroby'>Opis choroby:</label>
				  <textarea 
				    value={data?.opisChoroby} 
				    onChange={(e) => handleDataChange('opisChoroby', e.target.value)} 
				    name='opisChoroby' 
				  />
				</li>
			</ul>
			<Button className='w-fit' onClick={handleClick}>Save</Button>
		</section>
	)
}