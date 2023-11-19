import Link from 'next/link'
import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

const WarunkiPlatnosci = () => (
	<Section className='container mx-auto !items-start leading-relaxed max-w-[48rem]'>
		<h1 className={`${snap.className} w-full text-[2rem] text-primary text-center`}>Warunki Platnosci</h1>
		<p>Fundacja Obok Ciebie, korzysta z następującego pośrednika płatności:</p>
		<Link className='text-[1.5rem] underline' href='https://stripe.com'>Stripe.com</Link>
		<p>Jest to <strong>NAJWYŻSZY</strong> poziom bezpieczeństwa jeżeli chodzi o płatności online</p>
		<p className='text-[0.75rem]'>Stripe został poddany audytowi przez audytora posiadającego certyfikat PCI i posiada certyfikat PCI Service Provider Level 1. Jest to najbardziej rygorystyczny poziom certyfikacji dostępny w branży płatniczej. Audyt ten obejmuje zarówno magazyn danych kart Stripe (CDV), jak i bezpieczny rozwój oprogramowania kodu integracyjnego Stripe.</p>
		<p>Na dzień 20.11.2023 Fundacja korzysta z ogólnodostępnego planu Stripe. Oznacza to że Stripe pobiera prowizję od każdej płatności:</p>
		<Link className='text-[1.5rem] underline' href='https://stripe.com/en-pl/pricing'>Stripe Prowizje</Link>
		<p>Checmy żeby wszystkie wpłaty dokonane na nasze zbiórki były w 100% przekazane na te zbiórki. Ze względu na to kontaktujemy się z pośrednikiem płatności żeby uniknąć prowizji, aczkolwiek potrzebuje to trochę czasu :)</p>
	</Section>
)

export default WarunkiPlatnosci