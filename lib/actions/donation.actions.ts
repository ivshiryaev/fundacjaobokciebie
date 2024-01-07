"use server"

import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import Donation from '@/lib/models/donation.model'
import Zbiorka from '@/lib/models/zbiorka.model'

import { getPaidCheckoutSessions } from '@/lib/actions/stripe.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

import { revalidatePath } from 'next/cache'

//Used on the landing page to show the latest donations
export async function getDonations(limit: number = 9){
	try{
		await connectToDB()

		const response = await Donation.find().sort({createdAt: 'desc'}).limit(limit)

		revalidatePath('/','layout')

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

//Used in the webhook when the donation is received
export async function createDonation(
	{
		name = 'Anonimowa wpłata',
		comment = '',
		amount,
		createdAt,
		stripeId,
		paymentLinkId = ''
	}:{
		name: string,
		comment: string,
		amount: number,
		createdAt: Date,
		stripeId: string,
		paymentLinkId: string
	}){
	try{
		await connectToDB()

		const newDonation = new Donation({
			name: name,
			comment: comment,
			amount: amount,
			createdAt: createdAt,
			stripeId: stripeId,
			paymentLinkId: paymentLinkId
		})

		await newDonation.save()

		return newDonation
	} catch(error) {
		console.error((error as Error).message)
	}
	return null
}

//TEST
export async function testFunction(){
	try{
		await connectToDB()

		const dateNow = new Date()

		const donations = await Donation.find()

		await Promise.all(donations.map(async (donation) => {
			const date = new Date(donation?.date)

			console.log(date)
			const res = await Donation.findOneAndUpdate({_id: donation._id}, {createdAt: date})

			console.log(res)
		}))

		// console.log(donations)

		// //Map over all the donations and create .createdAt field based on .date field
		// donations.map(donation => {
		// 	const date = new Date(donation?.date)
		// 	donation.createdAt = date
		// })

		// await donations.save()

	} catch(error) {
		console.error((error as Error).message)
	}
	return null
}

//UTILITIES USED TO RECEIVE ALL THE DONATIONS FROM STRIPE
// NOT USED IN THE PRODUCTION
export async function testTheDonationFromStripe(){
	try{
		await connectToDB()

		const list = await getPaidCheckoutSessions()

		list.map((item,idx) => {
			let comment = ''
			let convertedDate = convertUnixTimeFormatToDDMMYYYY(item.created)

			if(item?.custom_fields.length === 1){
				comment = item?.custom_fields[0]?.text?.value || ''
			}
			if(item?.custom_fields.length > 1){
				comment = item?.custom_fields[1]?.text?.value || ''
			}

			const newDonation = new Donation({
				name: 'Anonimowa wpłata',
				amount: item.amount_total,
				comment: comment,
				date: convertedDate,
				stripeId: item.id,
				paymentLinkId: item.payment_link
			})

			newDonation.save()

			console.log(`Saving the donation: ${idx}`)
		})

		console.log(list.length)
	} catch(error) {
		console.error((error as Error).message)
	}
	return false
}

export async function connectTheDonationsToTheZbiorka(){
	try{
		await connectToDB()

		let zbiorka = await Zbiorka.findOne({_id: '6553b39844bd7bdd21ccb8d7'})
		let donations = await Donation.find()

		const zbiorkaPaymentLink = zbiorka.paymentLinkId

		donations.map(item => {
			if(zbiorkaPaymentLink === item.paymentLinkId){
				console.log('match')
				console.log(item._id)
				zbiorka.donations.push(item._id)
			}
		})

		await zbiorka.save()

		console.log(donations.length)


	} catch(error){
		console.error((error as Error).message)
	}
}