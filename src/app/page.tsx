import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        CORPO FORA DO NAVBAR
      </main>
    </div>
  )
}
