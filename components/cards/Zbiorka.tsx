import Image from 'next/image'
import Button from '@/components/button/Button'
import Link from 'next/link'

import { centsToValue } from '@/lib/utils'
import { countPercentage } from '@/lib/utils'

import ZbiorkiJSON from '@/constants/Zbiorki.json'
import Slide from '@/components/animations/Slide'

import { getPaidCheckoutSessionsByPaymentLinkId } from '@/lib/actions/stripe.actions'

interface dataInterface {
	photos:{ name: string, href: string }[],
	name?: string,
	description?: string,
	age?: number,
	opisChoroby?: string,
	totalGoal: number,
	href?: string,
	paymentLinkId?: string,
	paymentLinkUrl?: string,
	zbiorkaId?: string,
	isFinished?: boolean,
}

//TODO : change props naming
//TODO: rename alt props of the images
async function Zbiorka({href}:{href: string}) {

	// Get data about the zbiorka
	const data: dataInterface | undefined = ZbiorkiJSON.find(zbiorka => zbiorka.href === href)
	if(!data) return null

	// PRODUCTION
	// Get all the donations
	const { paidCheckoutSessions: donations, totalDonatedValue } = await getPaidCheckoutSessionsByPaymentLinkId({
		paymentLinkId: data.paymentLinkId || '',
	})

	// TESTING
	// const totalDonatedValue = 12077

	//Get total donated value
	const convertedTotalDonatedValue = centsToValue({valueInCents: totalDonatedValue})
	const fundraisedPercentage = countPercentage(Number(convertedTotalDonatedValue), data.totalGoal)

	return (
			<article
				className='
					w-full h-full
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
						relative
						w-full
						relative
						h-[300px]
						overflow-hidden
					'
				>
					<Image
						className='object-cover pointer-events-none'
						src={`/images/${data.href}.jpg`}
						fill
						alt='MariaKlausiuk'
					/>
					{data.isFinished &&
						<Slide 
							value={50}
							horizontalDirection='left'
						>
							<div className='top-3 right-3 text-success font-semibold absolute px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]'>
								Zbiórka zakończona
							</div>
						</Slide>
					}
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
							Uzbieraliśmy: {data.isFinished ? data.totalGoal : convertedTotalDonatedValue} zł
						</p>
						<div className='h-[0.25rem] bg-myGray rounded-full overflow-hidden'>
							<div 
								style={{
									width: data.isFinished ? '100%' : `${fundraisedPercentage}%`,
								}}
								className={`
									${data.isFinished ? 'bg-success' : 'bg-primary'} h-full
								`}
							>
							</div>
						</div>
						<p className='text-end text-[0.750rem] text-myGray2'>
							Cel: {data.totalGoal} zł
						</p>
					</div>
					<Link href={`zbiorka/${data.href}`}>
					{data.isFinished ?
						<Button className='w-full bg-success'>Do zbiórki</Button>
						:
						<Button className='w-full'>Do zbiórki</Button>
					}
					</Link>
					<p className='text-myGray2 text-[0.75rem] text-center'>
						Do celu: {data.totalGoal - (Number(convertedTotalDonatedValue))} zł
					</p>
				</div>
			</article>
	)
}

export default Zbiorka