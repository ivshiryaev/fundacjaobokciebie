'use client'

import { BiDonateHeart } from 'react-icons/bi'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/constants/data.json'

function Navbar() {
	const pathname = usePathname()

	return (
		<div className='
			hidden lg:flex
			container mx-auto 
			relative top-0 			flex justify-center
			pt-[1rem] px-[4rem] 
			z-10
		'>
			<div className='
				grow
				flex justify-between 
				gap-[1rem] 
				px-[1rem] py-[0.5rem]
				bg-white
				rounded-[2rem]
				shadow-md
			'>
				<div className='flex justify-center items-center gap-[0.5rem]'>
					<Link href='/'>
						<Image
							src='/icons/Baloon1.svg'
							width={36}
							height={36}
							alt='logo'
						/>
					</Link>
				</div>
				
				<nav className='flex justify-center items-center'>
					<ul className='flex gap-[0.5rem]'>
						{data.navbar.links.map((link,idx) => (
							<li key={idx}>
								<Link 
									href={link.href}
									className={`
										px-[1rem] py-[0.5rem] 
										text-[0.875rem]
										transition
										rounded-[2rem]
										hover:text-white
										hover:bg-primary
										${pathname === link.href && `
											bg-primary text-white
										`}
									`}
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link 
					href='https://donate.stripe.com/7sIaGTdxV6XM02A000'
					className={`
						w-[36px] h-[36px]
						flex justify-center items-center
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
					<BiDonateHeart/>
				</Link>
			</div>
		</div>
	)
}

export default Navbar