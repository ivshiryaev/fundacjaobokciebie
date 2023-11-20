import { NextResponse } from 'next/server'

import { createDonation } from '@/lib/actions/donation.actions'
import { getZbiorkaByPaymentLinkId } from '@/lib/actions/zbiorka.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
	console.log(request)
	return new Response('hi')
}


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
	const date = convertUnixTimeFormatToDDMMYYYY(checkoutSession.created)

	const newDonation = await createDonation({
		name,
		comment,
		amount,
		date,
		stripeId,
		paymentLinkId
	})

	if(newDonation) revalidatePath('/')

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

	revalidatePath('/')

	return new Response(JSON.stringify({
		message: 'The donation is created and added to the db. The donation is connected to the Zbiorka related paymentLinkId',
		status: 201
	}))
}