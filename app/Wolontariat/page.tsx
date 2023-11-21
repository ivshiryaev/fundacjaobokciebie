import Button from '@/components/button/Button'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import WolontariatForm from '@/components/forms/WolontariatForm'

import data from '@/constants/data.json'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: '🤸‍ Wolontariat',
	description: 'Dołącz do ekipy wolontariuszy.',
	alternates: {
    	canonical: '/Wolontariat',
    },
}

function NowaZbiorka() {
	return (
		<Section className='text-primary lg:container lg:mx-auto'>
			<h1
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.wolontariat.title}
			</h1>
			<h2 className='whitespace-pre-line text-center'>
				{data.wolontariat.description}
			</h2>
			<WolontariatForm/>
		</Section>
	)
}

export default NowaZbiorka