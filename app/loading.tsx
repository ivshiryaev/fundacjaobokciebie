import IconBaloon from '@/components/shared/IconBaloon'

export default function Loading() {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<IconBaloon className='animate-bounce'/>
		</div>
	)
}