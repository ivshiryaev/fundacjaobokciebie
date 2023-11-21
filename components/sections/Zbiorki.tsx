import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Zbiorka from '@/components/cards/Zbiorka'
import Button from '@/components/button/Button'

import constants from '@/constants/data.json'
import { getZbiorki } from '@/lib/actions/zbiorka.actions'

// If preview, show the "Prezjdż do pełnej listy zbiórek" button on the bottom
// and fetching only zbiorki from the db limitied by the limit
async function Zbiorki({preview = false}:{preview?: boolean}) {
	const limit = 3

	let response

	if(preview){
		response = await getZbiorki(limit)
	} else {
		response = await getZbiorki()
	}

	const data = JSON.parse(response)
	if(!data) return null

	return (
		<Section 
			className='
				container mx-auto
			'
		>
			{preview ?
				<h4 
					className={`
						text-primary
						${snap.className}
						text-[2rem]
					`}
				>
					{constants.zbiorki.title}
				</h4>
				:
				<h1
					className={`
						text-primary
						${snap.className}
						text-[2rem]
					`}
				>
					{constants.zbiorki.title}
				</h1>
			}
			<div className='
				h-full w-full
				grid
				grid-cols-1 
				sm:grid-cols-2
				lg:grid-cols-3
				justify-center justify-items-center
				gap-[1rem]
			'>
				{data.map((zbiorka: any,idx: any) => (
					<Zbiorka key={idx} id={zbiorka._id}/>
				))}
			</div>
			{ preview &&
				<Link href='/Zbiorki'>
					<Button>Pełna lista zbiórek</Button>
				</Link>
			}
		</Section>
	)
}

export default Zbiorki