import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Zbiorka from '@/components/cards/Zbiorka'
import Button from '@/components/button/Button'

import data from '@/constants/data'
import ZbiorkiJSON from '@/constants/Zbiorki'

//If preview===true shows "Prezjdż do pełnej listy zbiórek" button
function Zbiorki({preview = false}:{preview: boolean}) {
	return (
		<Section 
			className='
				container mx-auto
				text-primary
			'
		>
			<h4 
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.zbiorki.title}
			</h4>
			<div 
				className='
					w-full
					grid
					grid-cols-1 
					sm:grid-cols-2
					lg:grid-cols-3
					auto-rows-auto
					justify-center justify-items-center place-content-center
					gap-[1rem]
				'
			>
				{ZbiorkiJSON.map((zbiorka,idx) => (
					<Zbiorka key={idx} id={zbiorka.href}/>
				))}
			</div>
			{ preview &&
				<Link href='/zbiorki'>
					<Button>Pełna lista zbiórek</Button>
				</Link>
			}
		</Section>
	)
}

export default Zbiorki

// <Zbiorka
// 	name='Maria Klausiuk'
// 	description='SMA'
// 	fundraisedAmount={10}
// 	totalGoal={100}
// />
// <Zbiorka
// 	name='Ewa Ponomarek'
// 	description='MPD'
// 	fundraisedAmount={440}
// 	totalGoal={1000}
// />
// <Zbiorka
// 	name='Wiktor Rzodkiewicz'
// 	description='SMA typu 3'
// 	fundraisedAmount={200}
// 	totalGoal={1000}
// />
// <Zbiorka
// 	name='Wiktor Rzodkiewicz'
// 	description='SMA typu 3'
// 	fundraisedAmount={200}
// 	totalGoal={1000}
// />