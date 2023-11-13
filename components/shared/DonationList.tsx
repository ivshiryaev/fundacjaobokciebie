'use client'

import { useState } from 'react'
import Slide from '@/components/animations/Slide'
import Donation from '@/components/shared/Donation'
import Button from '@/components/button/Button'

function DonationList({donations}:{donations: any[]}) {
	const initialCount = 3
	const incrementor = 3

	const [displayCount, setDisplayCount] = useState(initialCount)

	function showMore(){
		if(displayCount > donations.length){
			setDisplayCount(donations.length)
		} else {
			setDisplayCount(displayCount + incrementor)
		}
	}

	function showLess(){
		setDisplayCount(initialCount)
	}

	return (
		<div className='outline outline-1 outline-myGray'>
			{donations.slice(0,displayCount).map((item,idx)=>(
				<Slide
					value={50}
					key={idx}
					verticalDirection='up'
					className='border-b last:border-none'
				>
					<Donation
						displayInRow
						key={idx}
						custom_fields={item?.custom_fields}
						date={item.created}
						value={item.amount_total}
					/>
				</Slide>
			))}
			{displayCount < donations.length ?
				<Slide
					value={50}
					verticalDirection='up'
					className='w-full h-full'
				>
					<Button onClick={showMore} className='w-full rounded-none !outline-none !border-none'>
						Pokaż więcej
					</Button>
				</Slide>
				: donations.length > 0 &&
				<Slide
					value={50}
					verticalDirection='up'
					className='w-full h-full'
				>
					<Button onClick={showLess} className='bg-transparent !text-primary w-full rounded-none !outline-none !border-none'>
						Pokaż mniej
					</Button>
				</Slide>
			}
		</div>
	)
}

export default DonationList