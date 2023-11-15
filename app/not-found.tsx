import Section from '@/components/shared/Section'
import Link from 'next/link'
import Button from '@/components/button/Button'
import { snap } from '@/app/fonts'

export default function NotFound() {
  return (
    <Section>
      <h2 className={`${snap.className} text-primary text-[2rem]`}>Oops, pomyłka 0_0</h2>
      <p>Takiej strony nie istnieje</p>
      <Link href="/">
        <Button>
          Strona główna
        </Button>
      </Link>
    </Section>
  )
}
