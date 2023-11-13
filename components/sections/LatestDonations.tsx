import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'
import Donation from '@/components/shared/Donation'

import { getPaidCheckoutSessions } from '@/lib/actions/stripe.actions'

import Slide from '@/components/animations/Slide'

import data from '@/constants/data.json'

async function LatestDonations() {

	//PRODUCTION
	const donations = await getPaidCheckoutSessions({limit: 9})

	//TESTING
	// const donations = [
	// 	{
	// 		amount_total:2000,
	// 		created:1699888196,
	// 		custom_fields:[
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:'Valera'
	// 				}
	// 			},
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:'Powodzenia życzę !'
	// 				}
	// 			}
	// 		]
	// 	},
	// 	{
	// 		amount_total:5000,
	// 		created:1699888196,
	// 		custom_fields:[
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:'Piotr Barczyński'
	// 				}
	// 			},
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:''
	// 				}
	// 			}
	// 		]
	// 	},
	// 	{
	// 		amount_total:10000,
	// 		created:1699888196,
	// 		custom_fields:[
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:'Paweł'
	// 				}
	// 			},
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:'Jak najwięcej zdrówka !'
	// 				}
	// 			}
	// 		]
	// 	},
	// 	{
	// 		amount_total:2000,
	// 		created:1699888196,
	// 		custom_fields:[
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:''
	// 				}
	// 			},
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:''
	// 				}
	// 			}
	// 		]
	// 	},
	// 	{
	// 		amount_total:3000,
	// 		created:1699888196,
	// 		custom_fields:[
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:''
	// 				}
	// 			},
	// 			{
	// 				type:'text',
	// 				text:{
	// 					value:''
	// 				}
	// 			}
	// 		]
	// 	}
	// ]

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
				{donations.map((item,idx)=>(
					<Slide 
						verticalDirection='up'
						key={idx}
						className='w-full'
					>
						<Donation
							custom_fields={item?.custom_fields}
							date={item.created}
							value={item.amount_total}
						/>
					</Slide>
				))}
			</div>
		</Section>
	)
}

export default LatestDonations




