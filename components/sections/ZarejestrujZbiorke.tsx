import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data.json'
import FadeIn from '@/components/animations/FadeIn'

function ZarejestrujZbiorke() {
	return (
		<Section 
			className=' 
				text-white
				bg-primary
			'
		>
			<FadeIn>
				<h5 
					className={`
						${snap.className}
						text-[2rem]
					`}
				>
					{data.zarejestrujzbiorke.title}
				</h5>
			</FadeIn>
			<FadeIn>
				<p className='whitespace-pre-line text-center'>
					{data.zarejestrujzbiorke.description}
				</p>
			</FadeIn>
			<FadeIn>
				<Link href='/nowazbiorka'>
					<Button 
						className={`
							bg-white
							!text-primary 
							hover:!text-white
							hover:outline hover:outline-white
						`}
					>
						{data.zarejestrujzbiorke.button}
					</Button>
				</Link>
			</FadeIn>
		</Section>
	)
}

export default ZarejestrujZbiorke