import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const snap = localFont({
  src: './snap itc.ttf',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})