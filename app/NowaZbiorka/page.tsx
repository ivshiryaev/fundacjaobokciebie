import Button from '@/components/button/Button'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import NowaZbiorkaForm from '@/components/forms/NowaZbiorkaForm'

import data from '@/constants/data.json'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: '🎈 Załóż zbiórkę',
	description: 'Załóż zbiórkę i zbieraj na swoje potrzeby :)',
	alternates: {
    	canonical: '/NowaZbiorka',
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
				{data.zarejestrujzbiorke.title}
			</h1>
			<h2 className='whitespace-pre-line text-center'>
				{data.zarejestrujzbiorke.pageDescription}
			</h2>
			<NowaZbiorkaForm/>
		</Section>
	)
}

export default NowaZbiorka