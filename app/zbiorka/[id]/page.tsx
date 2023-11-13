import Link from 'next/link'

import Button from '@/components/button/Button'
import Image from 'next/image'
import { countPercentage } from '@/lib/utils'
import Donation from '@/components/shared/Donation'
import Section from '@/components/'

import { BsPerson, BsFilePerson } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GiStethoscope } from 'react-icons/gi'

import IconBaloon from '@/components/shared/IconBaloon'
import { centsToValue } from '@/lib/utils'

import ZbiorkiJSON from '@/constants/Zbiorki'

import { getPaidCheckoutSessionsByPaymentLinkId } from '@/lib/actions/stripe.actions.ts'

async function Zbiorka({ params } : { params: { id: string }}) {

	//Limit count of displayed donations
	const limitDonationsToDisplay = 9

	// Get data about the zbiorka
	const data = ZbiorkiJSON.find(zbiorka => zbiorka.href === params.id)
	if(!data) return null

	//Get all the donations
	const { paidCheckoutSessions:donations, totalDonatedValue } = await getPaidCheckoutSessionsByPaymentLinkId({
		paymentLinkId: data.paymentLinkId || null,
	})

	//Get total fundraised amount
	const totalFundraised = centsToValue({valueInCents: totalDonatedValue})
	const fundraisedPercentage = countPercentage(totalFundraised, data.totalGoal)

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
			{/*Image for the small screen*/}
			<div className='lg:hidden relative w-full h-[500px]'>
				<Image
					className='object-cover'
					src={`/images/${data.href}.jpg`}
					fill
					alt={data.name}
				/>
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
									width:`${fundraisedPercentage}%`,
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
								<p className='font-bold text-[1.5rem]'>{totalFundraised} zł</p>
								<p>/</p>
								<p>{data.totalGoal} zł</p>
							</div>
						</div>
						<Button className='text-[1.5rem]'>
							Wspieram
						</Button>
					</div>
				</div>

				{/*Image for the laptops*/}
				<div className='hidden lg:flex relative h-[500px] rounded-[2rem] overflow-hidden'>
					<Image
						className='object-cover pointer-events-none'
						src={`/images/${data.href}.jpg`}
						fill
						alt={data.name}
					/>
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
						<div className='grid gap-[0.5rem]'>
							<div className='flex gap-[0.5rem] items-center'>
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
							<p className='font-light'>24.10.2023</p>
						</div>
						<div className='p-[1.5rem]'>
							<p className='whitespace-pre-line'>{data.opisChoroby}</p>
						</div>
					</div>
				}

				{/*Donations on the mobile*/}
				<div className='lg:hidden outline outline-1 outline-primary flex flex-col rounded-[2rem] overflow-hidden'>
					<div className='text-white bg-primary p-[1.5rem]'>
						<p className='text-[1.125rem] text-center font-bold'>Ostatnie Wpłaty</p>
					</div>
					<div className='text-primary'>
						{donations.slice(0,limitDonationsToDisplay).map((item,idx)=>(
							<Donation
								displayInRow
								key={idx}
								custom_fields={item?.custom_fields}
								date={item.created}
								value={item.amount_total}
							/>
						))}
						{/*<Donation
							className='outline-none rounded-none border-b border-primary hover:shadow-none'
							name='Wiktor Zambrowicz'
							date='12.03.2023 16:30:31'
							value='2000'
							comment='Powodzonka !'
						/>
						<Donation
							className='outline-none rounded-none border-b border-primary hover:shadow-none'
							name='Anonimowa wpłata'
							date='01.02.2022 13:01:31'
							value='5000'
						/>
						<Donation
							className='outline-none rounded-none border-b border-primary hover:shadow-none last:border-none'
							name='Anonimowa wpłata'
							date='01.02.2022 13:01:31'
							value='10000'
						/>*/}
					</div>
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
							<div className='overflow-hidden relative outline outline-1 text-primary py-[0.5rem] rounded-[2rem]'>
								<div 
									style={{
										width:`${fundraisedPercentage}%`,
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
									<p className='font-bold text-[1.5rem]'>{totalFundraised} zł</p>
									<p>/</p>
									<p>{data.totalGoal} zł</p>
								</div>
							</div>
							<Link className='w-full' href={data.paymentLinkUrl}>
								<Button className='text-[1.25rem] w-full'>
									Wspieram
								</Button>
							</Link>
							<div className='flex justify-center items-center'>
								<p className='text-myGray2 text-[0.875rem]'>Wpłat: {donations.length}</p>
							</div>
						</div>
					</div>
					{donations &&
						<div className='outline outline-1 outline-myGray'>
							{donations.slice(0,limitDonationsToDisplay).map((item,idx)=>(
								<Donation
									displayInRow
									key={idx}
									custom_fields={item?.custom_fields}
									date={item.created}
									value={item.amount_total}
								/>
							))}
							{/*<Donation
								displayInRow
								name='Bartek'
								value='2000'
								comment='Powodzonka!'
							/>
							<Donation
								displayInRow
								value='5000'
								comment='Życze zdrówka no i żeby się udało osiągnąć cel! A no i wszystkiego najlepszego'
							/>
							<Donation
								displayInRow
								name='Bartek'
								value='2000'
								comment='Powodzonka!'
							/>*/}
						</div>
					}
				</div>
			</div>
		</main>
	)
}

export default Zbiorka