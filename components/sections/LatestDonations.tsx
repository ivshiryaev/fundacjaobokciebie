import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Donation from '@/components/shared/Donation'

import { getPaidCheckoutSessions } from '@/lib/actions/stripe.actions.ts'

import data from '@/constants/data'

async function LatestDonations() {
	const donations = await getPaidCheckoutSessions({limit: 9})

	// console.log(donations[0].custom_fields)

	return (
		<Section
			className='
				container mx-auto
				text-primary
			'
		>
			<h3 
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.donations.title}
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
				{/*<Donation
					name='Wiktor Zambrowicz'
					date='12.03.2023 16:30:31'
					value='2000'
					comment='Powodzonka !'
				/>
				<Donation
					name='Anonimowa wpłata'
					date='01.02.2022 13:01:31'
					value='5000'
				/>
				<Donation
					name='Anonimowa wpłata'
					date='01.02.2022 13:01:31'
					value='10000'
				/>
				<Donation
					name='Wiktor Majtkowicz'
					date='01.02.2022 13:01:31'
					value='3000'
				/>*/}
				{donations.map((item,idx)=>(
					<Donation
						key={idx}
						name={item?.custom_fields[0]?.text?.value}
						comment={item?.custom_fields[1]?.text?.value}
						date={item.created}
						value={item.amount_total}
					/>
				))}
			</div>
		</Section>
	)
}

export default LatestDonations




