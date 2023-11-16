import IconBaloon from '@/components/shared/IconBaloon'

import { countBaloons, centsToValue } from '@/lib/utils'

function Donation({
	name,
	comment,
	amount,
	date,
	displayInRow = false,
	className
} : {
	name: string,
	comment: string,
	amount: number,
	date: string,
	displayInRow: boolean,
	className?: string
}) {

	const convertedValue = centsToValue(amount)

	if(displayInRow){
		return(
			<article className='flex flex-col w-full h-full'>
				<div className='p-[1.5rem] flex flex-col gap-[1rem]'>
					<div className='flex gap-[1rem] items-center'>
						<IconBaloon
							baloons={countBaloons(Number(convertedValue))}
						/>
						<div className='flex flex-col grow'>
							<p className='text-[0.875rem] text-primary'>{name}</p>
							<p className='text-[0.750rem] text-myGray2'>{date}</p>
						</div>
						<div className='flex justify-end items-center'>
							<p className='text-[1.5rem] w-max font-bold text-primary'>{convertedValue} zł</p>
						</div>
					</div>
					{comment && <p>{comment}</p>}
				</div>
			</article>
		)
	}

	return (
		<article 
			className={`
				w-full h-full
				outline outline-1 outline-primary
				flex
				flex-col justify-center items-center
				gap-[0.5rem]
				p-[1.5rem]
				rounded-[2rem]
				text-center
				transition
				hover:shadow-lg
				${className && className}
			`}
		>
			<IconBaloon
				baloons={countBaloons(Number(convertedValue))}
			/>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-[0.875rem] text-primary'>
					{name}
				</p>
				<p className='text-[0.750rem] text-myGray2'>
					{date}
				</p>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<p className='font-bold text-[1.5rem] text-primary'>
					{convertedValue} zł
				</p>
				{comment && 
					<p className='text-[0.875rem]'>
						{comment}
					</p>
				}
			</div>
		</article>
	)
}

export default Donation