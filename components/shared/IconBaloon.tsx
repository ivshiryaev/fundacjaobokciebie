import Image from 'next/image'

function IconBaloon({baloons = 1, className} : {baloons: number, className: string}) {
	return (
		<div 
			// className='
			// 	p-[0.875rem]
			// 	relative
			// 	bg-primary
			// 	flex justify-center items-center
			// 	text-white
			// 	rounded-full
			// 	w-[3rem] h-[3rem] 
			// '
		>
			<div>
				<Image
					className={`pointer-events-none ${className}`}
					src={`/icons/Baloon${baloons}.svg`}
					alt='baloons'
					width={48}
					height={48}
				/>
			</div>
		</div>
	)
}

export default IconBaloon