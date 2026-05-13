import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <p className={`display ${styles.name}`}>
            TAKUTO TSUJI
          </p>

          <p className={styles.caption}>
            Portfolio Archive 
          </p>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          {/* <p className="label">
            Tokyo / Japan
          </p>

          <p className="label">
            © 2026
          </p> */}
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Image src='/github-mark-white.png' alt='Github icon' width='10' height='10' />
          </a> */}
          <p className="label">
            © 2026 takuto tsuji
          </p>
        </div>

      </div>

    </footer>
  )
}