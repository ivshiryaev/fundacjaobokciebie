import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestDonations from '@/components/sections/LatestDonations'
import Zbiorki from '@/components/sections/Zbiorki'
import ZarejestrujZbiorke from '@/components/sections/ZarejestrujZbiorke'
import Documents from '@/components/sections/Documents'
import Wolontariat from '@/components/sections/Wolontariat'
import ContactUs from '@/components/sections/ContactUs'
import Divider from '@/components/shared/Divider'

// revalidatePath('/') - in server actions isn't working
// so i decided to make this page dynamically rendered
export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Strona Główna',
	description: 'Nasza fundacja pomaga w trudnych sytuacjach życiowych, wspierając osoby niepełnosprawne, seniorów oraz promując zdrowy tryb życia. Załóż zbiórkę już dziś!',
	alternates: {
        canonical: '/',
    },
}

function LandingPage() {
	return (
		<main 
			className='
				flex flex-col 
				justify-center items-center
				min-h-[100vh]
			'
		>
			<Hero/>
			<Divider inverted/>
			<About/>
			<Divider/>
			<LatestDonations/>
			<Zbiorki preview/>
			<Divider inverted/>
			<ZarejestrujZbiorke/>
			<Divider/>
			<Documents/>
			<Divider inverted/>
			<Wolontariat/>
			<Divider/>
			<ContactUs/>
		</main>
	)
}

export default LandingPage