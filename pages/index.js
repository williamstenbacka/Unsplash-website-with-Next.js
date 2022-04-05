import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Unsplash</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.header}>
          
          <Navbar />
          <Sidebar />

          <div className={styles.content}>
            <h1 className={styles.h1}>Photos for <br/> everyone</h1>
            <p className={styles.p}>Over 2 million free high-resolution images brought to you by the world's most generous community of photographers.</p>
            <div className={styles.links}>
              <Link href="/about"><a className={styles.btn}>Learn More</a></Link>
              <Link href="/contact"><a> or Contact</a></Link>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
