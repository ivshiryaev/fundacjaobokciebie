import React from 'react'

function Section(
	{children, className, isPage, id} : 
	{children?: React.ReactNode, className?: string, isPage?: boolean, id?: string}
	) {
	return (
		<section 
			id={id}
			className={`
				overflow-hidden
				w-full
				flex flex-col gap-[1rem]
				justify-center items-center
				px-[1rem]
				lg:px-[4rem]
				${isPage ? 'py-[1rem]' : 'py-[8rem]'}
				${className && className}
			`}
		>
			{children}
		</section>
	)
}

export default Section