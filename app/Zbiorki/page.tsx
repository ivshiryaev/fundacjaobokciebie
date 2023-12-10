import Section from '@/components/shared/Section'
import ZbiorkiSection from '@/components/sections/Zbiorki'

//Dynamically rendered page
export const revalidate = 0

import { snap } from '@/app/fonts'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Zbiorki które prowadzimy',
	description: 'Zapoznaj się z listą zbiórek które prowadzimy. Bądź bohaterem i wesprzyj potrzebujących | Fundacja Obok Ciebie',
	alternates: {
    	canonical: '/Zbiorki',
    },
}

function Zbiorki() {
	return (
		<ZbiorkiSection/>
	)
}

export default Zbiorki