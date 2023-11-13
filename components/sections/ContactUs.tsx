import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import ContactForm from '@/components/forms/ContactForm'

import data from '@/constants/data'

function ContactUs() {
	return (
		<Section className='text-primary'>
			<p
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.contact.title}
			</p>
			<p className='text-center'>
				{data.contact.description}
			</p>
			<ContactForm/>
		</Section>
	)
}

export default ContactUs