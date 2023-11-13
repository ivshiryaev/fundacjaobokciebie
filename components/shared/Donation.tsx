import IconBaloon from '@/components/shared/IconBaloon'
import { centsToValue, countBaloons, convertUnixTimeFormatToDDMMYYYY } from '@/lib/utils'

function Donation({
	custom_fields = [],
	displayInRow,
	date,
	value,
	className,
} : {
	custom_fields?: any,
	displayInRow?: boolean,
	date: number,
	value: number,
	className?: string,
}) {

	let name = "Anonimowa wpłata"
	let comment = ''

	//If both of the custom fields have type 'text' 
	if(custom_fields[0]?.type === 'text' && custom_fields[1]?.type === 'text'){
		name = custom_fields[0].text.value || 'Anonimowa wpłata'
		comment = custom_fields[1].text.value || ''
	} else if(custom_fields[0]?.type === 'text'){
		comment = custom_fields[0].text.value
	}

	const convertedValue = centsToValue({valueInCents: value})
	const convertedDate = convertUnixTimeFormatToDDMMYYYY(date)

	if(displayInRow){
		return(
			<article className='flex flex-col w-full h-full'>
				<div className='p-[1.5rem] flex flex-col gap-[1rem]'>
					<div className='flex gap-[1rem] items-center'>
						<IconBaloon
							baloons={countBaloons(Number(convertedValue))}
						/>
						<div className='flex flex-col grow'>
							<p className='text-[0.875rem]'>{name ? name : 'Anonimowa wpłata'}</p>
							<p className='text-[0.750rem] text-myGray2'>{convertedDate}</p>
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
				outline outline-1
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
				<p className='text-[0.875rem]'>
					{name}
				</p>
				<p className='text-[0.750rem] text-myGray2'>
					{convertedDate}
				</p>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<p className='font-bold text-[1.5rem]'>
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