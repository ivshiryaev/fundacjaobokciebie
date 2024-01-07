'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function FlyingBaloon() {

	const ref = React.useRef(null)

	return (
		<motion.div ref={ref} className='absolute inset-16 border'>
			<Image
				src='/art/Baloon.svg'
				width={48}
				height={48}
				alt='baloon'
			/>
		</motion.div>
	)
}

export default FlyingBaloon