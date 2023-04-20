import Image from 'next/image'
import { Public_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Head from 'next/head'
import SidebarMenu from '@/components/Sidebar'
// import styles from '@/styles/Home.module.css'

const font = Public_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sigma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Header />
        <SidebarMenu />
      </main>
    </>
  )
}
