import Section from '@/components/shared/Section'
import Zbiorka from '@/components/cards/Zbiorka'

export default function Loading() {
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
			<div className='lg:hidden relative w-full h-[500px]'>
				<div
					className='object-cover'
				/>
			</div>

			{/*Main left container*/}
			<div className='
				py-[2rem] px-[1rem]
				flex flex-col gap-[1rem]
				lg:p-0 
				lg:w-3/5
			'>
				{/*Image for the laptops*/}
				<div className='
					rounded-[2rem] outline outline-1 hidden lg:flex relative h-[500px] rounded-[2rem] overflow-hidden
				'>
				</div>

				{/*Description*/}
				<div className='
					p-[1.5rem]
					flex flex-col gap-[1rem]
					rounded-[2rem] 
					outline outline-1 
					hidden lg:flex 
					relative h-[250px] rounded-[2rem] overflow-hidden
				'>
					<div className='
						bg-myGray w-[4rem] h-[1rem] rounded-[2rem]
					'/>
					<div className='
						bg-myGray w-[8rem] h-[1rem] rounded-[2rem]
					'/>
				</div>
			</div>

			{/*Payment section on the laptop*/}
			<div className='
				overflow-hidden
				outline outline-1
				sticky top-[0.5rem]
				hidden
				lg:flex flex-col gap-[1rem]
				w-2/5
				h-min
				rounded-[2rem]
			'>
				<div className='p-[1.5rem] flex flex-col gap-[1rem] outline outline-1'>
					<div className='
						bg-myGray w-[12rem] h-[1rem] rounded-[2rem]
					'/>
					<div className='
						bg-myGray w-[8rem] h-[1rem] rounded-[2rem]
					'/>
					<div className='
						bg-myGray w-full h-[1rem] rounded-[2rem]
					'/>
				</div>
				<div className='p-[1.5rem] flex flex-col gap-[1rem]'>
					<div className='
						bg-myGray w-[12rem] h-[1rem] rounded-[2rem]
					'/>
				</div>
			</div>
		</div>
	)
}