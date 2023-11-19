import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import data from '@/constants/data.json'

function RODO() {
	return (
		<Section className='container mx-auto gap-[4rem]'>
			<h1 className={`${snap.className} text-primary text-[2rem]`}>
				RODO
			</h1>
			<div className='flex flex-col max-w-[48rem] gap-[4rem] leading-relaxed'>
				<p className='whitespace-pre-line'>
					{data.rodo.description}
				</p>
			</div>
		</Section>
	)
}

export default RODO