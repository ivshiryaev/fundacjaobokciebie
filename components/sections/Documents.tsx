import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data.json'
import FadeIn from '@/components/animations/FadeIn'

function Documents() {
	return (
		<Section className='text-primary'>
			<FadeIn>
				<h6
					className={`
						${snap.className}
						text-[2rem]
					`}
				>
					{data.documents.title}
				</h6>
			</FadeIn>

			<FadeIn>
				<p className='text-center'>
					{data.documents.description}
				</p>
			</FadeIn>

			<FadeIn>
				<Link href='/Dokumenty'>
					<Button
						className=''
					>
						{data.documents.button}
					</Button>
				</Link>
			</FadeIn>
		</Section>
	)
}

export default Documents