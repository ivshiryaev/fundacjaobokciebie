import Image from 'next/image'
import { snap } from '@/app/fonts'

export default function Loading() {
	return (
		<div className='animate-pulse h-screen w-full flex flex-col justify-center items-center'>
			<Image
				className=''
				src='/icons/Group 1.svg'
				width={120}
				height={120}
				alt='Baloon'
			/>
			<p className={`${snap.className} text-[2rem] text-primary`}>Fundacja Obok Ciebie</p>
			<p className='text-sm'>
				Zawsze jesteśmy <span className='text-primary'>obok ciebie</span> żeby pomóc :)
			</p>
		</div>
	)
}