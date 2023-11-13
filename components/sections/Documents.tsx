import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data.json'

function Documents() {
	return (
		<Section className='text-primary'>
			<h6
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.documents.title}
			</h6>
			<p className='text-center'>
				{data.documents.description}
			</p>
			<Link href='/dokumenty'>
				<Button
					className=''
				>
					{data.documents.button}
				</Button>
			</Link>
		</Section>
	)
}

export default Documents