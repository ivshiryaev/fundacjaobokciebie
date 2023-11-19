import Link from 'next/link'

import Button from '@/components/button/Button'
import Image from 'next/image'
import DonationList from '@/components/shared/DonationList'
import IconBaloon from '@/components/shared/IconBaloon'

import Percentage from './Percentage'

import { BsPerson, BsFilePerson } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GiStethoscope } from 'react-icons/gi'

import { centsToValue } from '@/lib/utils'
import { countPercentage } from '@/lib/utils'

import Swiper from '@/components/swiper/ImageSwiper'
import Slide from '@/components/animations/Slide'

import { getZbiorkaByHref } from '@/lib/actions/zbiorka.actions'

async function Zbiorka({ params } : { params: { href: string }}) {
	const response = await getZbiorkaByHref(params.href)
	const data = JSON.parse(response)
	if(!data) return null

	const totalDonatedValue = centsToValue(data.totalDonated)
	const fundraisedPercentage = countPercentage(Number(totalDonatedValue), data.totalGoal)
	const toGoalValue = (data.totalGoal - Number(totalDonatedValue)).toFixed()

	return (
		<main
			className='
				flex flex-col
				lg:flex-row 
				lg:gap-[1rem]
				lg:py-[1rem]
				lg:px-[4rem]
				lg:container lg:mx-auto
			'
		>
			{/*Swiper with images PHONES*/}
			<div className='lg:hidden relative w-full h-[500px]'>
				<Swiper photosCount={data.photosCount} alt={data.name} href={data.href}/>
			</div>

			{/*Main left container*/}
			<div 
				className='
					py-[2rem] px-[1rem]
					flex flex-col gap-[1rem]
					lg:p-0 
					lg:w-3/5
				'
			>
				{/*TotalSum and donate button block for the mobiles*/}
				<div className='lg:hidden flex flex-col gap-[2rem]'>
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-[2rem]'>{data.name}</h1>
					</div>
					<div className='flex flex-col gap-[0.75rem]'>
						<div className='overflow-hidden relative outline outline-1 text-primary py-[0.5rem] rounded-[2rem]'>
							<div 
								style={{
									width: data.isFinished ? '100%' : `${fundraisedPercentage}%`,
								}}
								className='
									absolute 
									left-0 top-0 
									h-full 
									bg-green-200
									rounded-[2rem]
									animate-pulse
								'
							/>
							<div className='relative flex gap-[1rem] justify-center items-center'>
								<p className='font-bold text-[1.5rem]'>{totalDonatedValue} zł</p>
								<p>/</p>
								<p>{data.totalGoal} zł</p>
							</div>
						</div>
						<Link className='w-full' href={data.paymentLinkUrl || ''}>
							<Button className='w-full text-[1.5rem]'>
								Wspieram
							</Button>
						</Link>
						<div className='flex justify-center items-center'>
							<p className='text-myGray2 text-[0.875rem]'>Wpłat: {data.donations.length}</p>
						</div>
					</div>
				</div>

				{/*Swiper with images LAPTOP*/}
				<Slide 
					className='relative shadow-xl hidden lg:flex relative h-[500px] w-full rounded-[2rem] overflow-hidden'
					value={50}
					horizontalDirection='right'
				>
					<Swiper photosCount={data.photosCount} alt={data.name} href={data.href}/>
				</Slide>

				{/*Percentage*/}
				<Slide 
					className='hidden lg:flex'
					value={50}
					horizontalDirection='right'
				>
					<Percentage percentage={fundraisedPercentage}/>
				</Slide>

				{/*Info about zbiorka*/}
				<Slide 
					className='outline outline-1 shadow-xl outline-myGray flex flex-col rounded-[2rem] overflow-hidden'
					value={50}
					verticalDirection='up'
				>
					<div className='flex flex-col p-[1.5rem] bg-primary text-white'>
						<p className='text-[1.125rem] font-bold'>Cel zbiórki:</p>
						<p>{data.celZbiorki}</p>
					</div>
					<div className='
						p-[1.5rem]
						grid 
						grid-flow-row 
						gap-[0.5rem]
						grid-cols-2
					'>
						{data.name && 
							<div className='grow flex gap-[0.5rem] items-center'>
								<BsPerson size={18} className='text-myGray2'/>
								<p>{data.name}</p>
							</div>
						}
						{data.age !== 0 &&
							<div className='flex gap-[0.5rem] items-center'>
								<BsFilePerson size={18} className='text-myGray2'/>
								<p>{data.age} lat</p>
							</div>
						}
						{data.city && 
							<div className='flex gap-[0.5rem] items-center'>
								<HiOutlineLocationMarker size={18} className='text-myGray2'/>
								<p>{data.city}</p>
							</div>
						}
						{data.nazwaChoroby && 
							<div className='flex gap-[0.5rem] items-center'>
								<GiStethoscope size={18} className='text-myGray2'/>
								<p>{data.nazwaChoroby}</p>
							</div>
						}
					</div>
				</Slide>

				{data.isFinished && data.finishedAt &&
					<Slide 
						className='flex flex-col justify-center items-center text-center shadow-xl p-[1.5rem] bg-primary rounded-[2rem] text-white'
						value={50}
						verticalDirection='up'
					>
						<p className='text-[1.125rem] font-bold'>Zbiórka zakończona !</p>
						<p className=''>{data.finishedAt}</p>
					</Slide>
				}

				{/*Opis zbiórki*/}
				{data.opisChoroby &&
					<Slide 
						className='outline outline-1 shadow-xl outline-myGray flex flex-col rounded-[2rem] overflow-hidden'
						value={50}
						verticalDirection='up'
					>
						<div className='text-white bg-primary p-[1.5rem]'>
							<p className='text-[1.125rem] font-bold'>Opis zbiórki</p>
						</div>
						<div className='p-[1.5rem]'>
							<p className='whitespace-pre-wrap'>{data.opisChoroby}</p>
						</div>
					</Slide>
				}

				{data.startedAt && 
					<Slide 
						className='flex flex-col justify-center items-center text-center shadow-xl p-[1.5rem] bg-primary rounded-[2rem] text-white'
						value={50}
						verticalDirection='up'
					>
						<p className='text-[1.125rem] font-bold'>Rozpoczęcie zbiórki</p>
						<p className=''>{data.startedAt}</p>
					</Slide>
				}

				{/*Donations on the mobile*/}
				{data?.donations &&
					<div className='lg:hidden outline outline-1 shadow-xl outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
						<div className='text-white bg-primary p-[1.5rem]'>
							<p className='text-[1.125rem] text-center font-bold'>Ostatnie Wpłaty</p>
						</div>
						<DonationList donations={data.donations}/>
					</div>
				}
			</div>

			{/*Payment section on the laptop*/}
			<Slide 
				className='
					sticky top-[0.5rem]
					hidden
					lg:flex
					w-2/5
					h-min
					outline outline-1 outline-myGray 
					flex-col 
					rounded-[2rem] 
					overflow-hidden
					shadow-xl
				'
				value={50}
				horizontalDirection='left'
			>
				<div className={`relative flex gap-[0.5rem] text-white p-[1.5rem] bg-primary `}>
					<p className='relative text-[1.25rem] font-bold'>{data.name}</p>
				</div>
				<div className='p-[1.5rem]'>
					<div className='flex flex-col gap-[0.25rem]'>
						<div className={`overflow-hidden relative outline outline-1 outline-myGray last:outline-none text-primary py-[0.75rem] rounded-[2rem]`}>
							{/*Percentage */}
							{/*<div 
								style={{
									width: data.isFinished ? '100%' : `${fundraisedPercentage}%`,
								}}
								className='
									absolute 
									left-0 top-0 
									h-full 
									bg-primary
									animate-pulse
								'
							/>*/}
							{/*Value donated*/}
							<div className='relative flex gap-[1rem] justify-center items-center'>
								<p className='font-bold text-[1.5rem]'>
									{totalDonatedValue} zł
								</p>
								<p>/</p>
								<p>{data.totalGoal} zł</p>
							</div>
						</div>
						{ data.isFinished ?
							<div className='
								w-full rounded-[2rem] bg-success py-[1rem] flex justify-center text-white font-bold text-[1.25rem]
							'>
								Zbiórka zakończona !
							</div>
							:
							<>
								<Link className='w-full' href={data.paymentLinkUrl || ''}>
									<Button className='text-[1.25rem] w-full'>
										Wspieram
									</Button>
								</Link>
								<div className='flex justify-center items-center'>
									<p className='text-myGray2 text-[0.875rem]'>Wpłat: {data.donations.length}</p>
								</div>
							</>
						}
					</div>
				</div>
				{data.isFinished && 
					<div className='p-[1.5rem] text-center outline outline-1 outline-myGray'>
						Dziękujemy każdemu za wsparcie oraz zaufanie :)
					</div>
				}
				<DonationList donations={data.donations}/>
			</Slide>
		</main>
	)
}

export default Zbiorka