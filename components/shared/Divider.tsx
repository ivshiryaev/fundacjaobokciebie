import Image from 'next/image'

const classNames = ['w-full h-full fill-primary drop-shadow-md','w-full h-full fill-primary drop-shadow-md scale-y-[-1]']

function Divider({inverted}:{inverted: boolean}) {
	return (
		<svg 
			className={`w-full h-full fill-primary drop-shadow-md translate-y-[-1px] ${inverted &&  'scale-y-[-1] !translate-y-[1px]'}`} 
			viewBox="0 0 1366 100" 
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M-67 0H1433C1433 0 1405.71 78.3454 1230.71 76.3271C1133.74 75.2086 1154.01 58.3992 1024.6 49.7943C848.967 38.1158 829.193 101.991 627.657 99.9522C449.682 98.1516 401.719 35.2069 242.16 53.429C194.685 58.8508 193.814 68.1443 144.832 73.0559C-6.58813 88.2393 -67 0 -67 0Z"/>
		</svg>
	)
}

export default Divider