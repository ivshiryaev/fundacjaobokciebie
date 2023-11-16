import Link from 'next/link'
import Button from '@/components/button/Button'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import data from '@/constants/data.json'

function Dokumenty() {
	return (
		<Section className='text-primary lg:container lg:mx-auto'>
			<h1
				className={`
					${snap.className}
					text-[2rem]
				`}
			>
				{data.documents.title}
			</h1>
			<h2 className='whitespace-pre-line text-center'>
				{data.documents.description}
			</h2>
			<div className='
				w-full 
				outline outline-1 
				p-[1.5rem] rounded-[2rem]
				flex flex-col gap-[1rem]
			'>
				<p className='text-[1.25rem] font-semibold'>
					{data.documents.mainInfo.title}
				</p>
				<p className='whitespace-pre-line'>
					{data.documents.mainInfo.description}
				</p>
				<p className='whitespace-pre-line font-semibold'>
					{data.documents.governmentNumbers}
				</p>
				<div className='flex flex-col'>
					<p>Nr konta</p>
					<p>{data.documents.nrKonta}</p>
				</div>
			</div>
			<div className='grid grid-flow-row lg:grid-flow-col gap-[1rem] w-full'>
				{data.documents.files.map((item,idx) => (
					<article key={idx} className='p-[1.5rem] rounded-[2rem] outline outline-1 flex flex-col gap-[0.5rem]'>
						<p className='font-semibold text-[1.25rem]'>{item.title}</p>
						<div className='flex gap-[1rem]'>
							<a href={`/documents/${item.fileName}`} download className='grow'>
								<Button className='grow w-full'>Pobierz</Button>
							</a>
							<Link href={`/documents/${item.fileName}`} target='_blank' className='grow'>
								<Button className='grow w-full' appearance='outline'>Otwórz</Button>
							</Link>
						</div>
					</article>
				))}
			</div>
			<div className='
				w-full 
				outline outline-1 
				p-[1.5rem] rounded-[2rem]
				flex flex-col gap-[1rem]
			'>
				<p className='font-semibold text-[1.25rem]'>{data.documents.zbiorkiPubliczne.title}</p>
				<p className='whitespace-pre-line'>{data.documents.zbiorkiPubliczne.description}</p>
			</div>
		</Section>
	)
}

export default Dokumenty