'use server'

const contactFormUrl = process.env.FORMSPREE_CONTACT_FORM_URL
const nowaZbiorkaUrl = process.env.FORMSPREE_NOWA_ZBIORKA_FORM_URL
const wolontariatFormUrl = process.env.FORMSPREE_WOLONTARIAT_FORM_URL


export async function submitContactForm(data: any){
	try{
		const response = await fetch(contactFormUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			return true
		} else {
			console.error(`Can't submit the form, status code: ${response.status}`)
			return false
		}

	} catch(error) {
		console.error(error.message)
	}
}

export async function submitNowaZbiorkaForm(data: any){
	try{
		const response = await fetch(nowaZbiorkaUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			return true
		} else {
			console.error(`Can't submit the form, status code: ${response.status}`)
			return false
		}

	} catch(error) {
		console.error(error.message)
	}
}

export async function submitWolontariatForm(data: any){
	try{
		const response = await fetch(wolontariatFormUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			return true
		} else {
			console.error(`Can't submit the form, status code: ${response.status}`)
			return false
		}

	} catch(error) {
		console.error(error.message)
	}
}