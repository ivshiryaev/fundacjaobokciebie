// @ts-nocheck
"use server"

import { Stripe } from '@/lib/stripe'

export async function getPaidCheckoutSessions(
	{
		limit
	} : 
	{
		limit: number,
	}){
	try{
		const stripe = await Stripe()

		const checkoutSessions = await stripe.checkout.sessions.list({
			limit: 100,
		});

		const paidCheckoutSessions = checkoutSessions.data.filter(checkoutSession => {
			return (checkoutSession.payment_status === 'paid')
		})

		return paidCheckoutSessions.slice(0,limit)
	} catch(error) {
		console.error((error as Error).message)
	}
	return []
}

export async function getPaidCheckoutSessionsByPaymentLinkId(
	{
		paymentLinkId,
	} : 
	{
		paymentLinkId: string,
	}){
	try{
		const stripe = await Stripe()

		if(!paymentLinkId) return { paidCheckoutSessions: [], totalDonatedValue: 0}

		const rawCheckoutSessions = []

		//Initial get checkout sessions
		let checkoutSessions = await stripe.checkout.sessions.list({
			limit: 100,
			payment_link: paymentLinkId,
		})

		//Store all checkout sessions in the array 
		checkoutSessions.data.map(item => (
			rawCheckoutSessions.push(item)
		))

		//Loop thru all the checkout sessions
		while(checkoutSessions.has_more){
			checkoutSessions = await stripe.checkout.sessions.list({
				limit:100,
				payment_link: paymentLinkId,
				starting_after: checkoutSessions.data[checkoutSessions.data.length-1].id
			})
			checkoutSessions.data.map(item => (
				rawCheckoutSessions.push(item)
			))
		}

		//Filter them by payment_status === 'paid'
		const paidCheckoutSessions: any[] = 
			rawCheckoutSessions.filter(checkoutSession => (
				checkoutSession.payment_status === 'paid'
			))

	    //Sum up the quantity
	    const totalDonatedValue: number = paidCheckoutSessions.reduce((accumulator, item) => accumulator + item.amount_total, 0)

		return { paidCheckoutSessions, totalDonatedValue }
	} catch(error) {
		console.error((error as Error).message)
	}
	return { paidCheckoutSessions: [], totalDonatedValue: 0}
}


export async function listAllEventsByType(types: string[]){
	try{
		const stripe = await Stripe()
		const events = await stripe.events.list({
		  limit: 3,
		  types: ['checkout.session.completed']
		});
		return events
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