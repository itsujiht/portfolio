'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Nav.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
]

export default function Nav() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>

      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${
          open ? styles.overlayOpen : ''
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SIDEBAR */}
      <aside
        className={`${styles.sidebar} ${
          open ? styles.sidebarOpen : ''
        }`}
      >

        <div className={styles.inner}>

          <div className={styles.top}>
            <p className={styles.logo}>
              Portfolio
            </p>

            <nav className={styles.links}>
              {links.map(link => {
                const active =
                  pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.link} ${
                      active
                        ? styles.active
                        : ''
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className={styles.bottom}>
            <p>
              © 2026
            </p>

            <p>
              Tokyo / Saitama
            </p>
          </div>

        </div>

      </aside>
    </>
  )
}