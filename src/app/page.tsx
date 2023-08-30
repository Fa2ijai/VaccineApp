import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import InfoCard from '@/components/InfoCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='flex place-content-around p-10'>
        <InfoCard hospitalName='Chulalongkorn Hospital' imgRef='/img/chula.jpg'/>
        <InfoCard hospitalName='Rajavithi Hospital' imgRef='/img/rajavithi.jpg'/>
        <InfoCard hospitalName='Thammasat University Hospital' imgRef='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}
