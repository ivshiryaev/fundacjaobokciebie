import Section from '@/components/shared/Section'
import { snap } from '@/app/fonts'

import data from '@/constants/data.json'

function PolitykaPrywatnosci() {
	return (
		<Section className='container mx-auto gap-[4rem]'>
			<h1 className={`${snap.className} text-primary text-center text-[2rem]`}>
				{data.politykaPrywatnosci.title}
			</h1>
			<div className='flex flex-col max-w-[48rem] gap-[4rem] leading-relaxed'>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 1</p>
						<p>Postanowienia ogólne</p>
					</div>
					<div className='flex flex-col gap-[0.5rem]'>
						<p>
							1. Operatorem strony www.fundacjaobokciebie.com (zwanej także Stroną) jest Fundacja Obok Ciebie, wpisana do rejestru stowarzyszeń, innych organizacji społecznych i zawodowych, fundacji oraz samodzielnych publicznych zakładów opieki zdrowotnej (zwanej dalej także Operatorem), która ma na uwadze poszanowanie prywatności użytkowników odwiedzających tą stronę.
						</p>
						<ul className='list-disc list-inside'><li>zapisywanych w logach serwera WWW;</li><li>zapisywanych w formularzach kontaktowych;</li><li>zapisywanych w urządzeniach końcowych w ramach plików Cookies.</li></ul>
					</div>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 2</p>
						<p>Prawa autorskie i prawa pokrewne</p>
					</div>
					<div>
						<p>
							1. Strona stanowi utwór w rozumieniu ustawy z dnia 04 lutego 1994 r. o prawie autorskim i prawach pokrewnych (tekst jedn. Dz. U. 2018 poz. 1191) i zakazane jest jego wykorzystywanie jakiejkolwiek treści Strony w całości lub w części w celach niekomercyjnych lub komercyjnych bez uprzedniej zgody Operatora.
						</p>
						<p>
							2. Operator zastrzega sobie wszelkie prawa do Strony zgodnie z prawem powszechnie obowiązującym.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 3</p>
						<p>Zakres odpowiedzialności</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Operator dba o publikowanie treści w sposób rzetelny, jednakże Operator nie odpowiada za skutki ewentualnego wykorzystywania tych treści przez użytkowników lub osoby trzecie bez naruszenia w jakiejkolwiek części pkt II niniejszej polityki.
						</li>
						<li>
							Strona zawiera odnośniki do innych stron prowadzonych przez innych operatorów. Operator nie odpowiada również za treść oraz politykę prywatności linkowanych stron prowadzonych przez innych operatorów. Operator zaleca każdorazowe zapoznanie się z polityką prywatności po przejściu do linkowanej strony.
						</li>
						<li>
							Niniejsza polityka dotyczy Strony www.fundacjaobokciebie.com
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 4</p>
						<p>Gromadzenie danych</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Strona przechowuje zapytania HTTP kierowane do serwera Strony jak również przeglądane zasoby na podstawie adresów URL.
						</li>
						<li>
							W plikach logów serwera WWW, o ile to technicznie możliwe, przechowywane są następujące informacje:
						</li>
						<ul className='px-[1rem] list-inside list-disc'>
							<li>adres IP</li>
							<li>nazwa stacji klienta</li>
							<li>czas nadejścia zapytania,</li>
							<li>pierwszy wiersz żądania http,</li>
							<li>czas wysłania odpowiedzi,</li>
							<li>kod odpowiedzi HTTP,</li>
							<li>nazwę stacji klienta identyfikowanej na podstawie protokołu HTTP, w przypadku gdy jest to możliwe,</li>
							<li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
							<li>adres URL strony poprzednio przeglądanej przez użytkownika w przypadku skierowania na Stronę poprzez odnośnik,</li>
							<li>informacje o przeglądarce użytkownika,</li>
							<li>liczba wysłanych przez serwer bajtów,</li>
							<li>inne dane techniczne o anonimowym charakterze,</li>
						</ul>
						<li>
							Powyższe dane nie są kojarzone z konkretnymi osobami przeglądającymi Stronę.
						</li>
						<li>
							Dane powyższe są przechowywane przez czas nieokreślony i ewentualnie wykorzystywane jedynie dla celów administrowania Stroną oraz celów statystycznych.
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 5</p>
						<p>Formularze</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Użytkownik, który jedynie przegląda Stronę zapoznając się z jej treścią nie ma obowiązku ujawniać swojej tożsamości.
						</li>
						<li>
							Strona zbiera odpowiednie informacje podane dobrowolnie przez użytkownika w formularzach takie jak: imię, nazwisko, adres e-mail, kod pocztowy, miejscowość, kraj, w celu dokonania procesu, do którego służy dany formularz np. kontaktu z Fundacją.
						</li>
						<li>
							W przypadku gdy dane, o których mowa w ust. 1 pozwalają na identyfikację osoby fizycznej to dane te są przetwarzane zgodnie z obowiązującą polityką ochrony danych osobowych Operatora.
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 6</p>
						<p>Pliki Cookies</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Strona korzysta z plików Cookies, które nie są wykorzystywane do pozyskiwania jakichkolwiek informacji o użytkownikach Strony ani śledzenia ich nawigacji.
						</li>
						<li>
							Pliki Cookies zawierają nazwę Strony, czas przechowywania ich na urządzeniu końcowym, unikalny numer . Dane te nie są kojarzone z konkretnymi osobami przeglądającymi strony.
						</li>
						<li>
							Pliki Cookies nie przechowują żadnych danych osobowych użytkowników.
						</li>
						<li>
							Pliki Cookies wykorzystywane są w celach statystycznych oraz utrzymania sesji użytkownika.
						</li>
						<li>
							Pliki Cookies dzielą się na sesyjne, które są przechowywane w urządzeniu użytkownika do czasu wylogowania lub opuszczenia strony oraz stałe, które są przechowywane na urządzeniu użytkownika do czasu ich usunięcia przez użytkownika lub zgodnie z parametrami tych plików.
						</li>
						<li>
							Użytkownicy mogą zablokować przechowywanie plików Cookies poprzez odpowiednią konfigurację swojej przeglądarki internetowej. Przydatna w tym zakresie może być opcja Pomoc, która może znajdować w danej przeglądarce użytkownika.
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 7</p>
						<p>Udostępnienie i powierzenie przetwarzania danych</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Udostępnianie jakichkolwiek danych jest możliwe w granicach prawa powszechnie obowiązującego lub w przypadku wyrażenia zgody konkretnej osoby.
						</li>
						<li>
							Powierzenie przetwarzania danych osobowych może się odbywać na podstawie umów Operatora z podmiotami trzecimi zawieranymi na podstawie prawa powszechnie obowiązującego.
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-[0.5rem]'>
					<div className='text-xl text-center font-semibold'>
						<p>Art. 8</p>
						<p>Postanowienia końcowe</p>
					</div>
					<ul className='list-inside list-decimal'>
						<li>
							Każdy Użytkownik powinien korzystać ze Strony w sposób ostrożny, w szczególności powinien korzystać z najnowszego oprogramowania antywirusowego, włączyć tzw. firewall’a jak również stosować wszelkie inne środki bezpieczeństwa.
						</li>
						<li>
							Korzystanie ze Strony oznacza akceptację wszystkich wymienionych powyżej zasad.
						</li>
						<li>
							W przypadku zmiany przez Operatora niniejszej polityki prywatności aktualna jej wersja jest publikowana na Stronie.
						</li>
					</ul>
				</div>
			</div>
		</Section>
	)
}

export default PolitykaPrywatnosci