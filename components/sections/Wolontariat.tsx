import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data.json'
import FadeIn from '@/components/animations/FadeIn'

function Wolonatriat() {
	return (
		<Section className='bg-primary text-white text-center'>
			<FadeIn>
				<p className={`${snap.className} text-[2rem]`}>{data.wolontariat.title}</p>
			</FadeIn>
			
			<FadeIn>
				<p className='whitespace-pre-line'>{data.wolontariat.description}</p>
			</FadeIn>

			<FadeIn>
				<Link href='/Wolontariat'>
					<Button 
						className={`
							bg-white
							!text-primary 
							hover:!text-white
							hover:outline hover:outline-white
						`}
					>
						Chcę dołączyć
					</Button>
				</Link>
			</FadeIn>
		</Section>
	)
}

export default Wolonatriat