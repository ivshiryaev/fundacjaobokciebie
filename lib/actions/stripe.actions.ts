// @ts-nocheck
"use server"

import { Stripe } from '@/lib/stripe'

export async function getPaidCheckoutSessions(){
	try{
		const stripe = await Stripe()

		const rawCheckoutSessions = []

		let checkoutSessions = await stripe.checkout.sessions.list({
			limit: 100,
		});

		checkoutSessions.data.map(item => rawCheckoutSessions.push(item))

		while(checkoutSessions.has_more){
			console.log('Checkout sessions has more')
			checkoutSessions = await stripe.checkout.sessions.list({
				limit: 100,
				starting_after: checkoutSessions.data[checkoutSessions.data.length-1].id
			});

			checkoutSessions.data.map(item => rawCheckoutSessions.push(item))
		}

		console.log('I am going to filter them')

		//Filter them by status paid
		const paidCheckoutSessions = rawCheckoutSessions.filter(checkoutSession => {
			return (checkoutSession.payment_status === 'paid')
		})

		return paidCheckoutSessions
	} catch(error) {
		console.error((error as Error).message)
	}
	return []
}

export async function getPaidCheckoutSessionsByPaymentLinkId(
	{
		donations,
		paymentLinkId,
		starting_after,
		limit = 6,
	} : 
	{
		donations?: any[],
		paymentLinkId: string,
		starting_after?: string,
		limit?: number,
	}){
	try{
		const stripe = await Stripe()

		let checkoutSessions = []

		if(donations){
			//Get donations starting_after last item in donations array
			checkoutSessions = await stripe.checkout.sessions.list({
				limit: 50,
				payment_link: paymentLinkId,
				starting_after: donations.data[donations.data.length - 1].id,
			})
		} else {
			//Get first 100 donations if no donations array is coming as a prop
			checkoutSessions = await stripe.checkout.sessions.list({
				limit: 50,
				payment_link: paymentLinkId,
			})
		}

		//Fitler them by status === 'paid'
		checkoutSessions.data = checkoutSessions.data.filter(checkoutSession => {
			return (checkoutSession.payment_status === 'paid')
		})

		//Slice them by limit
		checkoutSessions.data = checkoutSessions.data.slice(0, limit)

		// check if there is more
		let checkHasMore = await stripe.checkout.sessions.list({
			limit: 50,
			payment_link: paymentLinkId,
			starting_after: checkoutSessions.data[checkoutSessions.data.length - 1].id,
		})

		// Check if they are paid
		checkHasMore.data = checkHasMore.data.filter(checkoutSession => {
			return (checkoutSession.payment_status === 'paid')
		})

		// If there are paid, set to true
		if(checkHasMore.data.length){
			checkoutSessions.has_more = true
		} else {
			checkoutSessions.has_more = false
		}

		return JSON.stringify(checkoutSessions)
	} catch(error) {
		console.error((error as Error).message)
	}
	return { paidCheckoutSessions: [], totalDonatedValue: 0}
}

export async function getCheckoutSessions(){
	const stripe = await Stripe()

	const sessions = await stripe.checkout.sessions.list({
		limit: 10,
	});

	return sessions
}



export async function listAllEventsByType(types: string[]){
	try{
		const stripe = await Stripe()


		const rawCharges = []

		let response = await stripe.paymentIntents.list({
			limit: 100,
		})

		response.data.map(item => rawCharges.push(item))

		while(response.has_more){
			response = await stripe.paymentIntents.list({
				limit: 100,
				starting_after: response.data[response.data.length-1].id
			})

			response.data.map(item => rawCharges.push(item))
		}

		const data = JSON.stringify(rawCharges)

		return data
	} catch(error){
		console.error((error as Error).message)
	}
}

export async function retrieveBalance(){
	try{
		const stripe = await Stripe()
		const balance = await stripe.balance.retrieve();
		return balance
	} catch(error) {
		console.error((error as Error).message)
	}
}

export async function getProduct({productId} : {productId: string}){
	try{
		const stripe = await Stripe()
		const product = await stripe.products.retrieve(productId);
		return product
	} catch(error) {
		console.error((error as Error).message)
	}
}

export async function listAllCharges(){
	try{
		const stripe = await Stripe()
		const charges = await stripe.charges.list({
			limit: 3,
		});
		return charges
	} catch(error) {
		console.error((error as Error).message)
	}
}

export async function getTotalDonatedValueByMetadata({metadata}:{metadata: string}){
	try{
		if(!metadata) {
			console.error('No metadata')
			return null
		}
		const stripe = await Stripe()

		//Getting all the completed sessions
		const events = await stripe.events.list({
		  limit: 100,
		  types: ['checkout.session.completed']
		});

		//Filter them by metadata
		const filtredByMetadata = events.data.filter(item => item.data.object?.metadata?.zbiorkaId === metadata)

		//convert array of events to the array of completed checkout sessions
		const checkoutSessions = filtredByMetadata.map(item => item.data.object)

		//Sum up the quantity
		const total = checkoutSessions.reduce((accumulator, item) => accumulator + item.amount_total, 0)

		return total
	} catch(error) {
		console.error((error as Error).message)
	}
}

export async function getPaidCheckoutSessionsByMetadata(
	{
		metadata,
	}:
	{
		metadata: string,
	}){
	try{
		if(!metadata) {
			console.error('No metadata')
			return null
		}

		const stripe = await Stripe()

		//Getting all the completed sessions
		const events = await stripe.events.list({
		  limit: 100,
		  types: ['checkout.session.completed']
		});

		//Filter them by metadata
		const filtredByMetadata = events.data.filter(item => item.data.object?.metadata?.zbiorkaId === metadata || false)

		//convert array of events to the array of completed checkout sessions
		const checkoutSessions = filtredByMetadata.map(item => item.data.object)

		return checkoutSessions
	} catch(error) {
		console.error((error as Error).message)
	}
}


/*
*	Get all the checkout sessions
*	and include payment link
* 	add completed ones to the return array
*
*	Implement pagination later, i can receive 100 requests right now, so all ok
*	
*
*	Get all the completed checkout sessions
*	without payment link
*	check their metadata
*	If the metadata matches, return them
*
*
*
*
*/


/*
*	Main goal:
*	I need to show all the payments for the specific payment link
*
*	1 approach:
* 	I can show all the checkout sessions to the specific payment link id
*	But ! it shows ALL the checkout sessions including non-paid
*	I only need successfull paid checkout sessions
*
*	2 approach:
*	I was trying to get all the charges
*	But they are not connected to the specific payment link id
*	Maybe i miss something and i can somehow get all the charges based on a payment link id
*
*/