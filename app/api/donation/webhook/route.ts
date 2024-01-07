import { NextResponse } from 'next/server'

import { createDonation } from '@/lib/actions/donation.actions'
import { getZbiorkaByPaymentLinkId } from '@/lib/actions/zbiorka.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

import { revalidatePath } from 'next/cache'
const moment = require('moment')

//Testing the webhook
export async function GET(request: Request) {
	console.log(request)
	return new Response('Hello there ! What is the purpose of testing our API ? Are u a hacker 🙃 ? Here is a cat emoji for you 🐈')
}

//Webhook to receive checkout.session.completed from Stripe
export async function POST(request: Request) {
	const res = await request.json()

	console.log(`request.json ===`)
	console.log(res)

	if(res.type !== 'checkout.session.completed') {
		return new Response('Event.type !== checkout.session.completed',{
			status: 500,
		})
	}

	const checkoutSession = res.data.object
	const name = checkoutSession?.custom_fields[0]?.text?.value || 'Anonimowa wpłata'
	const comment = checkoutSession?.custom_fields[1]?.text?.value || ''
	const amount = checkoutSession.amount_total || 0
	const paymentLinkId = checkoutSession.payment_link || ''
	const stripeId = checkoutSession.id || ''

	const rawDate = new Date()
	const formattedDate = moment(rawDate).format('MM/DD/YYYY, HH:mm:ss')

	const newDonation = await createDonation({
		name,
		comment,
		amount,
		date: formattedDate,
		stripeId,
		paymentLinkId
	})

	const zbiorka = await getZbiorkaByPaymentLinkId(paymentLinkId)

	if(!zbiorka){
		return new Response(JSON.stringify({
			message: 'The donation is created and added to the db, but there is no related paymentLinkId found in Zbiorki',
			status: 201
		}))
	}

	zbiorka.donations.push(newDonation)
	zbiorka.totalDonated += amount

	await zbiorka.save()

	await revalidatePath('/')

	return new Response(JSON.stringify({
		message: 'The donation is created and added to the db. The donation is connected to the Zbiorka related paymentLinkId',
		status: 201
	}))
}