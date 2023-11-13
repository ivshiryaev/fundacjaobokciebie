import Link from 'next/link'

import Section from '@/components/shared/Section'
import Button from '@/components/button/Button'

import { snap } from '@/app/fonts'
import data from '@/constants/data'

function Hero() {
	return (
		<Section 
			className='
				text-primary
				min-h-screen
			'
		>
			<header 
				className={`
					text-center
					flex flex-col 
					justify-center items-center
					${snap.className}
				`}
			>
				<p className='text-[2rem]'>
					Fundacja
				</p>
				<h1 className='text-[3rem]'>
					{data.hero.mainText}
				</h1>
			</header>
			<div className='flex gap-[0.5rem]'>
				<Link href='https://donate.stripe.com/7sIaGTdxV6XM02A000'>
					<Button>
						Wesprzyj
					</Button>
				</Link>
				<Link href='#onas'>
					<Button appearance='outline'>
						O nas
					</Button>
				</Link>
			</div>
		</Section>
	)
}

export default Hero