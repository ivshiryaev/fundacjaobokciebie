import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#E42324',
        myGray:'#ededed',
        myGray2:'#939393',
        success:'rgb(74 222 128)',
      }
    },
  },
  plugins: [],
}
export default config
