'use client'

import { useState, useEffect } from 'react'
import Slide from '@/components/animations/Slide'
import Donation from '@/components/shared/Donation'
import Button from '@/components/button/Button'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { getPaidCheckoutSessionsByPaymentLinkId } from '@/lib/actions/stripe.actions'

function DonationList({donations} : {donations: any[]}) {
	const [displayCount, setDisplayCount] = useState(3)
	const incrementor = 3
	
	function showMore(){
		setDisplayCount(displayCount + incrementor)
	}

	// setDonations({
	// 	...donations,
	// 	has_more:newData.has_more,
	// 	data:[
	// 		...donations.data,
	// 		...newData.data,
	// 	],
	// })
	// setIsLoading(false)

	return (
		<div className={`${donations.length < 1 && 'hidden'} relative outline outline-1 outline-myGray`}>
			{donations && donations.slice(0,displayCount).map((item,idx)=>(
				<Slide
					value={50}
					key={idx}
					verticalDirection='up'
					className='border-b last:border-none'
				>
					<Donation
						displayInRow
						name={item.name}
						comment={item.comment}
						date={item.date}
						amount={item.amount}
					/>
				</Slide>
			))}
			{donations && displayCount < donations.length && 
				<Slide
					value={50}
					verticalDirection='up'
					className='w-full h-full'
				>
					<Button onClick={showMore} className='w-full rounded-none !outline-none !border-none'>
						Pokaż więcej
					</Button>
				</Slide>
			}
		</div>
	)
}

export default DonationList



// {!donations?.data?.length && IsLoading &&
// 	<div className='flex flex-col gap-[1rem] justify-center items-center p-[2rem]'>
// 		<div className='flex gap-[1rem]'>
// 			<span className='animate-spin fill-primary text-primary'><AiOutlineLoading3Quarters size={24}/></span>
// 			<p>Ładuję ostatnie wpłaty...</p>
// 		</div>
// 		<p className='text-[0.75rem]'>Może to potrwać do 7 sekund, poczekaj :)</p>
// 	</div>
// }
// {IsLoading && donations?.data?.length &&
// 	<div className='absolute gap-[1rem] left-0 top-0 w-full h-full flex justify-center items-center'>
// 		<span className='animate-spin fill-primary text-primary'><AiOutlineLoading3Quarters size={36}/></span>
// 		<p>Ładuję wpłaty...</p>
// 	</div>
// }