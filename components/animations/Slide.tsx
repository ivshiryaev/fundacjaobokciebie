'use client'

import React from 'react'
import {motion} from 'framer-motion'

function Slide({
	value = 50,
	verticalDirection,
	horizontalDirection,
	children, 
	className
} : {
	value?: number,
	verticalDirection?: string,
	horizontalDirection?: string,
	children?: React.ReactNode,
	className?: string
}) {
	return (
		<motion.div
			className={className}
			initial={{
				y: verticalDirection === 'up' ? value : verticalDirection === 'down' ? -value : 0,
				x: horizontalDirection === 'left' ? value : horizontalDirection === 'right' ? -value : 0,
				opacity: 0
			}}
			whileInView={{
				y:0,
				x:0,
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

export default Slide