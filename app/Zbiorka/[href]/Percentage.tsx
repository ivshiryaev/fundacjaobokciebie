'use client'

import { motion } from 'framer-motion'

function Percentage({percentage}:{percentage: number}) {
	return (
		<div className='relative w-full h-[1.75rem] flex justify-center items-center rounded-[2rem] shadow-xl overflow-hidden'>
			<motion.div 
				className={`absolute rounded-full left-0 top-0 h-full ${percentage >= 100 ? 'bg-success' : 'bg-primary'}`}
				initial={{
					width: 0
				}}
				animate={{
					width: `${percentage}%`
				}}
				transition={{
					type: 'spring',
					bounce: 0.4,
					damping: 6
				}}
			>
			</motion.div>
			<p className='relative text-[0.75rem] text-black'>{percentage}% / 100%</p>
		</div>
	)
}

export default Percentage