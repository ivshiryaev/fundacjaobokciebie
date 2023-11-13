'use client'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/button/Button'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import { FormValidation, NowaZbiorkaSchema } from '@/lib/validations/NowaZbiorkaForm'

import { submitNowaZbiorkaForm } from '@/lib/actions/formSpree.actions.ts'

function NowaZbiorkaForm() {
	const [isSubmitSuccesfull, setIsSubmitSuccesfull] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormValidation>({
		resolver: zodResolver(NowaZbiorkaSchema),
		defaultValues: {
			name: '',
			email: '',
			phone:'',
			opis: '',
		}
	});

	const processSubmit: SubmitHandler<FormValidation> = async (data) => {
		setIsSubmitting(true)

		// TESTING ->
		// const promise = new Promise((resolve) => {
		// 	setTimeout(()=>{
		// 		resolve()
		// 	},2000)
		// })

		// await promise

		const isSubmitted = await submitNowaZbiorkaForm(data)
		setIsSubmitSuccesfull(isSubmitted)

		if(isSubmitted){
			reset()
			setTimeout(()=>(
				setIsSubmitSuccesfull(false)
			),3000)
		} else {
			alert('Oops, coś poszło nie tak, skontaktuj się z nami przez maila: fundacjaobokciebie@gmail.com')
		}

		setIsSubmitting(false)
	}

	return (
		<form 
			className='
				max-w-[32rem]
				w-full
				flex flex-col gap-[0.5rem]
				container mx-auto
			'
			onSubmit={handleSubmit(processSubmit)}
		>
			<input 
				className='
					p-[1rem]
					rounded-[2rem]
					outline outline-1 outline-primary
				'
				placeholder='Imie osoby zgłaszającej...'
				type="text"
				{...register('name')}
			/>
			{errors?.name?.message && <p className='text-sm'>{errors.name?.message}</p>}
			<input 
				className='
					p-[1rem]
					rounded-[2rem]
					outline outline-1 outline-primary
				'
				placeholder='Email...'
				type="text"
				{...register('email')}
			/>
			{errors?.email?.message && <p className='text-sm'>{errors.email?.message}</p>}
			<input 
				className='
					p-[1rem]
					rounded-[2rem]
					outline outline-1 outline-primary
				'
				placeholder='Nr Telefonu...'
				type="text"
				{...register('phone')}
			/>
			{errors?.phone?.message && <p className='text-sm'>{errors.phone?.message}</p>}
			<textarea
				rows={8}
				className='
					p-[1rem]
					rounded-[2rem]
					outline outline-1 outline-primary
				'
				placeholder='Opis...'
				type="text"
				{...register('opis')}
			/>
			{errors?.opis?.message && <p className='text-sm'>{errors.opis?.message}</p>}
			{isSubmitSuccesfull ?
				<div className='flex justify-center'>
					<div className='px-[2rem] py-[1rem] rounded-[2rem] bg-success'>
						<p className='font-bold text-white'>Wysłane !</p>
					</div>
				</div>
				:
				<div className={`flex justify-center items-center gap-[0.5rem] ${isSubmitting && 'animate-pulse'}`}>
					<Button 
						disabled={isSubmitting || isSubmitSuccesfull} 
						className='
							w-min
							disabled:hover:bg-primary
							disabled:hover:text-white
							disabled:outline-none
						'
					>
						{isSubmitting ? (
							<span className='flex gap-[0.5rem]'>
								<span className='animate-spin'>
									<AiOutlineLoading3Quarters size={24}/>
								</span>
								Wysyłanie...
							</span>
						) : (
							<span>Wysyłam</span>
						)}
					</Button>
				</div>
			}
		</form>
	)
}

export default NowaZbiorkaForm