'use client'

import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import { BsInstagram, BsFacebook } from 'react-icons/bs'

import data from '@/constants/data.json'

function Footer() {
	return (
		<footer 
			className='
				relative
				text-white text-center font-light
				w-full bg-primary
				flex flex-col gap-[1rem]
				justify-center items-center
				px-[1rem] py-[2rem]
			'
		>
			<div className='flex gap-[0.5rem]'>
				<Link href='https://www.instagram.com/fundacjaobokciebie' target='_blank'>
					<BsInstagram className='hover:scale-105 cursor-pointer' size={36}/>
				</Link>
				<Link href='https://www.facebook.com/fundacjaobokciebie' target='_blank'>
					<BsFacebook className='hover:scale-105 cursor-pointer' size={36}/>
				</Link>
			</div>
			<p className='whitespace-pre-line'>
				{data.footer.mainInfo}
			</p>
			<div className='flex flex-col'>
				<Link href={`tel://${data.footer.phoneNumber}`}>{data.footer.phoneNumber}</Link>
				<Link href={`mailto:${data.footer.email}`}>{data.footer.email}</Link>
			</div>
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
					transition
				'
			>
				<Link href='/'>
					<Image
						src='/images/logo.png'
						alt='logo'
						fill
					/>
				</Link>
			</div>
			<div className='w-full items-center flex justify-center'>
				<p className='text-[0.75rem] text-myGray text-center w-full'>Fundacja Obok Ciebie. Wszystkie prawa zastrzeżone</p>
			</div>
		</footer>
	)
}

export default Footer