"use server"

import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import Zbiorka from '@/lib/models/zbiorka.model'
import Donation from '@/lib/models/donation.model'

import { revalidatePath } from 'next/cache'

export async function updateZbiorkaById(id: string, data: any){
	try{
		await connectToDB()

		const response = await Zbiorka.findByIdAndUpdate(id, data)


	} catch(error){
		console.error((error as Error).message)
	}
}

//Returns all the Zbiorka models from the db EXCEPT ISHIDDEN === TRUE
export async function getZbiorki(limit: number = 9){
	try{
		await connectToDB()

		let response

		//finished are at the end, isnt finished at the beginning
		response = await Zbiorka.find({ isHidden: {$exists: false} }).sort({ isFinished: 'asc' }).limit(limit)

		await revalidatePath('/')

		return JSON.stringify(response)

	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

//Returns all the Zbiorka models from the db EVEN HIDDEN ONES
export async function getAllTheZbiorki(){
	try{
		await connectToDB()

		let response

		//finished are at the end, isnt finished at the beginning
		response = await Zbiorka.find().sort({ isFinished: 'asc' })

		await revalidatePath('/')

		return JSON.stringify(response)

	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

//Used in the <Zbiorka> Card component
export async function getZbiorkaById(id: string){
	try{
		await connectToDB()

		const response = await Zbiorka.findOne({_id: id})

		revalidatePath('/')

		return JSON.stringify(response)
	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

//Used in the /Zbiorka/[href]
export async function getZbiorkaByHref(href: string){
	try{
		await connectToDB()

		const response = await Zbiorka.findOne({ href: href }).populate({
			path: 'donations',
			model: Donation,
			options: { 
				strictPopulate: false,
				sort: { createdAt: 'desc'}
			}
		})

		revalidatePath('/')

		return JSON.stringify(response)
	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

//Used in the stripe webhook 
export async function getZbiorkaByPaymentLinkId(paymentLinkId: string){
	try{
		await connectToDB()

		const response = await Zbiorka.findOne({ paymentLinkId: paymentLinkId }).populate({
			path: 'donations',
			model: Donation,
			options: { strictPopulate: false },
		})

		return response
	} catch(error){
		console.error((error as Error).message)
	}
}