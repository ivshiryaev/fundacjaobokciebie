import Image from 'next/image'
import Button from '@/components/button/Button'
import Link from 'next/link'

import { centsToValue } from '@/lib/utils'
import { countPercentage } from '@/lib/utils'

import { getZbiorkaById } from '@/lib/actions/zbiorka.actions'
import Slide from '@/components/animations/Slide'

async function Zbiorka({id}:{id: string}) {
	const response = await getZbiorkaById(id)
	const data = JSON.parse(response)
	if(!data) return null

	const totalDonatedValue = centsToValue(data.totalDonated)
	const fundraisedPercentage = countPercentage(Number(totalDonatedValue), data.totalGoal)
	const toGoalValue = (data.totalGoal - Number(totalDonatedValue)).toFixed()

	return (
			<Slide verticalDirection='up' className='w-full h-full'>
				<article
					className={`
						w-full h-full
						flex flex-col
						justify-between items-center
						rounded-[2rem]
						overflow-hidden
						transition
						outline outline-1 outline-myGray
						hover:shadow-lg
					`}
				>
					<Link
						href={`Zbiorka/${data.href}`}
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
							src={`/images/zbiorki/${data.href}/1.jpg`}
							alt={data.name}
							fill
						/>
						{data.isFinished ?
							<div className='top-3 right-3 text-success font-semibold absolute px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]'>
								Udało się ! :)
							</div>
							:
							<div className='top-3 right-3 text-primary absolute px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]'>
								Wpłat: {data.donations.length}
							</div>
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
							<p className='text-myGray2'>{data.nazwaChoroby}</p>
						</div>
						<div className='flex flex-col gap-[0.5rem]'>
							<p className='text-[0.750rem] text-myGray2'>
								Uzbieraliśmy: {totalDonatedValue} zł
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
						<Link href={`Zbiorka/${data.href}`}>
						{data.isFinished ?
							<Button className='w-full bg-success'>Zbiórka zakończona</Button>
							:
							<Button className='w-full'>Do zbiórki</Button>
						}
						</Link>
						<p className='text-myGray2 text-[0.75rem] text-center'>
							Do celu: {toGoalValue} zł
						</p>
					</div>
				</article>
			</Slide>
	)
}

export default Zbiorka