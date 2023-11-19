import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import data from '@/constants/data.json'
import FadeIn from '@/components/animations/FadeIn'

function About() {
	return (
		<Section 
			id='onas'
			className=' 
				text-white
				bg-primary
			'
		>
			<FadeIn>
				<h2 
					className={`
						${snap.className}
						text-[2rem]
					`}
				>
					{data.about.title}
				</h2>
			</FadeIn>
			<FadeIn>
				<p className='whitespace-pre-line text-center'>
					{data.about.description}
				</p>
			</FadeIn>
		</Section>
	)
}

export default About