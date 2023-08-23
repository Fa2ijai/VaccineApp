import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import InfoCard from '@/components/InfoCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{padding:"20px"}}>
        <InfoCard/>
      </div>
    </main>
  )
}
