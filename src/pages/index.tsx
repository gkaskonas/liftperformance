import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Hero2 from '@/components/hero2'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
    </div>
  )
}
