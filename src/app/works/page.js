'use client'

import { useMemo, useState } from 'react'
import { works } from '@/data/content'
import WorkCard from '@/components/WorkCard'
import styles from './page.module.css'

const FILTERS = [
  'All',
  'Illustration',
  'Music',
  'Video',
  'Article',
]

export default function Works() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    return active === 'All'
      ? works
      : works.filter(
          w => w.type === active.toLowerCase()
        )
  }, [active])

  return (
    <main className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>

        <div className={styles.heroLeft}>
          <p className={`label ${styles.eyebrow}`}>
            Portfolio
          </p>

          <h1 className={`display ${styles.title}`}>
            Works
          </h1>
        </div>

        <div className={styles.heroRight}>
          <p className={styles.description}>
            A selected archive of visual,
            musical, written, and experimental
            works across multiple media.
          </p>
        </div>

      </section>

      {/* FILTER BAR */}
      <section className={styles.toolbar}>

        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`${styles.filter} ${
                active === f
                  ? styles.filterActive
                  : ''
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.count}>
          <span className="label">
            {filtered.length} works
          </span>
        </div>

      </section>

      {/* GRID */}
      <section className={styles.grid}>
        {filtered.map((work, i) => (
          <WorkCard
            key={work.id}
            work={work}
            index={i}
          />
        ))}
      </section>

    </main>
  )
}