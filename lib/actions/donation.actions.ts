"use server"

import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import Donation from '@/lib/models/donation.model'
import Zbiorka from '@/lib/models/zbiorka.model'

import { getPaidCheckoutSessions } from '@/lib/actions/stripe.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

export async function getDonations(limit: number = 9){
	try{
		await connectToDB()

		const response = await Donation.find().sort({date: 'desc'}).limit(limit)

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

export async function createDonation(
	{
		name = 'Anonimowa wpłata',
		comment = '',
		amount,
		date,
		stripeId,
		paymentLinkId = ''
	}:{
		name: string,
		comment: string,
		amount: number,
		date: string,
		stripeId: string,
		paymentLinkId: string
	}){
	try{
		await connectToDB()

		const newDonation = new Donation({
			name: name,
			comment: comment,
			amount: amount,
			date: date,
			stripeId: stripeId,
			paymentLinkId: paymentLinkId
		})

		await newDonation.save()

		console.log('new donation created')

		return newDonation
	} catch(error) {
		console.error((error as Error).message)
	}
	return null
}

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


// 2. connect the donations made to the specific child

/* 	1 - Get zbiorka object
*	2 - get all teh donations array
*	3 - compare if the donation paymentLinkId === object.paymentLinkId
*	4 - if true, add the donation to the array of the donations
*
*
*
*
*/