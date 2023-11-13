import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Button from '@/components/button/Button'
import Link from 'next/link'

import data from '@/constants/data'

function ZarejestrujZbiorke() {
	return (
		<Section 
			className=' 
				text-white
				bg-primary
			'
		>
			<h5 
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.zarejestrujzbiorke.title}
			</h5>
			<p className='whitespace-pre-line text-center'>
				{data.zarejestrujzbiorke.description}
			</p>
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
		</Section>
	)
}

export default ZarejestrujZbiorke