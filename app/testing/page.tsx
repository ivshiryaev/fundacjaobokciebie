import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Zbiorka from '@/components/cards/Zbiorka'
import Button from '@/components/button/Button'

import constants from '@/constants/data.json'
import { getZbiorki } from '@/lib/actions/zbiorka.actions'

import Slide from '@/components/animations/Slide'

//If preview===true shows "Prezjdż do pełnej listy zbiórek" button
async function Testing() {
	const preview = false

	const response = await getZbiorki()
	const data = JSON.parse(response)
	if(!data) return null

	const previewDisplayCount = 3

	return (
		<Section 
			className='
				container mx-auto
			'
		>
			<h4 
				className={`
					text-primary
					${snap.className}
					text-[2rem]
				`}
			>
				{constants.zbiorki.title}
			</h4>
			<p>
				w-full
				grid
				grid-cols-1 
				sm:grid-cols-2
				lg:grid-cols-3
				auto-rows-auto
				justify-center justify-items-center place-content-center
				gap-[1rem]
			</p>
			{data &&
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
					{preview ?
						data.slice(0,previewDisplayCount).map((zbiorka: any,idx: any) => (
							<Slide 
								verticalDirection='up'
								key={idx}
								className='w-full h-full'
							>
								<Zbiorka id={zbiorka._id}/>
							</Slide>
							))
							:
							data.map((zbiorka: any,idx: any) => (
							<Slide 
								verticalDirection='up'
								key={idx}
								className='w-full h-full'
							>
								<Zbiorka id={zbiorka._id}/>
							</Slide>
							))
						}
				</div>
			}
			<p>
				h-full w-full
				grid
				grid-cols-1 
				sm:grid-cols-2
				lg:grid-cols-3
				justify-center justify-items-center
				gap-[1rem]
			</p>
			{data &&
				<div 
					className='
						h-full w-full
						grid
						grid-cols-1 
						sm:grid-cols-2
						lg:grid-cols-3
						justify-center justify-items-center
						gap-[1rem]
					'
				>
					{preview ?
						data.slice(0,previewDisplayCount).map((zbiorka: any,idx: any) => (
							<Slide 
								verticalDirection='up'
								key={idx}
								className='w-full h-full'
							>
								<Zbiorka id={zbiorka._id}/>
							</Slide>
							))
							:
							data.map((zbiorka: any,idx: any) => (
							<Slide 
								verticalDirection='up'
								key={idx}
								className='w-full h-full'
							>
								<Zbiorka id={zbiorka._id}/>
							</Slide>
							))
						}
				</div>
			}
			<p>
				WITHOUT ANIMATION !
				h-full w-full
				grid
				grid-cols-1 
				sm:grid-cols-2
				lg:grid-cols-3
				justify-center justify-items-center
				gap-[1rem]
			</p>
			{data &&
				<div 
					className='
						h-full w-full
						grid
						grid-cols-1 
						sm:grid-cols-2
						lg:grid-cols-3
						justify-center justify-items-center
						gap-[1rem]
					'
				>
					{preview ?
						data.slice(0,previewDisplayCount).map((zbiorka: any,idx: any) => (
								<>
								<Zbiorka id={zbiorka._id}/>
								<Zbiorka id={zbiorka._id}/>
								</>
							))
							:
							data.map((zbiorka: any,idx: any) => (
								<>
								<Zbiorka id={zbiorka._id}/>
								<Zbiorka id={zbiorka._id}/>
								</>
							))
						}
				</div>
			}
			{ preview &&
				<Link href='/zbiorki'>
					<Button>Pełna lista zbiórek</Button>
				</Link>
			}
		</Section>
	)
}

export default Testing