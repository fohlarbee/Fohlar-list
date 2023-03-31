import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Fohlar's Listings</title>
      <meta name="keywords" content="listings" />
    </Head>
      <div>
          <h2 className={styles.title}>Homepage</h2>
          <p className={styles.text}>Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Consequatur, ipsumconsectetur adipisicing elit. Consequatur, ipsum</p>
          <p className={styles.text}>Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Consequatur, ipsumconsectetur adipisicing elit. Consequatur, ipsum</p>
          <p className={styles.text}>Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Consequatur, ipsumconsectetur adipisicing elit. Consequatur, ipsum</p>
          <Link className={styles.btn} href='/listings'>See All Listings</Link>
      </div>
    </>
   
  )
}
