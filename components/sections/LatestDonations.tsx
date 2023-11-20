// @ts-nocheck

import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Donation from '@/components/shared/Donation'
import Slide from '@/components/animations/Slide'

import { getDonations } from '@/lib/actions/donation.actions'

import constants from '@/constants/data.json'

async function LatestDonations() {
	const response = await getDonations(6)
	const donations = JSON.parse(response)
	if(!donations) return null

	return (
		<Section
			id='donations'
			className='
				container mx-auto
			'
		>
			<h3 
				className={`
					text-primary
					${snap.className}
					text-[2rem]
				`}
			>
				{constants.donations.title}
			</h3>
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
				{donations.map((item,idx)=>(
					<Slide 
						verticalDirection='up'
						key={idx}
						className='w-full'
					>
						<Donation
							name={item.name}
							comment={item.comment}
							date={item.date}
							amount={item.amount}
						/>
					</Slide>
				))}
			</div>
		</Section>
	)
}

export default LatestDonations




