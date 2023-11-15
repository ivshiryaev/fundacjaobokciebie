import { NextResponse } from 'next/server'

import { createDonation } from '@/lib/actions/donation.actions'
import { convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

export async function GET(request: Request) {
	console.log(request)
	return new Response('hi')
}

export async function POST(request: Request) {
	const res = await request.json()

	// const date = convertUnixTimeFormatToDDMMYYYY(res.data.object.created)

	// if(res.type === 'checkout.session.completed'){
	// 	await createDonation({
	// 		amount: res.data.object.amount_total,
	// 		date: date,
	// 		paymentLinkId: res.data.object.payment_link,
	// 		stripeId: res.data.object.id
	// 	})
	// }

	console.log(res)

	return new Response(JSON.stringify({message: 'Post request happened!'}))
}