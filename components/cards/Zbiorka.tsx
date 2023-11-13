import Image from 'next/image'
import Button from '@/components/button/Button'
import Link from 'next/link'

import { centsToValue } from '@/lib/utils'

import { countPercentage } from '@/lib/utils'

import ZbiorkiJSON from '@/constants/Zbiorki'

import { getPaidCheckoutSessionsByPaymentLinkId } from '@/lib/actions/stripe.actions.ts'


//TODO : change props naming
//TODO: rename alt props of the images
async function Zbiorka({id}:{id: string}) {

	// Get data about the zbiorka
	const data = ZbiorkiJSON.find(zbiorka => zbiorka.href === id)
	if(!data) return null

	//Get all the donations
	const { paidCheckoutSessions: donations, totalDonatedValue } = await getPaidCheckoutSessionsByPaymentLinkId({
		paymentLinkId: data.paymentLinkId || null,
	})

	//Get total donated value
	const totalFundraised = centsToValue({valueInCents: totalDonatedValue})
	const fundraisedPercentage = countPercentage(totalFundraised, data.totalGoal).toString()

	return (
			<article
				className='
					w-full
					flex flex-col
					justify-center items-center
					rounded-[2rem]
					overflow-hidden
					transition
					outline outline-1 outline-myGray
					hover:shadow-lg
				'
			>
				<Link
					href={`zbiorka/${data.href}`}
					className='
						w-full
						relative
						h-[300px]
					'
				>
					<Image
						className='object-cover pointer-events-none'
						src={`/images/${data.href}.jpg`}
						fill
						alt='MariaKlausiuk'
					/>
				</Link>
				<div 
					className='
						w-full
						p-[1.5rem]
						flex flex-col gap-[0.5rem]
					'
				>
					<div>
						<p className='text-[1.5rem]'>{data.name}</p>
						<p className='text-myGray2'>{data.description}</p>
					</div>
					<div className='flex flex-col gap-[0.5rem]'>
						<p className='text-[0.750rem] text-myGray2'>
							Uzbieraliśmy: {totalFundraised} zł
						</p>
						<div className='h-[0.25rem] bg-myGray rounded-full overflow-hidden'>
							<div 
								style={{
									width:`${fundraisedPercentage}%`
								}}
								className={`
									bg-primary h-full
								`}
							>
							</div>
						</div>
						<p className='text-end text-[0.750rem] text-myGray2'>
							Cel: {data.totalGoal} zł
						</p>
					</div>
					<Link href={`zbiorka/${data.href}`}>
						<Button className='w-full'>Do zbiórki</Button>
					</Link>
					<p className='text-myGray2 text-[0.75rem] text-center'>Do celu: {data.totalGoal - totalFundraised} zł</p>
				</div>
			</article>
	)
}

export default Zbiorka