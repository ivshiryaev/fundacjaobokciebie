import Section from '@/components/shared/Section'

export default function Loading() {
	return (
		<Section 
			className='
				container mx-auto
				text-primary
				animate-pulse
			'
		>
			<div className='bg-myGray rounded-[2rem] w-[12rem] h-[1.5rem]'>
			</div>
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
				{[...Array(3)].map((item,idx) => (
					<div
						key={idx}
						className='
							w-full
							text-myGray
							flex flex-col
							justify-center items-center
							rounded-[2rem]
							overflow-hidden
							transition
							outline outline-1
							hover:shadow-lg
						'
					>
						<div className='
							w-full
							relative
							h-[300px]
						'>
						</div>
						<div className='
							w-full
							p-[1.5rem]
							flex flex-col gap-[0.5rem]
							outline outline-1
						'>
							<div className='
								bg-myGray 
								w-[8rem] h-[1rem] 
								rounded-[2rem]
							'/>
							<div className='
								bg-myGray 
								w-[12rem] h-[1rem] 
								rounded-[2rem]
							'/>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}