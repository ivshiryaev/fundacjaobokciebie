import React from 'react'

import { snap } from '@/app/fonts'

function Button({
	disabled,
	onClick,
	children,
	className,
	appearance,
	fontSnap,
} : {
	disabled?: boolean,
	onClick?: () => void,
	children?: React.ReactNode,
	className?: string,
	appearance?: string,
	fontSnap?: boolean,
}) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
				disabled:opacity-25
				px-[2rem] py-[1rem]
				font-bold
				rounded-[2rem]
				transition
				duration-500
				hover:duration-150
				${appearance === 'outline' ? `
						text-primary outline outline-1
						hover:bg-primary
						hover:text-white
					` : `
						text-white bg-primary
						hover:bg-transparent
						hover:text-primary
						hover:outline hover:outline-1
						hover:outline-primary
				`}
				${className && className}
				${fontSnap && snap.className}
			`}
		>
			{children}
		</button>
	)
}

export default Button