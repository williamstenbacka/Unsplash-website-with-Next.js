import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a href='/' className={styles.logo}>
                <div className={styles.logoImage}></div>
                <span>unsplash</span>
            </a>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/"><a className={styles.a}>Home</a></Link></li>
                <li className={styles.li}><Link href="/whatsnew"><a className={styles.a}>What's New</a></Link></li>
                <li className={styles.li}><Link href="/chrome"><a className={styles.a}>Add to Chrome</a></Link></li>
                <li className={styles.li}><Link href="/about"><a className={styles.a}>About Us</a></Link></li>
                <li className={styles.li}><Link href="/contact"><a className={styles.a}>Contact</a></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;