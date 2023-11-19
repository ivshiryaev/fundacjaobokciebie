"use server"

import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import Zbiorka from '@/lib/models/zbiorka.model'
import Donation from '@/lib/models/donation.model'

export async function getZbiorki(){
	try{
		await connectToDB()

		const response = await Zbiorka.find()

		return JSON.stringify(response)

	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

export async function getZbiorkaById(id: string){
	try{
		await connectToDB()

		const response = await Zbiorka.findOne({_id: id})

		return JSON.stringify(response)
	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

export async function getZbiorkaByHref(href: string){
	try{
		await connectToDB()

		const response = await Zbiorka.findOne({ href: href }).populate({
			path: 'donations',
			model: Donation,
			options: { 
				strictPopulate: false,
				sort: { date: 'desc'}
			}
		})

		return JSON.stringify(response)
	} catch(error){
		console.error((error as Error).message)
	}
	return ''
}

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