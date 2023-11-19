'use client'

import { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai"
import { BiDonateHeart } from 'react-icons/bi'
import { BsInstagram, BsFacebook } from "react-icons/bs"

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import links from '@/constants/NavbarLinks'

function Navbar() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(()=>{
		if(isOpen){
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
		return () => document.body.classList.remove('overflow-hidden')
	}, [isOpen])

	function handleLinkClick(){
		setIsOpen(false)
	}

	return (
		<>
			{/*Mobile menu*/}
			<AnimatePresence>
				{isOpen &&
						<motion.div 
							className={`
								lg:hidden
								fixed
								top-0 left-0
								w-full h-full
								p-[1rem]
								flex flex-col justify-center
								gap-[0.5rem]
								z-10
								bg-white
								overflow-x-hidden
								overflow-y-auto
							`}
							initial={{
								y:'100%'
							}}
							animate={{
								y:0
							}}
							exit={{
								y:'-100%'
							}}
							transition={{
								type: 'spring',
								damping: 15
							}}
						>
							{/*Home button for the mobile*/}
							<Link
								onClick={handleLinkClick}
								href='/'
								className={`
									lg:hidden
									flex
									p-[0.25rem]
									flex gap-[1rem]
									w-full
									transition
									rounded-[2rem]
									hover:text-white
									hover:bg-primary
									flex-row items-center
									text-[1rem]
									lg:text-[0.875rem]
									lg:w-fit
									lg:px-[1rem] lg:py-[0.5rem] 
									${pathname === '/' && `
										bg-primary text-white
									`}
								`}
							>
								<span className='
									lg:hidden
									text-primary
									bg-white
									w-[56px] h-[56px] 
									flex justify-center items-center 
									rounded-full
									text-[1.5rem]
								'>
									<AiOutlineHome/>
								</span>
								<p>Strona główna</p>
							</Link>
							
							<nav className='flex justify-center items-center'>
								<ul className='w-full lg:w-fit flex flex-col lg:flex-row gap-[0.5rem]'>
									{links.map((link,idx) => (
										<li key={idx}>
											<Link
												onClick={handleLinkClick}
												href={link.href}
												className={`
													p-[0.25rem]
													flex gap-[1rem]
													w-full
													transition
													rounded-[2rem]
													hover:text-white
													hover:bg-primary
													flex-row items-center
													text-[1rem]
													lg:text-[0.875rem]
													lg:w-fit
													lg:px-[1rem] lg:py-[0.5rem] 
													${pathname === link.href && `
														bg-primary text-white
													`}
												`}
											>
												<span className='
													lg:hidden
													text-primary
													bg-white
													w-[56px] h-[56px] 
													flex justify-center items-center 
													rounded-full
													text-[1.5rem]
												'>
													{link?.icon}
												</span>
												<p>{link.title}</p>
											</Link>
										</li>
									))}
								</ul>
							</nav>

							<div className='mt-[1rem] flex gap-[0.5rem] justify-center items-center'>
								{/*Instagram*/}
								<Link
									onClick={handleLinkClick}
									target='_blank'
									href='https://www.instagram.com/fundacjaobokciebie'
									className={`
										flex
										justify-center items-center
										text-primary text-[1.5rem]
										shadow-md
										rounded-full
										w-[56px] h-[56px]
									`}
								>
									<BsInstagram/>
								</Link>
								{/*Facebook*/}
								<Link
									onClick={handleLinkClick}
									href='https://www.facebook.com/fundacjaobokciebie'
									target='_blank'
									className={`
										flex
										justify-center items-center
										text-primary text-[1.5rem]
										shadow-md
										rounded-full
										w-[56px] h-[56px]
									`}
								>
									<BsFacebook/>
								</Link>
								{/*Donate button*/}
								<Link
									onClick={handleLinkClick}
									href='https://donate.stripe.com/7sIaGTdxV6XM02A000'
									target='_blank'
									className={`
										flex
										justify-center items-center
										text-primary text-[1.5rem]
										shadow-md
										rounded-full
										w-[56px] h-[56px]
									`}
								>
									<BiDonateHeart/>
								</Link>
							</div>

							<div className='mt-[2rem] flex flex-col justify-center items-center'>
								<Link className='text-myGray2' href='/PolitykaPrywatonsci'>
									Polityka Prywatnosci
								</Link>
								<Link className='text-myGray2' href='/RODO'>
									RODO
								</Link>
								<Link className='text-myGray2' href='/WarunkiPlatnosci'>
									Warunki płatnosci
								</Link>
							</div>

							<div className='absolute bottom-4 left-0 w-full items-center flex justify-center'>
								<p className='text-[0.75rem] text-myGray2 text-center w-full'>Fundacja Obok Ciebie. Wszystkie prawa zastrzeżone</p>
							</div>
						</motion.div>
				}
			</AnimatePresence>
			
			{/*Laptop menu*/}
			<div
				className={`
					hidden
					absolute
					top-0
					w-full
					lg:flex justify-center
					z-10
					bg-transparent
					pt-[1rem] px-[4rem] 
					h-min
				`}
			>
				<motion.div
					initial={{
						scale:0	
					}}
					animate={{
						scale:1
					}}
					transition={{
						type:'spring',
						bounce: 0.3
					}}
					className='
						w-full
						overflow-hidden
						flex-col
						flex justify-center
						px-[1rem] py-[0.5rem]
						bg-white
						gap-[0.5rem]
						lg:container lg:mx-auto 
						lg:gap-[1rem]
						lg:flex-row lg:justify-between
						lg:rounded-[2rem]
						lg:shadow-md
					'
				>
					{/*Baloon for the laptops*/}
					<Link
						href='/'
						className='relative w-[36px] h-[36px]'
					>
						<Image
							src='/icons/Baloon1.svg'
							fill
							alt='logo'
						/>
					</Link>
					
					<nav className='flex justify-center items-center'>
						<ul className='w-fit flex flex-row gap-[0.5rem]'>
							{links.map((link,idx) => (
								<li key={idx}>
									<Link
										href={link.href}
										className={`
											flex gap-[1rem]
											transition
											rounded-[2rem]
											hover:text-white
											hover:bg-primary
											flex-row items-center
											text-[0.875rem]
											w-fit
											px-[1rem] py-[0.5rem] 
											${pathname === link.href && `
												bg-primary text-white
											`}
										`}
									>
										<span className='
											lg:hidden
											text-primary
											bg-white
											w-[56px] h-[56px] 
											flex justify-center items-center 
											rounded-full
											text-[1.5rem]
										'>
											{link?.icon}
										</span>
										<p>{link.title}</p>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/*Donate button*/}
					<Link
						href='https://donate.stripe.com/7sIaGTdxV6XM02A000'
						className={`
							hidden lg:flex
							w-[56px] h-[56px]
							lg:w-[36px] lg:h-[36px]
							lg:flex justify-center items-center
							text-white
							outline outline-1 outline-primary
							rounded-full
							bg-primary
							hover:outline hover:outline-1
							hover:text-primary
							hover:bg-white
							transition
						`}
					>
						<BiDonateHeart size={20}/>
					</Link>
				</motion.div>
			</div>

			{/*BurgerMenu*/}
			<button 
				className='fixed top-[1rem] right-[1rem] z-10'
				onClick={()=>setIsOpen(!isOpen)}
			>
				<span className='
					shadow-md
					lg:hidden
					text-primary
					bg-white
					w-[56px] h-[56px] 
					flex justify-center items-center 
					rounded-full
					text-[1.5rem]
				'>
					{ isOpen ? <AiOutlineClose/> : <AiOutlineHome/> }
				</span>
			</button>
		</>
	)
}

export default Navbar