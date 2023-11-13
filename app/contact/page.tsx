import Button from '@/components/button/Button'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import ContactForm from '@/components/forms/ContactForm'

import data from '@/constants/data.json'

function Contact() {
	return (
		<Section className='text-primary lg:container lg:mx-auto'>
			<h1
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.contact.title}
			</h1>
			<h2 className='whitespace-pre-line text-center'>
				{data.contact.description}
			</h2>
			<ContactForm/>
		</Section>
	)
}

export default Contact