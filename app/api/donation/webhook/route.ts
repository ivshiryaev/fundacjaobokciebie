import { NextResponse } from 'next/server'

import { createDonation } from '@/lib/actions/donation.actions'
import { getZbiorkaByPaymentLinkId } from '@/lib/actions/zbiorka.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

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

	console.log(`Created a donation:`)

	const zbiorka = await getZbiorkaByPaymentLinkId(paymentLinkId)

	console.log('zbiorka: ')
	console.log(zbiorka)

	zbiorka.donations.push(newDonation)

	await zbiorka.save()

	console.log('Zbiorka is saved')

	return new Response(JSON.stringify({message: 'Post request happened!'}))
}