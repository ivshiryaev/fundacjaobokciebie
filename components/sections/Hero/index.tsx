import Link from 'next/link'

import Section from '@/components/shared/Section'
import Button from '@/components/button/Button'

import { snap } from '@/app/fonts'
import data from '@/constants/data.json'

import Slide from '@/components/animations/Slide'
// import FlyingBaloon from './FlyingBaloon'

function Hero() {
	return (
		<Section 
			className='
				relative
				text-primary
				min-h-screen
			'
		>
			<Slide value={50} verticalDirection='down'>
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
			</Slide>
			<Slide value={50} verticalDirection='up'>
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
			</Slide>
		</Section>
	)
}

export default Hero