import Button from '@/components/button/Button'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: '😍 Dziękujemy',
	description: 'Od całego serca dziękujemy za wsparcie :)',
	robots: {
		index: false,
	},
	alternates: {
    	canonical: '/Dziekujemy',
    },
}

function Thanks() {
	return (
		<Section className='mx-auto container'>
			<div className='flex flex-col justify-center items-center text-center max-w-[48rem] gap-[1rem] leading-relaxed'>
				<h1 className={`${snap.className} text-[2rem] text-primary`}>Udało sie !</h1>
				<div className='relative w-[300px] aspect-square rounded-[2rem] overflow-hidden'>
					<Image
						alt='Udana wpłata gif'
						src='/images/successPayment.gif'
						fill
						className='object-cover'
					/>
				</div>
				<h2>Ogromne podziękowania za twoją pomoc<br/>Tutaj zobaczysz swoją wpłatę :)</h2>
				<Link href='/#donations'>
					<Button>
						Ostatnie wpłaty
					</Button>
				</Link>
				<h3 className='flex flex-col'>
					<p className='text-[0.75rem]'>Odlicz darowiznę i zapłać mniejszy podatek</p>
					<p className='text-[0.75rem]'>Jeżeli jesteś podatnikiem rozliczającym się z podatku dochodowego w Polsce i wsparłeś w ubiegłym roku Fundację Obok Ciebie, możesz skorzystać z ulgi podatkowej z tytułu darowizny i zapłacić mniejszy podatek.</p>
					<Link href='https://poradnik.ngo.pl/darowizny' target='_blank' className='text-[0.75rem] underline'>Więcej info</Link>
				</h3>
			</div>
		</Section>
	)
}

export default Thanks