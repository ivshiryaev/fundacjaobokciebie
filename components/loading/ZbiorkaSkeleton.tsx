function ZbiorkaSkeleton() {
	return (
		<div
			className='
				animate-pulse
				text-myGray
				flex flex-col
				lg:flex-row 
				lg:gap-[1rem]
				lg:py-[1rem]
				lg:px-[4rem]
				lg:container lg:mx-auto
			'
		>
			{/*Image for the small screen*/}
			<div className='lg:hidden relative w-full h-[500px] border-b border-myGray'>
				<div
					className='object-cover'
				/>
			</div>

			{/*Main left container*/}
			<div className='
				w-full
				py-[2rem] px-[1rem]
				flex flex-col gap-[1rem]
				lg:p-0 
				lg:w-3/5
			'>
				{/*Image for the laptops*/}
				<div className='
					hover:shadow-xl
					rounded-[2rem] 
					outline outline-1 
					hidden lg:flex 
					relative h-[500px] 
					rounded-[2rem] overflow-hidden
					transition
				'>
				</div>

				{/*Name*/}
				<div className='flex justify-center items-center'>
					<div className='bg-myGray w-[12rem] h-[1.25rem] rounded-[2rem]'/>
				</div>

				{/*Description*/}
				<div className='
					hover:shadow-xl
					transition
					flex flex-col
					rounded-[2rem] 
					outline outline-1 
					lg:flex 
					relative rounded-[2rem] overflow-hidden
				'>
					{/*Top*/}
					<div className='p-[1.5rem] flex flex-col gap-[0.5rem] border-b border-myGray'>
						<div className='
							bg-myGray w-[4rem] h-[1rem] rounded-[2rem]
						'/>
						<div className='
							bg-myGray w-[8rem] h-[1rem] rounded-[2rem]
						'/>
					</div>
					{/*Bottom*/}
					<div className='p-[1.5rem] flex flex-col gap-[0.5rem]'>
						<div className='
							bg-myGray w-[16rem] h-[0.75rem] rounded-[2rem]
						'/>
						<div className='
							bg-myGray w-[8rem] h-[0.75rem] rounded-[2rem]
						'/>
					</div>
				</div>

				{/*Description 2*/}
				<div className='
					hover:shadow-xl
					transition
					flex flex-col
					rounded-[2rem] 
					outline outline-1 
					lg:flex 
					relative rounded-[2rem] overflow-hidden
				'>
					{/*Top*/}
					<div className='p-[1.5rem] flex flex-col gap-[0.5rem] border-b border-myGray'>
						<div className='
							bg-myGray w-[8rem] h-[1rem] rounded-[2rem]
						'/>
					</div>
					{/*Bottom*/}
					<div className='p-[1.5rem] flex flex-col gap-[0.5rem]'>
						<div className='
							bg-myGray w-[8rem] h-[0.75rem] rounded-[2rem]
						'/>
						<div className='
							bg-myGray w-[16rem] h-[0.75rem] rounded-[2rem]
						'/>
					</div>
				</div>

				{/*Donations list*/}
				<div className='lg:hidden outline outline-1 outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
					<div className='p-[1.5rem] border-b border-myGray flex flex-col gap-[1rem]'>
						<div className='flex gap-[1rem] items-center justify-between'>
							<div className='w-[3rem] h-[3rem] bg-myGray rounded-full'/>
							<div className='flex flex-col gap-[0.5rem]'>
								<div className='w-[4rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
								<div className='w-[8rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
							</div>
							<div className='grow flex justify-end'>
								<div className='w-[3rem] h-[1.25rem] bg-myGray rounded-[2rem]'/>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='w-[16rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
						</div>
					</div>
					<div className='p-[1.5rem] border-b border-myGray flex flex-col gap-[1rem]'>
						<div className='flex gap-[1rem] items-center justify-between'>
							<div className='w-[3rem] h-[3rem] bg-myGray rounded-full'/>
							<div className='flex flex-col gap-[0.5rem]'>
								<div className='w-[4rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
								<div className='w-[8rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
							</div>
							<div className='grow flex justify-end'>
								<div className='w-[3rem] h-[1.25rem] bg-myGray rounded-[2rem]'/>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='w-[16rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
						</div>
					</div>
				</div>
			</div>

			{/*Payment section on the laptop*/}
			<div className='
				hover:shadow-xl
				transition
				overflow-hidden
				outline outline-1
				sticky top-[0.5rem]
				hidden
				lg:flex flex-col
				w-2/5
				h-min
				rounded-[2rem]
			'>
				{/*title*/}
				<div className='p-[1.5rem] border-b border-myGray'>
					<div className='
						bg-myGray w-[8rem] h-[1rem] rounded-[2rem]
					'/>
				</div>
				{/*Donate button*/}
				<div className='p-[1.5rem] border-b border-myGray'>
					<div className='
						bg-myGray w-[16rem] h-[1rem] rounded-[2rem]
					'/>
				</div>
				{/*Donations list*/}
				<div className='p-[1.5rem] border-b border-myGray flex flex-col gap-[1rem]'>
					<div className='flex gap-[1rem] items-center justify-between'>
						<div className='w-[3rem] h-[3rem] bg-myGray rounded-full'/>
						<div className='flex flex-col gap-[0.5rem]'>
							<div className='w-[4rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
							<div className='w-[8rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
						</div>
						<div className='grow flex justify-end'>
							<div className='w-[3rem] h-[1.25rem] bg-myGray rounded-[2rem]'/>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='w-[16rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
					</div>
				</div>
				<div className='p-[1.5rem] border-b border-myGray flex flex-col gap-[1rem]'>
					<div className='flex gap-[1rem] items-center justify-between'>
						<div className='w-[3rem] h-[3rem] bg-myGray rounded-full'/>
						<div className='flex flex-col gap-[0.5rem]'>
							<div className='w-[4rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
							<div className='w-[8rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
						</div>
						<div className='grow flex justify-end'>
							<div className='w-[3rem] h-[1.25rem] bg-myGray rounded-[2rem]'/>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='w-[16rem] h-[0.75rem] bg-myGray rounded-[2rem]'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ZbiorkaSkeleton