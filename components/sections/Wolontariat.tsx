import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data'

function Wolonatriat() {
	return (
		<Section className='bg-primary text-white text-center'>
			<p className={`${snap.className} text-[2rem]`}>{data.wolontariat.title}</p>
			<p className='whitespace-pre-line'>{data.wolontariat.description}</p>
			<Link href='/wolontariat'>
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
		</Section>
	)
}

export default Wolonatriat