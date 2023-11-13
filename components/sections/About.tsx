import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import data from '@/constants/data'

function About() {
	return (
		<Section 
			id='onas'
			className=' 
				text-white
				bg-primary
			'
		>
			<h2 
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.about.title}
			</h2>
			<p className='whitespace-pre-line text-center'>
				{data.about.description}
			</p>
		</Section>
	)
}

export default About