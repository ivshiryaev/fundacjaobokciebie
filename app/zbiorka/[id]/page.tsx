import Link from 'next/link'

import Button from '@/components/button/Button'
import Image from 'next/image'
import { countPercentage } from '@/lib/utils'
import DonationList from '@/components/shared/DonationList'

import { BsPerson, BsFilePerson } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GiStethoscope } from 'react-icons/gi'

import IconBaloon from '@/components/shared/IconBaloon'
import { centsToValue } from '@/lib/utils'

import Swiper from '@/components/swiper/ImageSwiper'

import ZbiorkiJSON from '@/constants/Zbiorki.json'

import { getPaidCheckoutSessionsByPaymentLinkId } from '@/lib/actions/stripe.actions'

import Slide from '@/components/animations/Slide'

interface dataInterface {
	photos:{ name: string, href: string }[],
	name?: string,
	description?: string,
	age?: number,
	city?: string,
	opisChoroby?: string,
	totalGoal: number,
	href?: string,
	paymentLinkId?: string,
	paymentLinkUrl?: string,
	zbiorkaId?: string,
	isFinished?: boolean,
}

async function Zbiorka({ params } : { params: { id: string }}) {

	// Get data about the zbiorka
	const data: dataInterface | undefined = ZbiorkiJSON.find(zbiorka => zbiorka.href === params.id)
	if(!data) return null

	//Get all the donations
	const response = await getPaidCheckoutSessionsByPaymentLinkId({
		paymentLinkId: data.paymentLinkId || '',
	})

	const donations = response.paidCheckoutSessions
	const totalDonatedValue = response.totalDonatedValue

	//Get total fundraised amount
	const convertedTotalDonatedValue = centsToValue({valueInCents: totalDonatedValue})
	const fundraisedPercentage = countPercentage(Number(convertedTotalDonatedValue), data.totalGoal)	

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
				<Swiper data={data.photos}/>
			</div>

			{/*Main left container*/}
			<div className='
				py-[2rem] px-[1rem]
				flex flex-col gap-[1rem]
				lg:p-0 
				lg:w-3/5
			'>
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
								<p className='font-bold text-[1.5rem]'>{convertedTotalDonatedValue} zł</p>
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
							<p className='text-myGray2 text-[0.875rem]'>Wpłat: {donations.length}</p>
						</div>
					</div>
				</div>

				{/*Swiper with images LAPTOP*/}
				<div className='outline outline-1 outline-myGray hidden lg:flex relative h-[500px] rounded-[2rem] overflow-hidden'>
					<Swiper data={data.photos}/>
				</div>

				{/*Szczegóły zbiórki*/}
				<div className='outline outline-1 outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
					<div className='text-white bg-primary p-[1.5rem]'>
						<p className='text-[1.125rem] font-bold'>Szczegóły zbiórki</p>
					</div>
					<div className='p-[1.5rem] flex flex-col gap-[1rem]'>
						<div className='flex flex-col gap-[0.5rem]'>
							<p className='text-myGray2'>Cel zbiórki:</p>
							<p>Finansowanie turnusu rehabilitacyjnego w specjalistycznym ośrodku</p>
						</div>
						<div className='
							grid 
							grid-flow-row 
							gap-[0.5rem]
							grid-cols-2
						'>
							<div className='grow flex gap-[0.5rem] items-center'>
								<BsPerson size={18} className='text-myGray2'/>
								<p>{data.name}</p>
							</div>
							<div className='flex gap-[0.5rem] items-center'>
								<BsFilePerson size={18} className='text-myGray2'/>
								<p>{data.age} lat</p>
							</div>
							<div className='flex gap-[0.5rem] items-center'>
								<HiOutlineLocationMarker size={18} className='text-myGray2'/>
								<p>{data.city}</p>
							</div>
							<div className='flex gap-[0.5rem] items-center'>
								<GiStethoscope size={18} className='text-myGray2'/>
								<p>{data.description}</p>
							</div>
						</div>
					</div>
				</div>

				{/*Opis zbiórki*/}
				{data.opisChoroby &&
					<div className='outline outline-1 outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
						<div className='text-white bg-primary p-[1.5rem]'>
							<p className='text-[1.125rem] font-bold'>Opis zbiórki</p>
						</div>
						<div className='p-[1.5rem]'>
							<p className='whitespace-pre-line'>{data.opisChoroby}</p>
						</div>
					</div>
				}

				{/*Donations on the mobile*/}
				<div className='lg:hidden outline outline-1 outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
					<div className='text-white bg-primary p-[1.5rem]'>
						<p className='text-[1.125rem] text-center font-bold'>Ostatnie Wpłaty</p>
					</div>
					{donations &&
						<DonationList donations={donations}/>
					}
				</div>
			</div>

			{/*Payment section on the laptop*/}
			<div className='
				sticky top-[0.5rem]
				hidden
				lg:flex
				w-2/5
				h-min
			'>
				<div className='w-full outline outline-1 outline-myGray flex flex-col rounded-[2rem] overflow-hidden'>
					<div className='relative flex gap-[0.5rem] text-white bg-primary p-[1.5rem]'>
						<p className='relative text-[1.25rem] font-bold'>{data.name}</p>
					</div>
					<div className='p-[1.5rem]'>
						<div className='flex flex-col gap-[0.75rem]'>
							<div className='overflow-hidden relative outline outline-1 last:outline-none text-primary py-[0.5rem] rounded-[2rem]'>
								<div 
									style={{
										width: data.isFinished ? '100%' : `${fundraisedPercentage}%`,
									}}
									className='
										absolute 
										left-0 top-0 
										h-full 
										bg-green-200
										animate-pulse
									'
								/>
								<div className='relative flex gap-[1rem] justify-center items-center'>
									<p className='font-bold text-[1.5rem]'>
										{data.isFinished ? data.totalGoal : convertedTotalDonatedValue} zł
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
								<Link className='w-full' href={data.paymentLinkUrl || ''}>
									<Button className='text-[1.25rem] w-full'>
										Wspieram
									</Button>
								</Link>
							}
							{ donations.length>0 && 
								<div className='flex justify-center items-center'>
									<p className='text-myGray2 text-[0.875rem]'>Wpłat: {donations.length}</p>
								</div>
							}
						</div>
					</div>
					{donations &&
						<DonationList donations={donations}/>
					}
				</div>
			</div>
		</main>
	)
}

export default Zbiorka