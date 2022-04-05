import styles from './Sidebar.module.css'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div>   
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            <a className={styles.openbtn} onClick={ () => { sidebarnav.style.width="250px" }}><i className="medium material-icons">dehaze</i></a>
            <div className={styles.sidebar} id={"sidebarnav"}>
                <a className={styles.closebtn} onClick={() => { sidebarnav.style.width="0px" }}>&times;</a>
                <div>
                    <div className={styles.logoImage}></div>
                </div>
                <div>
                <Link href="/"><a className={styles.a}>Home</a></Link>
                <Link href="/about"><a className={styles.a}>About Us</a></Link>
                <Link href="/whatsnew"><a className={styles.a}>What's New</a></Link>
                <Link href="/chrome"><a className={styles.a}>Add to Chrome</a></Link>
                <Link href="/contact"><a className={styles.a}>Contact</a></Link>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;