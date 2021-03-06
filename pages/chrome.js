import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Yrkesprov</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.header}>
          
          <Navbar />
          <Sidebar />

          <div className={styles.content}>
            <h1 className={styles.h1}>Add Unsplash to Chrome</h1>
            <p className={styles.p}><a href='https://chrome.google.com/webstore/detail/unsplash-for-chrome/hliiefogghiapfajokakaehafbdpokgh'>Click here to add Unsplash to your Chome browser</a></p>
          </div>

        </div>
      </main>

    </div>
  )
}
