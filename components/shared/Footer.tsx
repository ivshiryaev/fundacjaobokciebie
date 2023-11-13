import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import { BsInstagram, BsFacebook } from 'react-icons/bs'

import data from '@/constants/data'

function Footer() {
	return (
		<footer 
			className='
				text-white text-center font-light
				w-full bg-primary
				flex flex-col gap-[1rem]
				justify-center items-center
				px-[1rem] py-[2rem]
			'
		>
			<div className='flex gap-[0.5rem]'>
				<Link href='test'>
					<BsInstagram className='hover:scale-105 cursor-pointer' size={36}/>
				</Link>
				<Link href='test'>
					<BsFacebook className='hover:scale-105 cursor-pointer' size={36}/>
				</Link>
			</div>
			<p className='whitespace-pre-line'>
				{data.footer.mainInfo}
			</p>
			<p className='whitespace-pre-line'>
				{data.footer.governmentNumbers}
			</p>
			<div className='flex flex-col'>
				<p>Nr konta:</p>
				<p>{data.footer.bankAccountNumber}</p>
			</div>
			<div className='flex flex-col'>
				{data.footer.links.map((item,idx) => (
					<Link 
						key={idx} 
						href={item.href}
						className='hover:underline'
					>
						{item.title}
					</Link>
				))}
			</div>
			<div 
				className='
					relative 
					w-[100px] h-[100px] 
					cursor-pointer 
					hover:drop-shadow-lg
					hover:scale-105
				'
			>
				<Image
					src='/images/logo.png'
					alt='logo'
					fill
				/>
			</div>
		</footer>
	)
}

export default Footer