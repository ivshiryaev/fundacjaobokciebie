'use client'

import React from 'react'
import {motion} from 'framer-motion'

function FadeIn({
	duration = 0.3,
	children, 
	className
} : {
	duration?: number,
	children?: React.ReactNode,
	className?: string
}) {
	return (
		<motion.div
			className={className}
			transition={{
				duration
			}}
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity:1,
			}}
			viewport={{
				once: true 
			}}
		>
			{children}
		</motion.div>
	)
}

export default FadeIn